require "models/Person.js"
require "models/Quote.js"
require "models/Policy.js"
require "models/Flow.js"
require "models/Reminder.js"

require "models/Insurancetype.js"

require "models/FACTORIES.js"

AR.Person.FIXTURES = [
  {id: 1, firstName:  'Sally', lastName: "Johnson",  status: 'lead'},
  {id: 2, firstName:  'Jesse', lastName: "Ventura",  status: 'active'},
  {id: 3, firstName:  'Don Juan', lastName: "DeMarco",  status: 'active'}
  {id: 4, firstName:  'Bertrand', lastName: "Russel",  status: 'lead'},
  {id: 5, firstName:  'James', lastName: "Joyce",  status: 'lead'},
  {id: 6, firstName:  'Captain', lastName: "Hook",  status: 'inactive'}
  {id: 7, firstName:  'Kathy', lastName: "Bates",  status: 'lead'},
  {id: 8, firstName:  'Michael', lastName: "Tyson",  status: 'active'},
  {id: 9, firstName:  'Janine', lastName: "Andresen",  status: 'active'}
  {id: 10, firstName: 'Courtney', lastName: "Love",  status: 'lead'},
  {id: 11, firstName: 'Bryan', lastName: "Boitano",  status: 'lead'},
  {id: 12, firstName: 'Leonard', lastName: "Nimoy",  status: 'inactive'}
  {id: 13, firstName: 'Justin', lastName: "Timberlake",  status: 'lead'},
  {id: 14, firstName: 'Fred', lastName: "Flintstone",  status: 'active'},
  {id: 15, firstName: 'Ayn', lastName: "Rand",  status: 'active'}
  {id: 16, firstName: 'Soren', lastName: "Kierkegard",  status: 'lead'},
  {id: 17, firstName: 'Charlize', lastName: "Theron",  status: 'lead'},
  {id: 18, firstName: 'Andrew', lastName: "Lech",  status: 'lead'}
]

personIds = AR.Person.FIXTURES.mapProperty "id"
quoteCount = 10
policyCount = 2
reminderCount = 20

AR.Quote.FIXTURES = AR.QuoteFactory.spawn quoteCount, personIds

AR.Policy.FIXTURES = AR.PolicyFactory.spawn policyCount, personIds

AR.Reminder.FIXTURES = AR.ReminderFactory.spawn reminderCount, personIds

AR.Insurancetype.FIXTURES = [
  {id: 1, name: "RENTERS"},
  {id: 2, name: "PERSONAL AUTO"},
  {id: 3, name: "TERM LIFE"}
]

AR.Flow.FIXTURES = [
  {id: 0, person_id: 1, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 1, person_id: 2, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 2, person_id: 3, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
  {id: 3, person_id: 4, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 4, person_id: 5, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 5, person_id: 7, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
  {id: 6, person_id: 2, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 7, person_id: 4, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 8, person_id: 11, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
  {id: 9, person_id: 10, insurancetype_id: 1, status: "Quote started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 10, person_id: 2, insurancetype_id: 2, status: "Policy approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 11, person_id: 2, insurancetype_id: 3, status: "Quote approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
]
