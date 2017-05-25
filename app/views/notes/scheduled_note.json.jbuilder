json.(@scheduler, :interval, :review_after)
json.(@note, :id, :text, :user_id)
json.author(@note.user.username)
