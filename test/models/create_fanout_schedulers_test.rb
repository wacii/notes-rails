require "test_helper"

class CreateFanoutSchedulersTest < ActiveSupport::TestCase
  test "creates schedulers for users without unreviewed notes" do
    followed = create(:user)
    follower = create(:follow, followed: followed).follower
    other_follower = create(:follow, followed: followed).follower

    note = create(:note, public: true, user: followed)
    other_note = create(:note, public: true, user: followed)
    create(:scheduler,
      note: other_note, user: follower, created_at: Date.current - 1.day
    )
    create(:scheduler, note: other_note, user: other_follower)

    assert_difference "Scheduler.count" do
      CreateFanoutSchedulers.new(note).run
    end
    assert_equal(follower.schedulers.count, 2)
    assert_equal(other_follower.schedulers.count, 1)
  end
end
