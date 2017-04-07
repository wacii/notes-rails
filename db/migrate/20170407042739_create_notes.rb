class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.integer :interval, default: 1
      t.references :user, foreign_key: true
      t.datetime :review_after
      t.text :text

      t.timestamps
    end
  end
end
