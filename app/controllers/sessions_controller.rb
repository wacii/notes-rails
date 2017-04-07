class SessionsController < Devise::SessionsController
  before_action :set_csrf_header, only: [:create, :destroy]

  private

  def set_csrf_header
    headers['X-CSRF-Token'] = form_authenticity_token
  end
end
