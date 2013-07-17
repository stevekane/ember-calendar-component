require "models/FACTORIES.js"

AR.Client.FIXTURES = [
  {id: 1, name: 'Sally',  status: 'lead'},
  {id: 2, name: 'Jesse',  status: 'active'},
  {id: 3, name: 'Molly',  status: 'lead'},
  {id: 4, name: 'Jenny',  status: 'active'},
  {id: 5, name: 'Thomas', status: 'inactive'}
]

clientIds = AR.Client.FIXTURES.mapProperty "id"
quoteCount = 20
policyCount = 7

AR.Quote.FIXTURES = AR.QuoteFactory.spawn quoteCount, clientIds

AR.Policy.FIXTURES = AR.PolicyFactory.spawn policyCount, clientIds

console.log AR.Quote.FIXTURES
console.log AR.Policy.FIXTURES

console.log AR.Quote.FIXTURES.mapProperty "client_id"
