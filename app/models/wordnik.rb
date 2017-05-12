require "net/https"
require "uri"

class Wordnik
  EMAIL = "wordnik@example.com"
  WOTD_URL = "http://api.wordnik.com:80/v4/words.json/wordOfTheDay"

  def initialize
    @user = User.find_by!(email: EMAIL)
  rescue ActiveRecord::RecordNotFound
    @user = User.create!(
      username: "wordnik",
      email: EMAIL,
      password: ENV["WORDNIK_PASSWORD"],
      password_confirmation: ENV["WORDNIK_PASSWORD"]
    )
  end

  def publish_todays_word
    response = fetch(Date.current)
    json = JSON.parse(response.body)
    word = json["word"]
    definitions = json["definitions"].collect { |h| h["text"] }
    Note.create!(user: @user, text: "#{word}: #{definitions.join("\n")}")
  end

  def fetch(date)
    uri = URI.parse(WOTD_URL)
    uri.query = URI.encode_www_form(
      date: date.strftime("%F"),
      api_key: ENV["WORDNIK_API_KEY"]
    )
    Net::HTTP.get_response(uri)
  end
end
