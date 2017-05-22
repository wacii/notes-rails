class UsersController < ApplicationController
  before_action :ensure_user_signed_in!

  def show
    if current_user.id == params[:id].to_i
      render json: current_user.public_attributes.merge(can_follow: false)
    else
      user = User.find(params[:id])
      followed = current_user.followed.exists?(id: user.id)
      render json: user.public_attributes.merge(can_follow: !followed)
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
