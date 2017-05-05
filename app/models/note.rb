class Note < ApplicationRecord
  attribute :recorder_id, :integer
  attribute :interval, :integer, default: 1
  attribute :review_after, :datetime, default: -> { Date.current }

  belongs_to :user, required: true, counter_cache: true
  has_many :schedulers

  validates :text, presence: true

  after_save do
    Scheduler.find_or_create_by(
      note_id: id,
      user_id: recorder_id
    ).update_attributes(
      interval: interval,
      review_after: review_after
    )
  end

  def self.with_author
    joins(:user).select("notes.*, users.username AS author")
  end
end
