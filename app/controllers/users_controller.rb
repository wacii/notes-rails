class UsersController < ApplicationController
  before_action :ensure_user_signed_in!

  def show
    user = User.can_follow(current_user).find(params[:id])
    render json: user.public_attributes
  end

  def followers
    user = User.find(params[:id])
    render json: user.followers
  end

  def followed
    user = User.find(params[:id])
    render json: user.followed
  end
end
