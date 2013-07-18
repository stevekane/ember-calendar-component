AR.SearchView = Ember.View.extend

  templateName: 'search/search'
  classNames: ['searchbox']

  currentSearch: ""

  possibleMatches: (->
    currentSearch = @get 'currentSearch'
    #if input is empty, no candidate searches should exist
    if not currentSearch then return []

    candidates = @get "candidates"

    #local filter function
    hasMatchingName = (candidate) ->
      candidate.get('name').indexOf(currentSearch) > -1

    candidates
      .filter(hasMatchingName)
      .uniq()
  ).property('currentSearch')
