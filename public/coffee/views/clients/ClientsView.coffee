alias = Ember.computed.alias

###
Clients view builds a hash table on creation and anytime the
view is re-rendered.
The table maps letters ("A", "B", "C", etc) to the position
of that group of contacts on the screen.  This mapping is used
to support scrolling to that group of contacts when a user
clicks a Letter in the header for the contacts list
###
AR.ClientsView = Ember.View.extend

  letters: alias "controller.letters"

  firstLetterClassName: 'clientlistfirstletter'

  didInsertElement: ->
    @_buildLetterPosHash()
    Ember.run.next @, @_updateLetterPosHash

  rerender: ->
    @_super()
    Ember.run.next @, @_updateLetterPosHash

  changeActiveLetter: (letter) ->
    letterPosHash = @get "letterPosHash"
    window.scrollTo 0, letterPosHash[letter]

  _buildLetterPosHash: ->
    letters = @get "letters"
    letterHash = Ember.Object.create()
    for letter in letters
      letterHash[letter] = 0
    @set "letterPosHash", letterHash
      
  _updateLetterPosHash: ->
    firstLetterClassName = "." + @get "firstLetterClassName"
    letterPosHash = @get 'letterPosHash'
    $letterHeaders = $ firstLetterClassName

    $letterHeaders.each( (index, value) ->
      $value = $ value
      letter = $value.text()
      yPos = $value.position().top
      #set these new values in letterPosHash
      letterPosHash.set letter, yPos
    )
