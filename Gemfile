source "https://rubygems.org"
ruby "2.4.1"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 5.1.0.rc1"

gem "pg", "~> 0.18"
gem "puma", "~> 3.7"
gem "sass-rails", github: "rails/sass-rails"

gem "uglifier", ">= 1.3.0"
gem "jbuilder", "~> 2.5"
gem "webpacker", github: "rails/webpacker"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 2.13.0"
  gem "selenium-webdriver"
  gem "factory_girl_rails"
  gem "dotenv-rails"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem "devise"
gem "lograge"
