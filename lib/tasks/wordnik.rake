desc "Create a note for wordnik's word of the day"
task wordnik: :environment do
  Wordnik.new.publish_todays_word
end
