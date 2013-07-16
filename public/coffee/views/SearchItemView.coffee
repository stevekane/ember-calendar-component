AR.SearchItemView = Ember.View.extend
  templateName: 'searchitem'

  type: (->
    switch @get('content.status')
      when "active" then return "client"
      when "inactive" then return "client"
      else return "lead"
  ).property('content.status')

  classTag: (->
    "#{@get('type')}tag"
  ).property('content.status', 'type')

