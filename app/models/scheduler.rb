class Scheduler < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :note, required: true
end
