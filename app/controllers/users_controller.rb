class UsersController < ApplicationController
  before_action :ensure_user_signed_in!

  def show
    if current_user.id == params[:id].to_i
      render json: current_user.public_attributes.merge(can_follow: false)
    else
      user = User.can_follow(current_user).find(params[:id])
      render json: user.public_attributes
    end
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
