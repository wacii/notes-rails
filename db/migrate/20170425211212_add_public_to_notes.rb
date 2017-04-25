class AddPublicToNotes < ActiveRecord::Migration[5.1]
  def change
    add_column :notes, :public, :boolean, default: false
  end
end
