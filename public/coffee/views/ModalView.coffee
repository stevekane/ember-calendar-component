#parent class for Modal Views

AR.ModalView = Ember.View.extend
  layoutName: "modal"
  
  #Modals should always resize with the window
  #the willInsert and willRemove hooks are used to setup
  #and teardown $event listeners for window resize
  #these events set a size property which is bound to
  #the inline style by using bindAttr in modal.handlebars

  #we create a bound version of setSizes to allow jQuery on and off
  #to function properly
  init: () ->
    @_super()
    @set "boundSetSizes", @setSizes.bind(@)

  willInsertElement: ->
    @setSizes()
    $(window).on "resize", @boundSetSizes

  willDestroyElement: () ->
    $(window).off "resize", @boundSetSizes

  setSizes: ->
    $body = $ 'body'
    @set "windowHeight", $body.height()
    @set "windowWidth", $body.width()

  windowSize: (->
    "height: #{@get 'windowHeight'}px; width: #{@get 'windowWidth'}px"
  ).property('windowHeight', 'windowWidth').cacheable()
