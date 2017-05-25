class User < ApplicationRecord
  attribute :can_follow, :boolean, default: false

  devise(
    :database_authenticatable,
    :registerable,
    :recoverable,
    :rememberable,
    :trackable,
    :validatable
  )

  # TODO: cleanup associated records when deleted
  has_many :notes
  has_many :schedulers
  has_many :followed_follows,
    class_name: "Follow", foreign_key: "followed_id"
  has_many :follower_follows,
    class_name: "Follow", foreign_key: "follower_id"
  has_many :followed, through: :follower_follows, source: :followed
  has_many :followers, through: :followed_follows, source: :follower

  validates :username, presence: true
end
