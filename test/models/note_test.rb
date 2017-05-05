require "test_helper"

class NoteTest < ActiveSupport::TestCase
  test "notes.with_author()" do
    user = create(:user)
    create(:note, user: user)
    note = Note.with_author.last
    assert_equal(note.author, user.username)
  end
end
