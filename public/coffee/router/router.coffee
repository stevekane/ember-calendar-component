require "router/ApplicationRoute.js"
require "router/HomeRoute.js"

AR.Router.map ->
  @resource "home", path: "/home"
  @resource "clients", path: "/clients", ->
    @resource "client", path: "/clients/:client_id"
