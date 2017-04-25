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
    Note
      .joins("INNER JOIN users ON notes.user_id = users.id")
      .joins("LEFT OUTER JOIN follows ON follows.follower_id = users.id")
      .where("notes.user_id = :id OR follows.follower_id = :id", id: id)
  end
end
