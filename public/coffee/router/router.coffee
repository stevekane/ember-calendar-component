require "router/ApplicationRoute.js"
require "router/HomeRoute.js"
require "router/home/AddpersonRoute.js"
require "router/home/AddquoteRoute.js"
require "router/home/AddreminderRoute.js"

require "router/ClientsRoute.js"

AR.Router.map ->
  @resource "home", path: "/home", ->
    @route "addperson", path: "/addperson"
    @route "addquote", path: "/addquote"
    @route "addreminder", path: "/addreminder"
    @route "editreminder", path: "/editreminder/:reminder_id"
  @resource "clients", path: "/clients"
  @resource "client", path: "/clients/:client_id"
