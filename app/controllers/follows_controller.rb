class FollowsController < ApplicationController
  def followers
    return head :unauthorized unless user_signed_in?
    render json: current_user.followers
  end

  def followed
    return head :unauthorized unless user_signed_in?
    render json: current_user.followed
  end

  def create
    return head :unauthorized unless user_signed_in?
    follow = Follow.new(follow_params)
    if follow.save
      render json: follow, status: :created
    else
      render json: follow.error, status: :unprocessable_entity
    end
  end

  def destroy
    follow = Follow.find(params[:id])
    return head :forbidden unless follow.follower == current_user
    follow.destroy!
    render head :ok
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end
end