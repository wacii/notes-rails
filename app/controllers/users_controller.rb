class UsersController < ApplicationController
  before_action :ensure_user_signed_in!

  def show
    @user =
      if current_user.id == params[:id].to_i
        current_user
      else
        user = User.find(params[:id])
        user.can_follow = !current_user.followed.exists?(id: user.id)
        user
      end
  end

  def followers
    @users = User.find(params[:id]).followers
    render template: "users/index"
  end

  def followed
    @users = User.find(params[:id]).followed
    render template: "users/index"
  end
end
