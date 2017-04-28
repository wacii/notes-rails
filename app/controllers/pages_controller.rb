class PagesController < ApplicationController
  def index
    latest_notes = Note
      .where(public: true).order(:created_at).limit(3)
      .joins(:user).select("notes.*, users.username AS author, users.id AS author_id")

    @data =
      if user_signed_in?
        {
          latest: latest_notes,
          auth: current_user,
          notes: current_user.all_notes
        }
      else
        {
          latest: latest_notes
        }
      end
  end
end
