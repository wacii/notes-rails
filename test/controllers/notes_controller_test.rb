require "test_helper"

class NotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
    sign_in @user
  end

  test "index serves own notes" do
    note = create(:scheduler, user: @user).note
    get user_notes_path(@user), xhr: true

    notes_json = JSON.parse(@response.body)

    assert_equal(notes_json.length, 1)
    assert_equal(notes_json.first["id"], note.id)
  end

  test "index serves accessible notes" do
    user = create(:user)
    create(:scheduler, user: user, active: false)
    note = create(:scheduler, user: user, active: true).note

    get user_notes_path(user), xhr: true

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

    get notes_latest_path, xhr: true

    notes_json = JSON.parse(@response.body)
    assert_equal(notes_json.length, 3)
  end

  test "creates note" do
    assert_difference("Note.count", 1) do
      post notes_path("note[text]" => "text"), xhr: true
    end
    assert_response(:created)

    post notes_path("note[text]" => ""), xhr: true
    assert_response(:unprocessable_entity)
  end

  test "updates own note" do
    scheduler = create(:scheduler, user: @user)
    note = scheduler.note
    patch note_path(note, "note[interval]" => "11"), xhr: true
    assert_response(:ok)
    assert_equal(scheduler.reload.interval, 11)

    note = create(:note)
    patch note_path(note, "note[interval]" => "11"), xhr: true
    assert_response(:forbidden)
  end

  test "destroys own note" do
    note = create(:scheduler, user: @user).note
    delete note_path(note), xhr: true
    assert_response :ok

    scheduler = Scheduler.find_by(note: note, user: @user)
    assert_not(scheduler.active)

    note = create(:note)
    delete note_path(note), xhr: true
    assert_response :forbidden
  end
end
