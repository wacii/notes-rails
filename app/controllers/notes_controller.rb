class NotesController < ApplicationController
  before_action :ensure_user_signed_in!
  before_action :respond_with_json

  def index
    user = User.find(params[:user_id])
    @schedulers = user.schedulers.includes(note: :user)
      .where(active: true)
  end

  def latest
    # TODO: move into materialized view
    latest_notes = Note
      .joins(:user)
      .select("notes.*, users.username AS author")
      .where(public: true)
      .order(created_at: :desc)
      .limit(3)
    render json: latest_notes
  end

  def create
    @note = current_user.notes.build(note_params)
    if @note.save
      @scheduler = @note.schedulers.create!(user: current_user)
      CreateFanoutSchedulers.new(@note).run if @note.public
      render template: "notes/scheduled_note", status: :created
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def update
    @note = Note.find(params[:id])
    @scheduler = @note.schedulers.find_by(user_id: current_user.id)
    if @scheduler.update_attributes(scheduler_params)
      if @scheduler.first_review?
        CreateNextFollowerScheduler.new(@note.user, current_user).run
      end
      render template: "notes/scheduled_note"
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @note = Note.find(params[:id])
    @scheduler = Scheduler.find_or_create_by(
      note_id: @note.id,
      user_id: current_user.id
    )
    @scheduler.update_attributes!(active: false)
    User.decrement_counter(:notes_count, current_user.id)
    render template: "notes/scheduled_note"
  end

  private

  def note_params
    params.require(:note).permit(:text, :public)
  end

  def scheduler_params
    params.require(:note).permit(:interval, :review_after)
  end
end
