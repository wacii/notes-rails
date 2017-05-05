class NotesController < ApplicationController
  before_action :ensure_user_signed_in!

  def index
    notes =
      if current_user.id == params[:user_id].to_i
        current_user.notes.with_author
      else
        User.find(params[:user_id]).notes.where(public: true).with_author
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
      render json: note, status: :created
    else
      render json: note.errors, status: :unprocessable_entity
    end
  end

  def update
    note = Note.find(params[:id])
    params = (current_user == note.user ? note_params : follower_note_params)
    if note.update_attributes(params)
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
    params
      .require(:note)
      .permit(:text, :interval, :review_after, :public)
      .merge(recorder_id: current_user.id)
  end

  def follower_note_params
    params
      .require(:note)
      .permit(:interval, :review_after)
      .merge(recorder_id: current_user.id)
  end
end
