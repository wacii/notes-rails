class RemoveReviewAfterAndIntervalFromNotes < ActiveRecord::Migration[5.1]
  def change
    remove_column :notes, :interval, :integer, default: 1
    remove_column :notes, :review_after, :datetime
  end
end
