minispade.register('application.js', function() {
window.AR = Ember.Application.create();
minispade.require("router/router.js");
minispade.require("models/Person.js");
minispade.require("models/Policy.js");
minispade.require("models/Quote.js");
minispade.require("models/Flow.js");
minispade.require("models/Insurancetype.js");
minispade.require("models/Reminder.js");
minispade.require("models/FIXTURES.js");
minispade.require("views/search/SearchView.js");
minispade.require("views/search/SearchItemView.js");
minispade.require("views/people/PeopleView.js");
minispade.require("views/people/PeopleFilterTabView.js");
minispade.require("views/modals/ModalView.js");
minispade.require("views/modals/ModalsAddquotemodalView.js");
minispade.require("views/modals/ModalsAddremindermodalView.js");
minispade.require("views/modals/ModalsAddpersonmodalView.js");
minispade.require("views/dropdown/DropdownView.js");
minispade.require("controllers/modals/AddpersonController.js");
minispade.require("controllers/modals/AddquoteController.js");
minispade.require("controllers/modals/AddreminderController.js");
minispade.require("controllers/data/PersonsController.js");
minispade.require("controllers/data/QuotesController.js");
minispade.require("controllers/data/PolicysController.js");
minispade.require("controllers/data/FlowsController.js");
minispade.require("controllers/data/InsurancetypesController.js");
minispade.require("controllers/data/RemindersController.js");
minispade.require("controllers/home/HomeController.js");
minispade.require("controllers/people/PeopleController.js");
minispade.require("utils/HandlebarsHelpers.js");
minispade.require("utils/Enumerables.js");
minispade.require("utils/Alias.js");
minispade.require("utils/FactoryHelpers.js");

});

minispade.register('controllers/ApplicationController.js', function() {
AR.ApplicationController = Ember.Controller.extend({
  needs: ['persons', 'quotes', 'policys', 'insurancetypes', 'flows', 'reminders']
});

});

minispade.register('controllers/data/FlowsController.js', function() {
AR.FlowsController = Ember.ArrayController.extend();

});

minispade.register('controllers/data/InsurancetypesController.js', function() {
AR.InsurancetypesController = Ember.ArrayController.extend();

});

minispade.register('controllers/data/PersonsController.js', function() {
AR.PersonsController = Ember.ArrayController.extend();

});

minispade.register('controllers/data/PolicysController.js', function() {
AR.PolicysController = Ember.ArrayController.extend();

});

minispade.register('controllers/data/QuotesController.js', function() {
AR.QuotesController = Ember.ArrayController.extend();

});

minispade.register('controllers/data/RemindersController.js', function() {
AR.RemindersController = Ember.ArrayController.extend();

});

minispade.register('controllers/home/HomeController.js', function() {
var alias, inArray;
minispade.require("utils/Enumerables.js");

inArray = AR.EnumberableUtils.inArray;

alias = Ember.computed.alias;

AR.FilterManager = Ember.Object.extend({
  personFilterSummary: "View All People",
  typeFilterSummary: "View All Types",
  statusFilterSummary: "Status",
  personFilters: [
    Ember.Object.create({
      filter: "active",
      checked: true
    }), Ember.Object.create({
      filter: "inactive",
      checked: true
    }), Ember.Object.create({
      filter: "lead",
      checked: true
    })
  ],
  typeFilters: [
    Ember.Object.create({
      filter: "TERM LIFE",
      checked: true
    }), Ember.Object.create({
      filter: "PERSONAL AUTO",
      checked: true
    }), Ember.Object.create({
      filter: "RENTERS",
      checked: true
    })
  ],
  statusFilters: [
    Ember.Object.create({
      filter: "Quote started",
      checked: true
    }), Ember.Object.create({
      filter: "Quote uploaded",
      checked: true
    }), Ember.Object.create({
      filter: "Quote sent to client",
      checked: true
    }), Ember.Object.create({
      filter: "Quote approved",
      checked: true
    }), Ember.Object.create({
      filter: "Policy uploaded",
      checked: true
    }), Ember.Object.create({
      filter: "Policy sent to client",
      checked: true
    }), Ember.Object.create({
      filter: "Policy approved",
      checked: true
    })
  ],
  activePersonFilters: (function() {
    return this.get('personFilters').filterProperty('checked').getEach("filter");
  }).property('personFilters.@each.checked'),
  activeTypeFilters: (function() {
    return this.get('typeFilters').filterProperty('checked').getEach("filter");
  }).property('typeFilters.@each.checked'),
  activeStatusFilters: (function() {
    return this.get('statusFilters').filterProperty('checked').getEach("filter");
  }).property('statusFilters.@each.checked')
});

AR.HomeController = Ember.Controller.extend({
  needs: ['flows', 'persons', 'reminders', 'insurancetypes'],
  filterManager: AR.FilterManager.create(),
  insuranceTypes: alias("controllers.insurancetypes"),
  flows: alias("controllers.flows"),
  persons: alias("controllers.persons"),
  reminders: alias("controllers.reminders"),
  filteredFlows: (function() {
    var filtered, flows, personFilters, statusFilters, typeFilters;
    flows = this.get('flows');
    personFilters = this.get("filterManager.activePersonFilters");
    typeFilters = this.get("filterManager.activeTypeFilters");
    statusFilters = this.get("filterManager.activeStatusFilters");
    filtered = flows.filter(inArray(personFilters, "person.status")).filter(inArray(typeFilters, "insuranceType.name")).filter(inArray(statusFilters, "status"));
    return filtered;
  }).property('flows.@each', 'persons.@each', 'filterManager.activePersonFilters.@each', 'filterManager.activeTypeFilters.@each', 'filterManager.activeStatusFilters.@each'),
  sortedFilteredReminders: (function() {
    var activeDay, filteredRems, reminders, sortedRems;
    reminders = this.get("reminders");
    activeDay = this.get("activeDay");
    filteredRems = reminders.filter(function(rem) {
      var targetDateTime;
      targetDateTime = moment(rem.get('targetDateTime'));
      return targetDateTime.isSame(activeDay, 'day');
    });
    sortedRems = Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: filteredRems,
      sortProperties: ['targetDateTime'],
      sortAscending: true
    });
    return sortedRems;
  }).property('reminders.@each', 'activeDay'),
  activeDay: moment(),
  previousDay: function() {
    var activeDay, previousDay;
    activeDay = this.get("activeDay").clone();
    previousDay = activeDay.subtract('days', 1);
    return this.set("activeDay", previousDay);
  },
  nextDay: function() {
    var activeDay, nextDay;
    activeDay = this.get("activeDay").clone();
    nextDay = activeDay.add('days', 1);
    return this.set("activeDay", nextDay);
  }
});

});

minispade.register('controllers/modals/AddpersonController.js', function() {
AR.AddpersonController = Ember.Controller.extend({
  phoneNumberTypes: ['Cell', 'Home', 'Office']
});

});

minispade.register('controllers/modals/AddquoteController.js', function() {
var alias;

alias = Ember.computed.alias;

AR.AddquoteController = Ember.Controller.extend({
  needs: ['insurancetypes', 'persons'],
  clients: alias("controllers.clients.content"),
  insuranceTypes: alias("controllers.insurancetypes.content")
});

});

minispade.register('controllers/modals/AddreminderController.js', function() {
var alias;

alias = Ember.computed.alias;

AR.AddreminderController = Ember.Controller.extend({
  needs: ['reminders', 'insurancetypes', 'persons'],
  reminders: alias("controllers.reminders.content"),
  insuranceTypes: alias("controllers.insurancetypes.content"),
  people: alias("controllers.persons.content"),
  hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  minutes: ["00", "15", "30", "45"],
  amPm: ["AM", "PM"],
  activeDay: moment(),
  previousDay: function() {
    var activeDay, previousDay;
    activeDay = this.get("activeDay").clone();
    previousDay = activeDay.subtract('days', 1);
    return this.set("activeDay", previousDay);
  },
  nextDay: function() {
    var activeDay, nextDay;
    activeDay = this.get("activeDay").clone();
    nextDay = activeDay.add('days', 1);
    return this.set("activeDay", nextDay);
  }
});

});

minispade.register('controllers/people/PeopleController.js', function() {
var alias, inArray, sortByProperties;
minispade.require("utils/Enumerables.js");
minispade.require("utils/Alias.js");

sortByProperties = AR.AliasUtils.sortByProperties;

inArray = AR.EnumberableUtils.inArray;

alias = Ember.computed.alias;

AR.PeopleController = Ember.ArrayController.extend({
  needs: ['persons'],
  people: alias("controllers.persons"),
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "U", "X", "Y", "Z"],
  allTab: Ember.Object.create({
    name: 'ALL',
    active: true
  }),
  leadsTab: Ember.Object.create({
    name: 'LEADS',
    active: false
  }),
  clientsTab: Ember.Object.create({
    name: 'CLIENTS',
    active: false
  }),
  init: function() {
    this._super();
    return this.set("activeTab", this.get('allTab'));
  },
  setActiveTab: function(tab) {
    var allTab, clientsTab, leadsTab;
    allTab = this.get("allTab");
    leadsTab = this.get("leadsTab");
    clientsTab = this.get("clientsTab");
    allTab.set("active", false);
    leadsTab.set("active", false);
    clientsTab.set("active", false);
    tab.set("active", true);
    return this.set("activeTab", tab);
  },
  activeFilters: (function() {
    var activeTabName;
    activeTabName = this.get("activeTab.name");
    switch (activeTabName) {
      case "ALL":
        return ['lead', 'client'];
      case "LEADS":
        return ['lead'];
      case "CLIENTS":
        return ['client'];
    }
  }).property('activeTab'),
  sortedFilteredPeople: (function() {
    var activeFilters, filtered, people, sortedFiltered;
    people = this.get("people");
    activeFilters = this.get('activeFilters');
    filtered = people.filter(inArray(activeFilters, "type"));
    sortedFiltered = sortByProperties(filtered, ['lastName'], true);
    return sortedFiltered;
  }).property('people.@each', 'activeFilters'),
  groups: (function() {
    var groups, letter, letterGroup, letters, people, peopleInGroup, _i, _len;
    letters = this.get("letters");
    people = this.get("sortedFilteredPeople");
    groups = [];
    for (_i = 0, _len = letters.length; _i < _len; _i++) {
      letter = letters[_i];
      peopleInGroup = people.filterProperty("lastNameFirstLetter", letter);
      letterGroup = Ember.Object.create({
        letter: letter,
        people: peopleInGroup
      });
      groups.pushObject(letterGroup);
    }
    return groups;
  }).property('sortedFilteredPeople.@each')
});

});

minispade.register('models/FACTORIES.js', function() {
var randFromList, randMethod;
minispade.require("utils/FactoryHelpers.js");

randFromList = AR.FactoryHelpers.selectRandomFromList;

randMethod = AR.FactoryHelpers.randomMethod;

AR.QuoteFactory = Ember.Object.create({
  states: ['illinois', 'california', 'new york'],
  types: [1, 2, 3, 4],
  spawn: function(quantity, personIds) {
    var effectiveDay, expirationDay, num, quotes, updateDay, _i, _ref;
    quotes = [];
    for (num = _i = 0, _ref = quantity - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; num = 0 <= _ref ? ++_i : --_i) {
      effectiveDay = Math.floor(Math.random() * 90);
      expirationDay = Math.floor(Math.random() * 365) + 90;
      updateDay = Math.floor(Math.random() * 5);
      quotes.push({
        id: num,
        state: randFromList(this.states),
        person_id: randFromList(personIds),
        insurancetype_id: randFromList(this.types),
        notes: "best insurance ever",
        premium: "$100,000 / s",
        effectiveDate: moment().add('days', effectiveDay).toDate(),
        expirationDate: moment().add('days', expirationDay).toDate(),
        createdAt: moment().toDate(),
        updatedAt: moment().subtract('days', updateDay).toDate()
      });
    }
    return quotes;
  }
});

AR.PolicyFactory = Ember.Object.create({
  states: ['illinois', 'california', 'new york'],
  types: [1, 2, 3, 4],
  spawn: function(quantity, personIds) {
    var effectiveDay, expirationDay, num, policies, updateDay, _i, _ref;
    policies = [];
    for (num = _i = 0, _ref = quantity - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; num = 0 <= _ref ? ++_i : --_i) {
      effectiveDay = Math.floor(Math.random() * 90);
      expirationDay = Math.floor(Math.random() * 365) + 90;
      updateDay = Math.floor(Math.random() * 5);
      policies.push({
        id: num,
        state: randFromList(this.states),
        person_id: randFromList(personIds),
        insurancetype_id: randFromList(this.types),
        effectiveDate: moment().add('days', effectiveDay).toDate(),
        expirationDate: moment().add('days', expirationDay).toDate(),
        createdAt: moment().toDate(),
        updatedAt: moment().subtract('days', updateDay).toDate()
      });
    }
    return policies;
  }
});

AR.ReminderFactory = Ember.Object.create({
  notes: ["Call to remind them of serious chance of death", "Tell them how much money they can save", "Bring donuts to office", "Employ so-called 'tactics'", "Discuss weird insurance dream over cocktails"],
  spawn: function(quantity, personIds) {
    var add, date, num, reminders, sub, targetDayOffset, targetHourOffset, _i, _ref;
    reminders = [];
    for (num = _i = 0, _ref = quantity - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; num = 0 <= _ref ? ++_i : --_i) {
      targetDayOffset = Math.floor(Math.random() * 2);
      targetHourOffset = Math.floor(Math.random() * 7);
      date = moment();
      date.randMethod = randMethod;
      add = date.add;
      sub = date.subtract;
      reminders.push({
        id: num,
        targetDateTime: date.randMethod(add, sub, 'days', targetDayOffset).randMethod(add, sub, 'hours', targetHourOffset).toDate(),
        notes: randFromList(this.notes),
        checked: false,
        person_id: randFromList(personIds)
      });
    }
    return reminders;
  }
});

});

minispade.register('models/FIXTURES.js', function() {
var personIds, policyCount, quoteCount, reminderCount;
minispade.require("models/Person.js");
minispade.require("models/Quote.js");
minispade.require("models/Policy.js");
minispade.require("models/Flow.js");
minispade.require("models/Reminder.js");
minispade.require("models/Insurancetype.js");
minispade.require("models/FACTORIES.js");

AR.Person.FIXTURES = [
  {
    id: 1,
    firstName: 'Sally',
    lastName: "Johnson",
    status: 'lead'
  }, {
    id: 2,
    firstName: 'Jesse',
    lastName: "Ventura",
    status: 'active'
  }, {
    id: 3,
    firstName: 'Don Juan',
    lastName: "DeMarco",
    status: 'active'
  }, {
    id: 4,
    firstName: 'Bertrand',
    lastName: "Russel",
    status: 'lead'
  }, {
    id: 5,
    firstName: 'James',
    lastName: "Joyce",
    status: 'lead'
  }, {
    id: 6,
    firstName: 'Captain',
    lastName: "Hook",
    status: 'inactive'
  }, {
    id: 7,
    firstName: 'Kathy',
    lastName: "Bates",
    status: 'lead'
  }, {
    id: 8,
    firstName: 'Michael',
    lastName: "Tyson",
    status: 'active'
  }, {
    id: 9,
    firstName: 'Janine',
    lastName: "Andresen",
    status: 'active'
  }, {
    id: 10,
    firstName: 'Courtney',
    lastName: "Love",
    status: 'lead'
  }, {
    id: 11,
    firstName: 'Bryan',
    lastName: "Boitano",
    status: 'lead'
  }, {
    id: 12,
    firstName: 'Leonard',
    lastName: "Nimoy",
    status: 'inactive'
  }, {
    id: 13,
    firstName: 'Justin',
    lastName: "Timberlake",
    status: 'lead'
  }, {
    id: 14,
    firstName: 'Fred',
    lastName: "Flintstone",
    status: 'active'
  }, {
    id: 15,
    firstName: 'Ayn',
    lastName: "Rand",
    status: 'active'
  }, {
    id: 16,
    firstName: 'Soren',
    lastName: "Kierkegard",
    status: 'lead'
  }, {
    id: 17,
    firstName: 'Charlize',
    lastName: "Theron",
    status: 'lead'
  }, {
    id: 18,
    firstName: 'Andrew',
    lastName: "Lech",
    status: 'lead'
  }
];

personIds = AR.Person.FIXTURES.mapProperty("id");

quoteCount = 10;

policyCount = 2;

reminderCount = 20;

AR.Quote.FIXTURES = AR.QuoteFactory.spawn(quoteCount, personIds);

AR.Policy.FIXTURES = AR.PolicyFactory.spawn(policyCount, personIds);

AR.Reminder.FIXTURES = AR.ReminderFactory.spawn(reminderCount, personIds);

AR.Insurancetype.FIXTURES = [
  {
    id: 1,
    name: "RENTERS"
  }, {
    id: 2,
    name: "PERSONAL AUTO"
  }, {
    id: 3,
    name: "TERM LIFE"
  }
];

AR.Flow.FIXTURES = [
  {
    id: 0,
    person_id: 1,
    insurancetype_id: 1,
    status: "Quote started",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 1,
    person_id: 2,
    insurancetype_id: 2,
    status: "Policy approved",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 2,
    person_id: 3,
    insurancetype_id: 3,
    status: "Quote approved",
    quote_ids: [5, 6, 7, 8, 9],
    policy_ids: [1]
  }, {
    id: 3,
    person_id: 4,
    insurancetype_id: 1,
    status: "Quote started",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 4,
    person_id: 5,
    insurancetype_id: 2,
    status: "Policy approved",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 5,
    person_id: 7,
    insurancetype_id: 3,
    status: "Quote approved",
    quote_ids: [5, 6, 7, 8, 9],
    policy_ids: [1]
  }, {
    id: 6,
    person_id: 2,
    insurancetype_id: 1,
    status: "Quote started",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 7,
    person_id: 4,
    insurancetype_id: 2,
    status: "Policy approved",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 8,
    person_id: 11,
    insurancetype_id: 3,
    status: "Quote approved",
    quote_ids: [5, 6, 7, 8, 9],
    policy_ids: [1]
  }, {
    id: 9,
    person_id: 10,
    insurancetype_id: 1,
    status: "Quote started",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 10,
    person_id: 2,
    insurancetype_id: 2,
    status: "Policy approved",
    quote_ids: [0, 1, 2, 3, 4],
    policy_ids: [0]
  }, {
    id: 11,
    person_id: 2,
    insurancetype_id: 3,
    status: "Quote approved",
    quote_ids: [5, 6, 7, 8, 9],
    policy_ids: [1]
  }
];

});

minispade.register('models/Flow.js', function() {
var attr, belongsTo, hasMany;

attr = Ember.attr;

hasMany = Ember.hasMany;

belongsTo = Ember.belongsTo;

AR.Flow = Ember.Model.extend({
  id: attr(),
  person: belongsTo("AR.Person", {
    key: "person_id"
  }),
  insuranceType: belongsTo("AR.Insurancetype", {
    key: "insurancetype_id"
  }),
  quotes: hasMany("AR.Quote", {
    key: "quote_ids"
  }),
  policys: hasMany("AR.Policy", {
    key: "policy_ids"
  }),
  status: attr()
});

AR.Flow.adapter = Ember.FixtureAdapter.create();

});

minispade.register('models/Insurancetype.js', function() {
var attr;

attr = Ember.attr;

AR.Insurancetype = Ember.Model.extend({
  id: attr(),
  name: attr()
});

AR.Insurancetype.adapter = Ember.FixtureAdapter.create();

});

minispade.register('models/Person.js', function() {
var attr, hasMany;

attr = Ember.attr;

hasMany = Ember.hasMany;

AR.Person = Ember.Model.extend({
  id: attr(),
  firstName: attr(),
  lastName: attr(),
  status: attr(),
  quotes: hasMany("AR.Quote", {
    key: "quote_ids"
  }),
  policies: hasMany("AR.Policy", {
    key: "policy_ids"
  }),
  name: (function() {
    return "" + (this.get('firstName')) + " " + (this.get('lastName'));
  }).property('firstName', 'lastName'),
  lastNameFirstLetter: (function() {
    return this.get('lastName')[0];
  }).property('lastName'),
  type: (function() {
    switch (this.get('status')) {
      case "active":
        return "client";
      case "inactive":
        return "client";
      default:
        return "lead";
    }
  }).property('status'),
  classTag: (function() {
    return "" + (this.get('type')) + "tag";
  }).property('type')
});

AR.Person.adapter = Ember.FixtureAdapter.create();

});

minispade.register('models/Policy.js', function() {
var attr, belongsTo, hasMany;

attr = Ember.attr;

hasMany = Ember.hasMany;

belongsTo = Ember.belongsTo;

AR.Policy = Ember.Model.extend({
  id: attr(),
  state: attr(),
  agent: belongsTo("AR.Agent", {
    key: "agent_id"
  }),
  person: belongsTo("AR.Person", {
    key: "person_id"
  }),
  insurancetype: belongsTo("AR.Insurancetype", {
    key: "insurancetype_id"
  }),
  effectiveDate: attr(Date),
  expirationDate: attr(Date),
  policyNumber: attr(),
  policyPremium: attr(),
  createdAt: attr(Date),
  updatedAt: attr(Date)
});

AR.Policy.adapter = Ember.FixtureAdapter.create();

});

minispade.register('models/Quote.js', function() {
var attr, belongsTo, hasMany;

attr = Ember.attr;

hasMany = Ember.hasMany;

belongsTo = Ember.belongsTo;

AR.Quote = Ember.Model.extend({
  id: attr(),
  state: attr(),
  agent: belongsTo("AR.Agent", {
    key: "agent_id"
  }),
  person: belongsTo("AR.Person", {
    key: "person_id"
  }),
  insurancetype: belongsTo("AR.Insurancetype", {
    key: "insurancetype_id"
  }),
  notes: attr(),
  premium: attr(),
  effectiveDate: attr(Date),
  expirationDate: attr(Date),
  policyNumber: attr(),
  policyPremium: attr(),
  createdAt: attr(Date),
  updatedAt: attr(Date)
});

AR.Quote.adapter = Ember.FixtureAdapter.create();

});

minispade.register('models/Reminder.js', function() {
var attr, belongsTo, hasMany;

attr = Ember.attr;

belongsTo = Ember.belongsTo;

hasMany = Ember.hasMany;

AR.Reminder = Ember.Model.extend({
  id: attr(),
  targetDateTime: attr(Date),
  notes: attr(),
  checked: attr(),
  person: belongsTo("AR.Person", {
    key: "person_id"
  })
});

AR.Reminder.adapter = Ember.FixtureAdapter.create();

});

minispade.register('router/ApplicationRoute.js', function() {

minispade.require("controllers/ApplicationController.js");

AR.ApplicationRoute = Ember.Route.extend({
  events: {
    goHome: function() {
      return this.transitionTo("home");
    },
    goPeople: function() {
      return this.transitionTo("people");
    },
    goBack: function() {
      return window.history.back();
    },
    logout: function() {
      return alert("you have attempted to log out!");
    }
  },
  setupController: function(controller) {
    var flowsCon, insurancetypesCon, personsCon, policysCon, quotesCon, remindersCon;
    personsCon = controller.get("controllers.persons");
    personsCon.set("content", AR.Person.find());
    quotesCon = controller.get("controllers.quotes");
    quotesCon.set("content", AR.Quote.find());
    policysCon = controller.get("controllers.policys");
    policysCon.set("content", AR.Policy.find());
    insurancetypesCon = controller.get("controllers.insurancetypes");
    insurancetypesCon.set("content", AR.Insurancetype.find());
    flowsCon = controller.get('controllers.flows');
    flowsCon.set("content", AR.Flow.find());
    remindersCon = controller.get('controllers.reminders');
    return remindersCon.set("content", AR.Reminder.find());
  }
});

});

minispade.register('router/ModalRoute.js', function() {
AR.ModalRoute = Ember.Route.extend({
  closeRoute: "index",
  modalName: "index",
  outletName: "modal",
  intoName: "application",
  controllerName: "index",
  events: {
    close: function() {
      var closeRoute;
      closeRoute = this.get("closeRoute");
      return this.transitionTo(closeRoute);
    }
  },
  renderTemplate: function() {
    var controller, controllerName, intoName, modalName, outletName;
    modalName = this.get("modalName");
    outletName = this.get("outletName");
    intoName = this.get("intoName");
    controllerName = this.get("controllerName");
    controller = this.controllerFor(controllerName);
    return this.render(modalName, {
      into: intoName,
      outlet: outletName,
      controller: controller
    });
  }
});

});

minispade.register('router/home/HomeAddpersonRoute.js', function() {
AR.HomeAddpersonRoute = AR.ModalRoute.extend({
  closeRoute: "home",
  modalName: "modals/addpersonmodal",
  outletName: "modal",
  intoName: "home",
  controllerName: "addperson"
});

});

minispade.register('router/home/HomeAddquoteRoute.js', function() {
AR.HomeAddquoteRoute = AR.ModalRoute.extend({
  closeRoute: "home",
  modalName: "modals/addquotemodal",
  outletName: "modal",
  intoName: "home",
  controllerName: "addquote"
});

});

minispade.register('router/home/HomeAddreminderRoute.js', function() {
AR.HomeAddreminderRoute = AR.ModalRoute.extend({
  closeRoute: "home",
  modalName: "modals/addremindermodal",
  outletName: "modal",
  intoName: "home",
  controllerName: "addreminder"
});

});

minispade.register('router/home/HomeRoute.js', function() {

minispade.require("views/home/ActivityItemView.js");

AR.HomeRoute = Ember.Route.extend({
  events: {
    addPerson: function() {
      return this.transitionTo("home.addperson");
    },
    addQuote: function() {
      return this.transitionTo("home.addquote");
    },
    addReminder: function() {
      return this.transitionTo("home.addreminder");
    }
  }
});

});

minispade.register('router/people/PeopleAddpersonRoute.js', function() {
AR.PeopleAddpersonRoute = AR.ModalRoute.extend({
  closeRoute: "people",
  modalName: "modals/addpersonmodal",
  outletName: "modal",
  intoName: "people",
  controllerName: "addperson"
});

});

minispade.register('router/people/PeopleRoute.js', function() {
AR.PeopleRoute = Ember.Route.extend({
  events: {
    addPerson: function() {
      return this.transitionTo("people.addperson");
    }
  }
});

});

minispade.register('router/router.js', function() {

minispade.require("router/ApplicationRoute.js");
minispade.require("router/ModalRoute.js");
minispade.require("router/home/HomeRoute.js");
minispade.require("router/home/HomeAddpersonRoute.js");
minispade.require("router/home/HomeAddquoteRoute.js");
minispade.require("router/home/HomeAddreminderRoute.js");
minispade.require("router/people/PeopleRoute.js");
minispade.require("router/people/PeopleAddpersonRoute.js");

AR.Router.map(function() {
  this.resource("home", {
    path: "/home"
  }, function() {
    this.route("addperson", {
      path: "/addperson"
    });
    this.route("addquote", {
      path: "/addquote"
    });
    this.route("addreminder", {
      path: "/addreminder"
    });
    return this.route("editreminder", {
      path: "/editreminder/:reminder_id"
    });
  });
  this.resource("people", {
    path: "/people"
  }, function() {
    return this.route("addperson", {
      path: "/addperson"
    });
  });
  return this.resource("person", {
    path: "/person/:person_id"
  });
});

});

minispade.register('utils/Alias.js', function() {
AR.AliasUtils = Ember.Object.create({
  sortByProperties: function(array, sortProperties, sortAscending) {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      content: array,
      sortProperties: sortProperties,
      sortAscending: sortAscending
    });
  }
});

});

minispade.register('utils/Computed.js', function() {
AR.ComputedUtils = Ember.Object.create({
  sortByProperty: function(arrayName, sortProperties, sortAscending) {
    var depKey;
    depKey = arrayName + ".@each";
    return Ember.computed(depKey, function() {
      var content;
      content = this.get(arrayName);
      return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
        content: content,
        sortProperties: sortProperties,
        sortAscending: sortAscending
      });
    });
  },
  filterByProperty: function(arrayName, property) {
    var depKey;
    depKey = arrayName + ".@each." + property;
    return Ember.computed(depKey, function() {
      var content;
      content = this.get(arrayName);
      return content.filterProperty(property);
    });
  }
});

});

minispade.register('utils/Enumerables.js', function() {
AR.EnumberableUtils = Ember.Object.create({
  inArray: function(list, property) {
    return function(element) {
      var position, prop;
      prop = element.get(property);
      position = list.indexOf(prop);
      return position > -1;
    };
  },
  valueInList: function(list, val) {
    return list.indexOf(val) > -1;
  }
});

});

minispade.register('utils/FactoryHelpers.js', function() {
AR.FactoryHelpers = Ember.Object.create({
  randomMethod: function(method1, method2) {
    var args;
    args = Array.prototype.slice.call(arguments, 2);
    if (Math.random() > .5) {
      method1.apply(this, args);
    } else {
      method2.apply(this, args);
    }
    return this;
  },
  selectRandomFromList: function(list) {
    return list[Math.round(Math.random() * (list.length - 1))];
  }
});

});

minispade.register('utils/HandlebarsHelpers.js', function() {
var helper;

helper = Ember.Handlebars.registerBoundHelper;

helper('highlightMatching', function(name, search) {
  if (name.indexOf(search) < 0) {
    return name;
  }
  return new Handlebars.SafeString(name.replace(search, "<b>" + search + "</b>"));
});

helper('timeToday', function(date) {
  return moment(date).format('h a');
});

helper('nameAndDate', function(date) {
  return moment(date).format('dddd MMMM D, YYYY');
});

helper('dayName', function(date) {
  return moment(date).format('dddd');
});

helper('monthDayYear', function(date) {
  return moment(date).format('MMMM D, YYYY');
});

});

minispade.register('views/dropdown/DropdownView.js', function() {
AR.DropdownView = Ember.View.extend({
  layoutName: "dropdown/dropdown",
  classNames: ["dropdowncontainer"],
  isActive: false,
  toggleActive: function() {
    return this.toggleProperty('isActive');
  }
});

});

minispade.register('views/home/ActivityItemView.js', function() {
AR.ActivityItemView = Ember.View.extend({
  templateName: "home/activityitem",
  personType: (function() {
    var status;
    status = this.get("content.person.status");
    switch (status) {
      case "active":
        return "client";
      case "inactive":
        return "client";
      default:
        return "lead";
    }
  }).property('content.person.status'),
  classTag: (function() {
    var type;
    type = this.get('personType');
    return "" + type + "tag";
  }).property('content.person.status')
});

});

minispade.register('views/modals/ModalView.js', function() {
AR.ModalView = Ember.View.extend({
  layoutName: "modals/modal",
  init: function() {
    this._super();
    this.set("boundSetSizes", this.get('setSizes').bind(this));
    return $(document).ready(this.get('boundSetSizes'));
  },
  windowHeight: 0,
  windowWidth: 0,
  setSizes: function() {
    var $window;
    $window = $(window);
    this.set("windowHeight", $window.height());
    return this.set("windowWidth", $window.width());
  },
  willInsertElement: function() {
    return $(window).on('resize', this.get('boundSetSizes'));
  },
  willDestroyElement: function() {
    return $(window).off('resize', this.get('boundSetSizes'));
  },
  windowSize: (function() {
    return "height: " + (this.get('windowHeight')) + "px; width: " + (this.get('windowWidth')) + "px";
  }).property('windowHeight', 'windowWidth').cacheable()
});

});

minispade.register('views/modals/ModalsAddpersonmodalView.js', function() {
AR.ModalsAddpersonmodalView = AR.ModalView.extend({
  templateName: "modals/addpersonmodal"
});

});

minispade.register('views/modals/ModalsAddquotemodalView.js', function() {
AR.ModalsAddquotemodalView = AR.ModalView.extend({
  templateName: "modals/addquotemodal"
});

});

minispade.register('views/modals/ModalsAddremindermodalView.js', function() {
AR.ModalsAddremindermodalView = AR.ModalView.extend({
  templateName: "modals/addremindermodal"
});

});

minispade.register('views/people/PeopleFilterTabView.js', function() {
var alias;

alias = Ember.computed.alias;

AR.PeopleFilterTabView = Ember.View.extend({
  tagName: "nav",
  classNameBindings: ['activepersonfilter', 'tabClass', 'tabName'],
  activepersonfilter: alias("tab.active"),
  tabClass: 'peoplelistfilter',
  tabName: alias("tab.name"),
  click: function(event) {
    var controller, tab;
    controller = this.get("controller");
    tab = this.get("tab");
    return controller.setActiveTab(tab);
  }
});

});

minispade.register('views/people/PeopleView.js', function() {
var alias;

alias = Ember.computed.alias;

/*
Clients view builds a hash table on creation and anytime the
view is re-rendered.
The table maps letters ("A", "B", "C", etc) to the position
of that group of contacts on the screen.  This mapping is used
to support scrolling to that group of contacts when a user
clicks a Letter in the header for the contacts list
*/


AR.PeopleView = Ember.View.extend({
  firstLetterClassName: 'peoplelistfirstletter',
  didInsertElement: function() {
    this._buildLetterPosHash();
    return Ember.run.next(this, this._updateLetterPosHash);
  },
  rerender: function() {
    this._super();
    return Ember.run.next(this, this._updateLetterPosHash);
  },
  scrollToLetter: function(letter) {
    var letterPosHash;
    letterPosHash = this.get("letterPosHash");
    return window.scrollTo(0, letterPosHash[letter]);
  },
  _buildLetterPosHash: function() {
    var letter, letterHash, letters, _i, _len;
    letters = this.get("controller.letters");
    letterHash = Ember.Object.create();
    for (_i = 0, _len = letters.length; _i < _len; _i++) {
      letter = letters[_i];
      letterHash[letter] = 0;
    }
    return this.set("letterPosHash", letterHash);
  },
  _updateLetterPosHash: function() {
    var $letterHeader, $letterHeaders, firstLetterClassName, letter, letterHeader, letterPosHash, yPos, _i, _len, _results;
    firstLetterClassName = "." + this.get("firstLetterClassName");
    letterPosHash = this.get('letterPosHash');
    $letterHeaders = $(firstLetterClassName);
    _results = [];
    for (_i = 0, _len = $letterHeaders.length; _i < _len; _i++) {
      letterHeader = $letterHeaders[_i];
      $letterHeader = $(letterHeader);
      letter = $letterHeader.text();
      yPos = $letterHeader.position().top;
      _results.push(letterPosHash.set(letter, yPos));
    }
    return _results;
  }
});

});

minispade.register('views/search/SearchItemView.js', function() {
AR.SearchItemView = Ember.View.extend({
  templateName: 'search/searchitem',
  type: (function() {
    switch (this.get('content.status')) {
      case "active":
        return "client";
      case "inactive":
        return "client";
      default:
        return "lead";
    }
  }).property('content.status'),
  classTag: (function() {
    return "" + (this.get('type')) + "tag";
  }).property('content.status', 'type')
});

});

minispade.register('views/search/SearchView.js', function() {
AR.SearchView = Ember.View.extend({
  templateName: 'search/search',
  classNames: ['searchbox'],
  currentSearch: "",
  possibleMatches: (function() {
    var candidates, currentSearch, hasMatchingName;
    currentSearch = this.get('currentSearch');
    if (!currentSearch) {
      return [];
    }
    candidates = this.get("candidates");
    hasMatchingName = function(candidate) {
      return candidate.get('name').indexOf(currentSearch) > -1;
    };
    return candidates.filter(hasMatchingName).uniq();
  }).property('currentSearch')
});

});
