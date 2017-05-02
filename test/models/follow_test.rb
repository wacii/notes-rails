require 'test_helper'

class FollowTest < ActiveSupport::TestCase
  test "requires both a follower and followed" do
    follow = build(:follow, follower: nil)
    assert_not follow.valid?

    follow = build(:follow, followed: nil)
    assert_not follow.valid?
  end
end
