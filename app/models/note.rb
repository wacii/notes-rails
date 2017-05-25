class Note < ApplicationRecord
  belongs_to :user, required: true, counter_cache: true
  has_many :schedulers

  validates :text, presence: true
end
