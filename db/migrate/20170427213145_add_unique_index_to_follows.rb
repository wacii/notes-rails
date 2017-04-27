class AddUniqueIndexToFollows < ActiveRecord::Migration[5.1]
  def change
    add_index :follows, [:followed_id, :follower_id], unique: true
  end
end
