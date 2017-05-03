require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "all_notes() returns authored notes" do
    user = create(:user)
    authored_note = create(:note, user: user)
    anothers_note = create(:note)

    notes = user.all_notes
    assert_includes(notes, authored_note)
    assert_not_includes(notes, anothers_note)
  end

  test "all_notes() returns followed users public notes" do
    user = create(:user)
    followed = create(:user)
    create(:follow, follower: user, followed: followed)

    public_note = create(:note, user: followed, public: true)
    private_note = create(:note, user: followed, public: false)

    notes = user.all_notes
    assert_includes(notes, public_note)
    assert_not_includes(notes, private_note)
  end

  test "User::can_follow(user)" do
    user = create(:user)
    followed = create(:follow, follower: user).followed
    followable = create(:user)

    users = User.can_follow(user)
    assert_not(users.find(followed.id).can_follow)
    assert(users.find(followable.id).can_follow)
  end
end
