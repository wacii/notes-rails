require "test_helper"

class NoteTest < ActiveSupport::TestCase
  test "note sets review_after when created" do
    note = create(:note)
    assert_equal note.review_after, Date.current + note.interval.days
  end

  test "notes.with_author()" do
    user = create(:user)
    create(:note, user: user)
    note = Note.with_author.last
    assert_equal(note.author, user.username)
  end
end
