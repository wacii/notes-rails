class AddActiveToSchedulers < ActiveRecord::Migration[5.1]
  def change
    add_column :schedulers, :active, :boolean, default: true
  end
end
