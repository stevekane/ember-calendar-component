Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<header id=\"pageheader\">\n\n  <h1 id=\"title\">Agent Run</h1> \n\n  <div id=\"homenav\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goHome", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Home</div>\n  <div id=\"clientsnav\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goClients", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Clients</div>\n\n  ");
  hashContexts = {'candidatesBinding': depth0};
  hashTypes = {'candidatesBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.SearchView", {hash:{
    'candidatesBinding': ("controller.controllers.clients.content")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n  <div id=\"logout\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >Log Out</div>\n\n</header>\n\n<div id=\"subheader\">\n  <div id=\"back\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goBack", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("><</div>\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "subheader", options) : helperMissing.call(depth0, "outlet", "subheader", options))));
  data.buffer.push("\n</div>\n\n<section id=\"main\">\n  ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "main", options) : helperMissing.call(depth0, "outlet", "main", options))));
  data.buffer.push("\n</section>\n\n<footer>\n</footer>\n");
  return buffer;
  
});

Ember.TEMPLATES["clients"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<section id=\"clientlist\">\n  <header id=\"clientlistheader\">\n    <div class=\"clientlistheaderfillerleft\"></div>\n\n    <nav id=\"showall\" class=\"clientlistfilter\">\n      ALL\n    </nav>\n    <nav id=\"showleads\" class=\"clientlistfilter activeclientfilter\">\n      LEADS \n    </nav>\n    <nav id=\"showclients\" class=\"clientlistfilter\">\n      CLIENTS \n    </nav>\n\n    <div class=\"clientlistheaderfillerright\"></div>\n  </header>\n\n  <section id=\"clientlistsubheader\">\n  \n    ");
  hashContexts = {'candidatesBinding': depth0,'classNames': depth0};
  hashTypes = {'candidatesBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.SearchView", {hash:{
    'candidatesBinding': ("controller.content"),
    'classNames': ("clientlistsearch")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    <div id=\"clientsaddperson\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPerson", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >+ New Person</div>\n\n  </section>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["dropdown/dropdown"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  data.buffer.push("<div class=\"dropdownsummary\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("view.isActive")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'target': depth0};
  hashTypes = {'target': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleActive", {hash:{
    'target': ("view")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.summary", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n\n");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "view.isActive", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "home/activities", options) : helperMissing.call(depth0, "partial", "home/activities", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial),stack1 ? stack1.call(depth0, "home/reminders", options) : helperMissing.call(depth0, "partial", "home/reminders", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.outlet),stack1 ? stack1.call(depth0, "modal", options) : helperMissing.call(depth0, "outlet", "modal", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["home/_activities"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"recentactivity\">\n\n  <header id=\"activityheader\" class=\"homeheader\">\n    <h2 class=\"paneltitle\">RECENT ACTIVITY</h2>\n    <div id=\"homeaddperson\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addPerson", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >+ New Person</div>\n    <div id=\"homeaddquote\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addQuote", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >+ New Quote</div>\n  </header>\n\n  <table id=\"activitylist\">\n\n    <tr id=\"activitylistheaders\">\n\n      <th class=\"activitylistheader\">\n        ");
  hashContexts = {'templateName': depth0,'optionsBinding': depth0,'summaryBinding': depth0};
  hashTypes = {'templateName': "STRING",'optionsBinding': "STRING",'summaryBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.DropdownView", {hash:{
    'templateName': ("home/statusdropdown"),
    'optionsBinding': ("controller.filterManager.clientFilters"),
    'summaryBinding': ("controller.filterManager.clientFilterSummary")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </th>\n\n      <th class=\"activitylistheader\">\n        ");
  hashContexts = {'templateName': depth0,'optionsBinding': depth0,'summaryBinding': depth0};
  hashTypes = {'templateName': "STRING",'optionsBinding': "STRING",'summaryBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.DropdownView", {hash:{
    'templateName': ("home/statusdropdown"),
    'optionsBinding': ("controller.filterManager.typeFilters"),
    'summaryBinding': ("controller.filterManager.typeFilterSummary")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </th>\n\n      <th class=\"activitylistheader\">\n        ");
  hashContexts = {'templateName': depth0,'optionsBinding': depth0,'summaryBinding': depth0};
  hashTypes = {'templateName': "STRING",'optionsBinding': "STRING",'summaryBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.DropdownView", {hash:{
    'templateName': ("home/statusdropdown"),
    'optionsBinding': ("controller.filterManager.statusFilters"),
    'summaryBinding': ("controller.filterManager.statusFilterSummary")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </th>\n    </tr>\n\n    ");
  hashContexts = {'itemViewClass': depth0};
  hashTypes = {'itemViewClass': "STRING"};
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "controller.filteredFlows", {hash:{
    'itemViewClass': ("AR.ActivityItemView")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n  </table>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/_reminders"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts, options;
  data.buffer.push("\n    <li class=\"reminder\">\n\n      <div class=\"reminderdetails\">\n        <div class=\"remindernamebox\">\n          <span class=\"remindertag\">TAG</span>\n          <span class=\"reminderclientname\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "reminder.client.firstName", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n        </div>\n        ");
  hashContexts = {'type': depth0,'classNames': depth0};
  hashTypes = {'type': "STRING",'classNames': "STRING"};
  options = {hash:{
    'type': ("checkbox"),
    'classNames': ("remindercheck")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <div class=\"remindertime\">");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.timeToday),stack1 ? stack1.call(depth0, "reminder.targetDateTime", options) : helperMissing.call(depth0, "timeToday", "reminder.targetDateTime", options))));
  data.buffer.push("</div>\n      </div>\n\n      <div class=\"remindernote\">\n        ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "reminder.notes", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n    </li>\n  ");
  return buffer;
  }

  data.buffer.push("<div id=\"reminders\">\n\n  <header id=\"reminderheader\" class=\"homeheader\">\n    <h2 class=\"paneltitle\">TODAY'S REMINDERS</h2>\n    <div id=\"homeaddreminder\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addReminder", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" >+ New Reminder</div>\n  </header>\n\n  <div class=\"plusminuswidget daywidget\">\n    <div class=\"plusminusprev\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousDay", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      <\n    </div>\n    <div class=\"plusminuscur\">\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.dayName),stack1 ? stack1.call(depth0, "activeDay", options) : helperMissing.call(depth0, "dayName", "activeDay", options))));
  data.buffer.push("\n      <br>\n      ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.monthDayYear),stack1 ? stack1.call(depth0, "activeDay", options) : helperMissing.call(depth0, "monthDayYear", "activeDay", options))));
  data.buffer.push("\n    </div>\n    <div class=\"plusminusnext\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextDay", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      >\n    </div>\n  </div>\n\n  <ul id=\"reminderlist\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers.each.call(depth0, "reminder", "in", "controller.sortedFilteredReminders", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </ul>\n\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/activityitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<tr class=\"activity\">\n  <td class=\"activityclient\">\n    <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("view.classTag")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.personType", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n    <span class=\"activityclientname\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "client.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  </td>\n\n  <td class=\"activityinsurancetype\">\n    <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "insuranceType.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  </td>\n\n  <td class=\"activitystatus\">\n    <span>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "status", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  </td>\n</tr>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/addpersonmodal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"modalcontent\">\n  <header class=\"modalheader\">\n    Add New Person\n  </header> \n\n  <form class=\"form\">\n    <section class=\"formcolumn\">\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">First Name</label>\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("formtextfield forminput")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Last Name</label>\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("formtextfield forminput")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Email</label>\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("formtextfield forminput")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Phone #</label>\n        ");
  hashContexts = {'classNames': depth0,'placeholder': depth0};
  hashTypes = {'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'classNames': ("formtextfield forminput addpersonphonenumber"),
    'placeholder': ("(     )   -")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        ");
  hashContexts = {'contentBinding': depth0,'classNames': depth0};
  hashTypes = {'contentBinding': "STRING",'classNames': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'contentBinding': ("controller.phoneNumberTypes"),
    'classNames': ("addpersonphonenumbertype forminput formselect")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Referral</label>\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("formtextfield forminput")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n    </section>\n  </form>\n\n  <footer class=\"modalfooter\">\n    <div class=\"save\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      Add Person\n    </div>\n  </footer>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/addquotemodal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<section class=\"modalcontent\">\n  <header class=\"modalheader\">\n    Add New Quote \n  </header> \n\n  <form class=\"form\">\n    <section class=\"formcolumn\">\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Quote for</label>\n        ");
  hashContexts = {'classNames': depth0,'candidatesBinding': depth0};
  hashTypes = {'classNames': "STRING",'candidatesBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.SearchView", {hash:{
    'classNames': ("forminputblock"),
    'candidatesBinding': ("controllers.clients.content")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Insurance Type</label>\n        ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'optionLabelPath': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("formselect forminput"),
    'contentBinding': ("insuranceTypes"),
    'optionLabelPath': ("content.name")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n    </section>\n  </form>\n\n  <footer class=\"modalfooter\">\n    <div class=\"save\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      Add Quote \n    </div>\n  </footer>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/addremindermodal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<section class=\"modalcontent\">\n  <header class=\"modalheader\">\n    Add New Reminder \n  </header> \n\n  <form class=\"form\">\n    <section class=\"formcolumn\">\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Quote for</label>\n        ");
  hashContexts = {'classNames': depth0,'candidatesBinding': depth0};
  hashTypes = {'classNames': "STRING",'candidatesBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "AR.SearchView", {hash:{
    'classNames': ("forminputblock addreminderclientsearch"),
    'candidatesBinding': ("controllers.clients.content")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Insurance Type</label>\n        ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0,'optionLabelPath': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING",'optionLabelPath': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("formselect forminput"),
    'contentBinding': ("insuranceTypes"),
    'optionLabelPath': ("content.name")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Date</label>\n        <div class=\"plusminuswidget reminderdaywidget forminputblock\">\n          <div class=\"plusminusprev\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousDay", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            <\n          </div>\n          <div class=\"plusminuscur\">\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.dayName),stack1 ? stack1.call(depth0, "activeDay", options) : helperMissing.call(depth0, "dayName", "activeDay", options))));
  data.buffer.push("\n            <br>\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.monthDayYear),stack1 ? stack1.call(depth0, "activeDay", options) : helperMissing.call(depth0, "monthDayYear", "activeDay", options))));
  data.buffer.push("\n          </div>\n          <div class=\"plusminusnext\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextDay", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n            >\n          </div>\n        </div>\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Time</label>\n        <div class=\"forminputblock addremindertimeselect\">\n          ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("formselect forminput addreminderhourselect"),
    'contentBinding': ("hours")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("formselect forminput addreminderminuteselect"),
    'contentBinding': ("minutes")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n          ");
  hashContexts = {'classNames': depth0,'contentBinding': depth0};
  hashTypes = {'classNames': "STRING",'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'classNames': ("formselect forminput addreminderampmselect"),
    'contentBinding': ("amPm")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n        </div>\n      </div>\n\n      <div class=\"formrow\">\n        <label class=\"formlabel\">Notes</label>\n        ");
  hashContexts = {'classNames': depth0};
  hashTypes = {'classNames': "STRING"};
  options = {hash:{
    'classNames': ("forminput addremindernotes")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.textarea),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n      </div>\n\n    </section>\n  </form>\n\n  <footer class=\"modalfooter\">\n    <div class=\"save\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n      Add Reminder \n    </div>\n  </footer>\n</section>\n");
  return buffer;
  
});

Ember.TEMPLATES["home/statusdropdown"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  data.buffer.push("\n    <li class=\"dropdownoption\">\n      ");
  hashContexts = {'type': depth0,'checked': depth0};
  hashTypes = {'type': "ID",'checked': "ID"};
  options = {hash:{
    'type': ("checkbox"),
    'checked': ("option.checked")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "option.filter", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }

  data.buffer.push("<ul class=\"dropdowncontents\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "option", "in", "view.options", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
  
});

Ember.TEMPLATES["modal/modal"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashContexts, hashTypes, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"modalbackground\" ");
  hashContexts = {'style': depth0};
  hashTypes = {'style': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'style': ("view.windowSize")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  <div class=\"modal\">\n    <div class=\"close\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "close", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">X</div>\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["search/search"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n<ul class=\"searchlist\">\n  ");
  hashContexts = {'itemViewClass': depth0};
  hashTypes = {'itemViewClass': "STRING"};
  data.buffer.push(escapeExpression(helpers.each.call(depth0, "view.possibleMatches", {hash:{
    'itemViewClass': ("AR.SearchItemView")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</ul>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n");
  }

  hashContexts = {'value': depth0,'classNames': depth0,'placeholder': depth0};
  hashTypes = {'value': "ID",'classNames': "STRING",'placeholder': "STRING"};
  options = {hash:{
    'value': ("view.currentSearch"),
    'classNames': ("searchfield"),
    'placeholder': ("search for client...")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "view.possibleMatches", {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["search/searchitem"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<li class=\"searchmatch\">\n  <span ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("view.classTag")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "view.type", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  <span>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0,depth0],types:["ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.highlightMatching),stack1 ? stack1.call(depth0, "name", "view.parentView.currentSearch", options) : helperMissing.call(depth0, "highlightMatching", "name", "view.parentView.currentSearch", options))));
  data.buffer.push("</span>\n</li>\n");
  return buffer;
  
});