class NotesController < ApplicationController
  def index
    return head :unauthorized unless user_signed_in?
    notes =
      if current_user.id == params[:user_id]
        current_user.notes
      else
        User.find(params[:user_id]).notes.where(public: false)
      end
    render json: notes
  end

  def show
    note = Note.find(params[:id])
    return head :forbidden unless note.user == current_user
    render json: note
  end

  def create
    return head :unauthorized unless user_signed_in?
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
