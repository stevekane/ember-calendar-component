AR.ActivityItemView = Ember.View.extend
  
  templateName: "activityitem"

  classTag: (->
    @get('content.status')+'tag'
  ).property('content.status')

