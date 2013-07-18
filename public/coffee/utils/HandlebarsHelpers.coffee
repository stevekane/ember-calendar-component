Ember.Handlebars.registerBoundHelper('highlightMatching', (name, search) ->
  #sanity check...this shoudln't happen
  if name.indexOf(search) < 0 then return name
  #bold tags around the portion of the name that matches the search
  new Handlebars.SafeString name.replace(search, "<b>#{search}</b>")
)

