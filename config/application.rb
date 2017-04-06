require_relative 'boot'

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module NotesRails
  class Application < Rails::Application
    config.load_defaults 5.1

    config.to_prepare do
      DeviseController.respond_to :json
    end
  end
end
