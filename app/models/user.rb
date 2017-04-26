class User < ApplicationRecord
  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  )

  # TODO: followers represent the follows not the underlying users
  has_many :notes
  has_many :followed_follows, class_name: "Follow", foreign_key: "followed_id"
  has_many :follower_follows, class_name: "Follow", foreign_key: "follower_id"
  has_many :followed, through: :follower_follows, source: :follower
  has_many :followers, through: :followed_follows, source: :followed

  validates :username, presence: true

  def all_notes
    notes = Note
      .joins(:user)
      .joins("LEFT OUTER JOIN follows ON follows.follower_id = users.id")
      .references(:follows)

    notes.where(user_id: id).or(
      notes.where(follows: { follower_id: id }, public: true)
    )
  end
end
