FactoryGirl.define do
  sequence :email do |n|
    "text-#{n}@example.com"
  end

  sequence :username do |n|
    "user-#{n}"
  end

  factory :user do
    username
    email
    password "password"
    password_confirmation { password }
  end
end
