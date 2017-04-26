class PagesController < ApplicationController
  def index
    @data =
      if user_signed_in?
        {
          username: current_user.username,
          notes: current_user.all_notes
        }
      else
        {}
      end
  end
end
