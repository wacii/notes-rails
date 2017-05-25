require "test_helper"

class NotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
    sign_in @user
  end

  test "index serves own notes" do
    note = create(:note, user: @user)
    get user_notes_path(@user)

    notes_json = JSON.parse(@response.body)

    assert_equal(notes_json.length, 1)
    assert_equal(notes_json.first["id"], note.id)
  end

  test "index serves accessible notes" do
    user = create(:user)
    create(:note, user: user, public: false)
    note = create(:note, user: user, public: true)

    get user_notes_path(user)

    notes_json = JSON.parse(@response.body)
    assert_equal(notes_json.length, 1)
    assert_equal(notes_json.first["id"], note.id)
  end

  test "latest serves most recent public notes" do
    create(:note, user: @user, public: false)
    create(:note, user: @user, public: true)

    user = create(:user)
    create(:note, user: user, public: false)
    3.times { create(:note, user: user, public: true) }

    get notes_latest_path

    notes_json = JSON.parse(@response.body)
    assert_equal(notes_json.length, 3)
  end

  test "creates note" do
    assert_difference("Note.count", 1) do
      post notes_path("note[text]" => "text")
    end
    assert_response(:created)

    post notes_path("note[text]" => "")
    assert_response(:unprocessable_entity)
  end

  # test "updates own note" do
  #   note = create(:note, user: @user)
  #   patch note_path(note, "note[text]" => "a change")
  #   assert_response(:ok)
  #   assert_equal(note.reload.text, "a change")
  #
  #   note = create(:note)
  #   patch note_path(note, "note[text]" => "a change")
  #   assert_response(:forbidden)
  # end
  #
  # test "destroys own note" do
  #   note = create(:note, user: @user)
  #   assert_difference("Note.count", -1) do
  #     delete note_path(note)
  #   end
  #   assert_response :ok
  #
  #   note = create(:note)
  #   delete note_path(note)
  #   assert_response :forbidden
  # end
end
