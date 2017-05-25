class AddTimestampsToSchedulers < ActiveRecord::Migration[5.1]
  def change
    add_timestamps :schedulers, null: false, default: Date.current
    change_column :schedulers, :created_at, :datetime,
      null: true, default: nil
    change_column :schedulers, :updated_at, :datetime,
      null: true, default: nil
  end
end
