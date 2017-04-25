class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :notes
  has_many :follows, foreign_key: "follower_id"
  has_many :followers, class_name: "Follow"
  has_many :followed, class_name: "Follow"

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
