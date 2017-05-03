class User < ApplicationRecord
  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  )

  has_many :notes
  has_many :followed_follows, class_name: "Follow", foreign_key: "followed_id"
  has_many :follower_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followed, through: :follower_follows, source: :followed
  has_many :followers, through: :followed_follows, source: :follower

  validates :username, presence: true

  def all_notes
    notes = Note
      .joins(:user)
      .joins("LEFT OUTER JOIN follows ON follows.followed_id = users.id")
      .references(:follows)

    notes.where(user_id: id).or(
      notes.where(follows: { follower_id: id }, public: true)
    )
  end

  def self.can_follow(user)
    can_follow = "users.id <> #{user.id} AND follower_id IS NULL"
    joins("LEFT OUTER JOIN follows ON follows.followed_id = users.id")
      .where(follows: { follower_id: [nil, user.id] })
      .select("users.*, #{can_follow} AS can_follow")
  end
end
