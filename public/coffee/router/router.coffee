require "router/ApplicationRoute.js"

require "router/ModalRoute.js"

require "router/home/HomeRoute.js"
require "router/home/HomeAddpersonRoute.js"
require "router/home/HomeAddquoteRoute.js"
require "router/home/HomeAddreminderRoute.js"

require "router/people/PeopleRoute.js"

AR.Router.map ->
  @resource "home", path: "/home", ->
    @route "addperson", path: "/addperson"
    @route "addquote", path: "/addquote"
    @route "addreminder", path: "/addreminder"
    @route "editreminder", path: "/editreminder/:reminder_id"
  @resource "people", path: "/people", ->
    @route "addperson", path: "/addperson"
  @resource "person", path: "/person/:person_id"
