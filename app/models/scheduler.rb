class Scheduler < ApplicationRecord
  belongs_to :user, required: true
  belongs_to :note, required: true

  def first_review?
    created_at == updated_at_was
  end
end
