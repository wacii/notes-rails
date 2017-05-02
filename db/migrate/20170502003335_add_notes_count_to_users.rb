class AddNotesCountToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :notes_count, :integer, default: 0
  end
end
