window.AR = Ember.Application.create()

require "router/router.js"

require "models/Person.js"
require "models/Policy.js"
require "models/Quote.js"
require "models/Flow.js"
require "models/Insurancetype.js"
require "models/Reminder.js"

require "models/FIXTURES.js"

require "views/search/SearchView.js"
require "views/search/SearchItemView.js"

require "views/people/PeopleView.js"
require "views/people/PeopleFilterTabView.js"

require "views/modals/ModalView.js"
require "views/modals/ModalsAddquotemodalView.js"
require "views/modals/ModalsAddremindermodalView.js"
require "views/modals/ModalsAddpersonmodalView.js"

require "views/dropdown/DropdownView.js"

require "controllers/modals/AddpersonController.js"
require "controllers/modals/AddquoteController.js"
require "controllers/modals/AddreminderController.js"

require "controllers/data/PersonsController.js"
require "controllers/data/QuotesController.js"
require "controllers/data/PolicysController.js"
require "controllers/data/FlowsController.js"
require "controllers/data/InsurancetypesController.js"
require "controllers/data/RemindersController.js"

require "controllers/home/HomeController.js"

require "controllers/people/PeopleController.js"

require "utils/HandlebarsHelpers.js"
require "utils/Enumerables.js"
require "utils/Alias.js"
require "utils/FactoryHelpers.js"
