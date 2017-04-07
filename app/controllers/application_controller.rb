class ApplicationController < ActionController::Base
  # TODO: why exactly does this help?
  #   double check where exactly you have to reload csrf token on client
  protect_from_forgery with: :null_session
end
