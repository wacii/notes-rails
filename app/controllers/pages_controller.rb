class PagesController < ApplicationController
  def index
    @data =
      if user_signed_in?
        {
          auth: current_user,
          notes: current_user.all_notes
        }
      else
        {}
      end
  end
end
