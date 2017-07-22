require "test_helper"

class FollowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
    sign_in @user
  end

  test "creates a follow" do
    followed = create(:user)
    assert_difference("Follow.count", 1) do
      post follows_path("follow[followed_id]" => followed.id), xhr: true
    end
    assert_response(:created)

    post follows_path("follow[pie]" => "!"), xhr: true
    assert_response(:unprocessable_entity)
  end

  test "destroy a follow if owner" do
    follow = create(:follow)
    delete follow_path(follow), xhr: true
    assert_response(:forbidden)

    follow = create(:follow, follower: @user)
    assert_difference("Follow.count", -1) do
      delete follow_path(follow), xhr: true
    end
    assert_response(:ok)
  end
end
