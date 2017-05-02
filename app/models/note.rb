class Note < ApplicationRecord
  belongs_to :user, required: true, counter_cache: true

  validates :text, presence: true

  before_create do |record|
    self.review_after = Date.current + interval.days
  end

  def self.with_author
    joins(:user).select("notes.*, users.username AS author")
  end
end
