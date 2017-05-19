class Note < ApplicationRecord
  attribute :recorder_id, :integer
  attribute :interval, :integer, default: 1
  attribute :review_after, :datetime, default: -> { Date.current + 1.day }

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

  def self.with_users_schedulers(user)
    joins("LEFT OUTER JOIN schedulers ON schedulers.note_id = notes.id")
      .where(schedulers: { user_id: [user.id, nil] })
      .select("notes.*, schedulers.interval, schedulers.review_after")
  end

  def self.with_users_active_schedulers(user)
    joins("LEFT OUTER JOIN schedulers ON schedulers.note_id = notes.id")
      .where(schedulers: { user_id: [user.id, nil] })
      .where(schedulers: { active: [true, nil] })
      .select("notes.*, schedulers.interval, schedulers.review_after")
  end

  def self.with_author
    joins(:user).select("notes.*, users.username AS author")
  end
end
