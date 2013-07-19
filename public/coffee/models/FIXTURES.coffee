require "models/Client.js"
require "models/Quote.js"
require "models/Policy.js"
require "models/Flow.js"
require "models/Reminder.js"

require "models/Insurancetype.js"

require "models/FACTORIES.js"

AR.Client.FIXTURES = [
  {id: 1, firstName: 'Sally', lastName: "Johnson",  status: 'lead'},
  {id: 2, firstName: 'Jesse', lastName: "Ventura",  status: 'active'},
  {id: 3, firstName: 'Don Juan', lastName: "DeMarco",  status: 'active'}
  {id: 4, firstName: 'Bertrand', lastName: "Russel",  status: 'lead'},
  {id: 5, firstName: 'James', lastName: "Joyce",  status: 'lead'},
  {id: 6, firstName: 'Captain', lastName: "Hook",  status: 'inactive'}
]

clientIds = AR.Client.FIXTURES.mapProperty "id"
quoteCount = 10
policyCount = 2
reminderCount = 20

AR.Quote.FIXTURES = AR.QuoteFactory.spawn quoteCount, clientIds

AR.Policy.FIXTURES = AR.PolicyFactory.spawn policyCount, clientIds

AR.Reminder.FIXTURES = AR.ReminderFactory.spawn reminderCount, clientIds

AR.Insurancetype.FIXTURES = [
  {id: 1, name: "RENTERS"},
  {id: 2, name: "PERSONAL AUTO"},
  {id: 3, name: "TERM LIFE"}
]

AR.Flow.FIXTURES = [
  {id: 0, client_id: 1, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 1, client_id: 2, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 2, client_id: 3, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
  {id: 3, client_id: 4, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 4, client_id: 5, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 5, client_id: 6, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
]
