require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
    sign_in @user
  end

  test "show renders user with can_follow bool" do
    get user_path(@user), xhr: true
    user_json = JSON.parse(@response.body)
    assert_not(user_json["can_follow"])

    user = create(:user)
    get user_path(user), xhr: true
    user_json = JSON.parse(@response.body)
    assert(user_json["can_follow"])

    create(:follow, follower: @user, followed: user)
    get user_path(user), xhr: true
    user_json = JSON.parse(@response.body)
    assert_not(user_json["can_follow"])
  end

  test "serves users followers" do
    create(:follow, followed: @user)
    get followers_user_path(@user), xhr: true
    users_json = JSON.parse(@response.body)
    assert_equal(users_json.length, 1)

    user = create (:user)
    create(:follow, follower: user)
    create(:follow, followed: user)
    get followers_user_path(user), xhr: true
    users_json = JSON.parse(@response.body)
    assert_equal(users_json.length, 1)
  end

  test "serves users followed" do
    create(:follow, follower: @user)
    get followed_user_path(@user), xhr: true
    users_json = JSON.parse(@response.body)
    assert_equal(users_json.length, 1)

    user = create (:user)
    create(:follow, follower: user)
    create(:follow, followed: user)
    get followed_user_path(user), xhr: true
    users_json = JSON.parse(@response.body)
    assert_equal(users_json.length, 1)
  end
end
