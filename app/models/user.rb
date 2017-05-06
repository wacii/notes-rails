class User < ApplicationRecord
  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  )

  has_many :notes, ->(user) do
    joins("LEFT OUTER JOIN schedulers ON schedulers.note_id = notes.id")
      .where(schedulers: { user_id: [user.id, nil] })
      .where(schedulers: { active: [true, nil] })
      .select("notes.*, schedulers.interval, schedulers.review_after")
  end
  has_many :followed_follows, class_name: "Follow", foreign_key: "followed_id"
  has_many :follower_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followed, through: :follower_follows, source: :followed
  has_many :followers, through: :followed_follows, source: :follower

  validates :username, presence: true

  def self.can_follow(user)
    joins("LEFT OUTER JOIN follows ON follows.followed_id = users.id")
      .where(follows: { follower_id: [nil, user.id] })
      .select("users.*, follower_id IS NULL AS can_follow")
  end

  def public_attributes
    attributes.slice(
      "id",
      "username",
      "email",
      "notes_count",
      "followers_count",
      "followed_count",
      "can_follow"
    )
  end

  def all_notes
    notes = Note
      .joins(:user)
      .joins("LEFT OUTER JOIN follows ON follows.followed_id = users.id")
      .references(:follows)

    notes.where(user_id: id).or(
      notes.where(follows: { follower_id: id }, public: true)
    )
  end
end
