json.array! @users do |user|
  json.(user,
    :id,
    :username,
    :email,
    :can_follow,
    :notes_count,
    :followers_count,
    :followed_count
  )
end
