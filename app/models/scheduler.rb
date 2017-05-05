class Scheduler < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :note, required: true

  validates :interval, presence: true
  validates :review_after, presence: true
end
