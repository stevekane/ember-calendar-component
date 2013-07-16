require "router/ApplicationRoute.js"
require "router/HomeRoute.js"
require "router/home/AddpersonRoute.js"
require "router/home/AddquoteRoute.js"

require "router/ClientsRoute.js"

AR.Router.map ->
  @resource "home", path: "/home", ->
    @route "addperson", path: "/addperson"
    @route "addquote", path: "/addquote"
  @resource "clients", path: "/clients"
  @resource "client", path: "/clients/:client_id"
