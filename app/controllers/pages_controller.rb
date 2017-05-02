class PagesController < ApplicationController
  def index
    latest_notes = Note
      .where(public: true).order(:created_at).limit(3).with_author

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
