json.array! @schedulers do |scheduler|
  json.(scheduler, :interval, :review_after)
  json.(scheduler.note, :id, :text, :user_id)
  json.author(scheduler.note.user.username)
end
