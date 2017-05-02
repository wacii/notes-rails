class NotesController < ApplicationController
  before_action :ensure_user_signed_in!

  def index
    notes =
      if current_user.id == params[:user_id].to_i
        current_user.notes.joins(:user)
          .select("notes.*, users.username AS author")
      else
        User.find(params[:user_id]).notes.joins(:user)
          .where(public: true)
          .select("notes.*, users.username AS author")
      end
    render json: notes
  end

  def latest
    latest_notes = Note
      .where(public: true).order(:created_at).limit(3)
      .joins(:user).select(
        "notes.*, users.username AS author, users.id AS author_id"
      )
    render json: latest_notes
  end

  def show
    note = Note.find(params[:id])
    return head :forbidden unless note.user == current_user
    render json: note
  end

  def create
    note = current_user.notes.build(note_params)
    if note.save
      render json: note, status: :created
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def update
    note = Note.find(params[:id])
    return head :forbidden unless note.user == current_user
    if note.update_attributes(note_params)
      render json: note
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def destroy
    note = Note.find(params[:id])
    return head :forbidden unless note.user == current_user
    note.destroy!
    head :ok
  end

  private

  def note_params
    params.require(:note).permit(:text, :interval, :review_after, :public)
  end
end
