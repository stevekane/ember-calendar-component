#parent class for Modal Views

AR.ModalView = Ember.View.extend
  layoutName: "modals/modal"
  
  #Modals should always resize with the window
  #the willInsert and willRemove hooks are used to setup
  #and teardown $event listeners for window resize
  #these events set a size property which is bound to
  #the inline style by using bindAttr in modal.handlebars

  #we create a bound version of setSizes to allow jQuery on and off
  #to function properly
  init: ->
    @_super()
    @set "boundSetSizes", @get('setSizes').bind(@)
    $(document).ready(@get('boundSetSizes'))

  windowHeight: 0
  windowWidth: 0

  setSizes: ->
    $window = $(window)
    @set "windowHeight", $window.height()
    @set "windowWidth", $window.width()

  willInsertElement: ->
    $(window).on 'resize', @get('boundSetSizes')

  willDestroyElement: ->
    $(window).off 'resize', @get('boundSetSizes')
    
  windowSize: (->
    "height: #{@get 'windowHeight'}px; width: #{@get 'windowWidth'}px"
  ).property('windowHeight', 'windowWidth').cacheable()
