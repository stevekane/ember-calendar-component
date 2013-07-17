require "models/Client.js"
require "models/Quote.js"
require "models/Policy.js"
require "models/Flow.js"
require "models/Insurancetype.js"

require "models/FACTORIES.js"

AR.Client.FIXTURES = [
  {id: 1, name: 'Sally',  status: 'lead'},
  {id: 2, name: 'Jesse',  status: 'active'},
  {id: 3, name: 'Don Juan',  status: 'active'}
]

clientIds = AR.Client.FIXTURES.mapProperty "id"
quoteCount = 10
policyCount = 2

AR.Quote.FIXTURES = AR.QuoteFactory.spawn quoteCount, clientIds

AR.Policy.FIXTURES = AR.PolicyFactory.spawn policyCount, clientIds

AR.Insurancetype.FIXTURES = [
  {id: 1, name: "RENTERS"},
  {id: 2, name: "PERSONAL AUTO"},
  {id: 3, name: "TERM LIFE"}
]

AR.Flow.FIXTURES = [
  {id: 0, client_id: 1, insurancetype_id: 1, status: "Quote Started", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 1, client_id: 2, insurancetype_id: 2, status: "Policy Approved", quote_ids: [0,1,2,3,4], policy_ids: [0]},
  {id: 2, client_id: 3, insurancetype_id: 3, status: "Quote Approved", quote_ids: [5,6,7,8,9], policy_ids: [1]}
]
