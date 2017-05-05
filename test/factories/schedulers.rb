FactoryGirl.define do
  factory :scheduler do
    user
    note
    interval 1
    review_after { Date.current }
  end
end
