AR.ActivityItemView = Ember.View.extend
  
  templateName: "home/activityitem"

  type: (->
    switch @get('content.client.status')
      when "active" then return "client"
      when "inactive" then return "client"
      else return "lead"
  ).property('content.client.status')

  classTag: (->
    "#{@get('type')}tag"
  ).property('content.status', 'type')
