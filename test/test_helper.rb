require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "factory_girl"
require "devise"

class ActiveSupport::TestCase
  include FactoryGirl::Syntax::Methods
  include Devise::Test::IntegrationHelpers
end
