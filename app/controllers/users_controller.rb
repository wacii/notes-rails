class UsersController < ApplicationController
  def show
    head :unauthorized unless user_signed_in?
    user = User.find(params[:id])
    render json: user.as_json.merge("can-follow" => true)
  end

  def followers
    head :unauthorized unless user_signed_in?
    user = User.find(params[:id])
    render json: user.followers.select(:id, :username)
  end

  def followed
    head :unauthorized unless user_signed_in?
    user = User.find(params[:id])
    render json: user.followed.select(:id, :username)
  end
end
