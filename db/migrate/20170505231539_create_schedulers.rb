class CreateSchedulers < ActiveRecord::Migration[5.1]
  def change
    create_table :schedulers, id: false do |t|
      t.references :user, foreign_key: true
      t.references :note, foreign_key: true
      t.integer :interval, default: 1
      t.datetime :review_after
    end
  end
end
