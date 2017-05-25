require "test_helper"

class CreateNextFollowerSchedulerTest < ActiveSupport::TestCase
  test "creates a scheduler for one of followed's public notes" do
    follower = create(:user)
    followed = create(:user)

    private_note = create(:note, user: followed, public: false)
    public_note = create(:note, user: followed, public: true)

    assert_difference "Scheduler.count" do
      CreateNextFollowerScheduler.new(followed, follower).run
    end

    scheduler = Scheduler.last
    assert_equal(scheduler.note, public_note)
  end

  test "does not create scheduler for own note" do
    user = create(:user)

    create(:note, user: user, public: false)
    create(:note, user: user, public: true)

    assert_no_difference "Scheduler.count" do
      CreateNextFollowerScheduler.new(user, user).run
    end
  end
end
