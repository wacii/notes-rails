class FollowsController < ApplicationController
  before_action ensure_user_signed_in!

  def create
    follow = Follow.new(follow_params)
    follow.follower = current_user
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
