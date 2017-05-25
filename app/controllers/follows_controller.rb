class FollowsController < ApplicationController
  before_action :ensure_user_signed_in!

  def create
    follow = Follow.new(follow_params)
    follow.follower = current_user
    if follow.save
      CreateNextFollowerScheduler.new(follow.followed, current_user).run
      render json: follow, status: :created
    else
      render json: follow.errors, status: :unprocessable_entity
    end
  end

  def destroy
    follow = Follow.find(params[:id])
    return head :forbidden unless follow.follower == current_user
    follow.destroy!
    head :ok
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end
end
