AR.ActivityItemView = Ember.View.extend
  
  templateName: "home/activityitem"

  personType: (->
    status = @get "content.person.status"
    switch status
      when "active" then return "client"
      when "inactive" then return "client"
      else return "lead"
  ).property('content.person.status')

  classTag: (->
    type = @get 'personType'
    "#{type}tag"
  ).property('content.person.status')
