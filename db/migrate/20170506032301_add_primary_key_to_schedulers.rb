class AddPrimaryKeyToSchedulers < ActiveRecord::Migration[5.1]
  def up
    drop_table :schedulers
    create_table :schedulers do |t|
      t.references :user, foreign_key: true
      t.references :note, foreign_key: true
      t.integer :interval, default: 1
      t.datetime :review_after
      t.boolean :active, default: true
    end
  end

  def down
    drop_table :schedulers
    create_table :schedulers, id: false do |t|
      t.references :user, foreign_key: true
      t.references :note, foreign_key: true
      t.integer :interval, default: 1
      t.datetime :review_after
      t.boolean :active, default: true
    end
  end
end
