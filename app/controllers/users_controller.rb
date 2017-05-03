class UsersController < ApplicationController
  before_action :ensure_user_signed_in!

  def show
    user = User.can_follow(current_user).find(params[:id])
    render json: user.as_json
  end

  def followers
    user = User.find(params[:id])
    render json: user.followers.select(:id, :username)
  end

  def followed
    user = User.find(params[:id])
    render json: user.followed.select(:id, :username)
  end
end
