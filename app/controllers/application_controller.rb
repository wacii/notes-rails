class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end

  def ensure_user_signed_in!
    return head :unauthorized unless user_signed_in?
  end

  def respond_with_json
    request.format = :json
  end
end
