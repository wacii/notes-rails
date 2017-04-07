class Note < ApplicationRecord
  belongs_to :user, required: true

  validates :text, presence: true

  before_create do |record|
    self.review_after = Date.current + interval.days
  end
end
