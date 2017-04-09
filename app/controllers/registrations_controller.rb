class RegistrationsController < Devise::RegistrationsController
  after_action :set_csrf_token, only: [:create, :destroy]

  private

  def set_csrf_token
    headers["X-CSRF-Token"] = form_authenticity_token
  end
end
