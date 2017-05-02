require "test_helper"

class NoteTest < ActiveSupport::TestCase
  test "note sets review_after when created" do
    note = create(:note)
    assert_equal note.review_after, Date.current + note.interval.days
  end
end
