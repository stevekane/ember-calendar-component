AR.ModalRoute = Ember.Route.extend

  closeRoute: "index"
  modalName: "index"
  outletName: "modal"
  intoName: "application"
  controllerName: "index"

  events:
    close: ->
      closeRoute = @get "closeRoute"
      @transitionTo closeRoute

  renderTemplate: ->
    modalName = @get "modalName"
    outletName = @get "outletName"
    intoName = @get "intoName"
    controllerName = @get "controllerName"
    controller = @controllerFor controllerName

    @render(modalName, {
      into: intoName
      outlet: outletName
      controller: controller
    })
      

