window.AR = Ember.Application.create()

require "router/router.js"

require "models/Client.js"
require "models/Policy.js"
require "models/Quote.js"
require "models/Insurancetype.js"

require "models/FIXTURES.js"

require "views/search/SearchView.js"
require "views/search/SearchItemView.js"

require "views/modal/ModalView.js"

require "views/dropdown/DropdownView.js"

require "controllers/ClientsController.js"
require "controllers/QuotesController.js"
require "controllers/PolicysController.js"
require "controllers/HomeController.js"

Ember.Handlebars.registerBoundHelper('highlightMatching', (name, search) ->
  #sanity check...this shoudln't happen
  if name.indexOf(search) < 0 then return name
  #bold tags around the portion of the name that matches the search
  new Handlebars.SafeString name.replace(search, "<b>#{search}</b>")
)
