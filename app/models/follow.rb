class Follow < ApplicationRecord
  belongs_to :follower,
    class_name: "User", required: true, counter_cache: :followed_count
  belongs_to :followed,
    class_name: "User", required: true, counter_cache: :followers_count
end
