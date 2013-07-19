helper = Ember.Handlebars.registerBoundHelper

helper('highlightMatching', (name, search) ->
  #sanity check...this shoudln't happen
  if name.indexOf(search) < 0 then return name
  #bold tags around the portion of the name that matches the search
  new Handlebars.SafeString name.replace(search, "<b>#{search}</b>")
)

#moment.js formatting helpers
helper 'timeToday', (date)-> moment(date).format('h a')

helper 'nameAndDate', (date) -> moment(date).format('dddd MMMM D, YYYY')

helper 'dayName', (date) -> moment(date).format('dddd')

helper 'monthDayYear', (date) -> moment(date).format('MMMM D, YYYY')
