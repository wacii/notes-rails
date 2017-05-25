class NotesController < ApplicationController
  before_action :ensure_user_signed_in!

  def index
    notes =
      if current_user.id == params[:user_id].to_i
        current_user.notes
          .with_users_active_schedulers(current_user)
          .with_author
      else
        user = User.find(params[:user_id])
        user.notes
          .where(public: true)
          .with_users_schedulers(user)
          .with_author
      end
    render json: notes
  end

  def latest
    latest_notes = Note
      .where(public: true).order(created_at: :desc).limit(3).with_author
    render json: latest_notes
  end

  def create
    note = current_user.notes.build(note_params)
    if note.save
      note.schedulers.create!(user: current_user)
      CreateFanoutSchedulers.new(note).run if note.public
      render json: note, status: :created
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def update
    note = Note.find(params[:id])
    scheduler = note.schedulers.find_by(user_id: current_user.id)
    if scheduler.update_attributes(scheduler_params)
      if scheduler.first_review?
        CreateNextFollowerScheduler.new(note.user, current_user).run
      end
      render json: note
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    note = Note.find(params[:id])
    Scheduler.find_or_create_by(
      note_id: note.id,
      user_id: current_user.id
    ).update_attributes!(
      active: false
    )
    User.decrement_counter(:notes_count, current_user.id)
    render json: note
  end

  private

  def note_params
    params.require(:note).permit(:text, :public)
  end

  def scheduler_params
    params.require(:note).permit(:interval, :review_after)
  end
end
