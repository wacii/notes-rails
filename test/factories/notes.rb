FactoryGirl.define do
  sequence :text do |n|
    "text ##{n}"
  end

  factory :note do
    user
    text
  end
end
