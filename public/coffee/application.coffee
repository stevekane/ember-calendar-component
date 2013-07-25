window.AR = Ember.Application.create()

require "router/router.js"

require "models/Client.js"
require "models/Policy.js"
require "models/Quote.js"
require "models/Flow.js"
require "models/Insurancetype.js"

require "models/FIXTURES.js"

require "views/search/SearchView.js"
require "views/search/SearchItemView.js"

require "views/clients/ClientsView.js"
require "views/clients/ClientFilterTabView.js"

require "views/modal/ModalView.js"

require "views/dropdown/DropdownView.js"

require "controllers/data/ClientsController.js"
require "controllers/data/QuotesController.js"
require "controllers/data/PolicysController.js"
require "controllers/data/FlowsController.js"
require "controllers/data/InsurancetypesController.js"
require "controllers/data/RemindersController.js"

require "controllers/home/HomeController.js"
require "controllers/home/HomeAddpersonController.js"
require "controllers/home/HomeAddquoteController.js"
require "controllers/home/HomeAddreminderController.js"

require "utils/HandlebarsHelpers.js"
require "utils/Enumerables.js"
require "utils/FactoryHelpers.js"
