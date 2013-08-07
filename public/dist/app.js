minispade.register('Application.js', function() {
window.App = Ember.Application.create();

//here we add our main router file
minispade.require("router/Router.js");
minispade.require("components/KaneDatepickerComponent.js");

});

minispade.register('components/KaneDatepickerComponent.js', function() {
var computed = Ember.computed;
var observes = function (propertyName, fn) {
  return Ember.observer(fn, propertyName);
};
var inRange = function (lower, upper) {
  return function (each, index) {
    return (index >= lower && index < upper);
  };
};

App.Day = Ember.Object.extend({
  moment: null,
  date: computed("moment", function () {
    return this.get('moment').date(); 
  })
});


App.KaneDatepickerComponent = Ember.Component.extend({

  currentMonth: moment(),

  dayName: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

  value: null,

  selectDate: function (day) {
    this.set('value', day.moment); 
  },

  previousMonth: function () {
    var newMonth = this.get('currentMonth')
      .clone()
      .subtract('month', 1);
    this.set("currentMonth", newMonth);
  },

  nextMonth: function () {
    var newMonth = this.get('currentMonth')
      .clone()
      .add('month', 1);
    this.set("currentMonth", newMonth);
  },
  
  currentMonthName: computed("currentMonth", function () {
    var currentMonth = this.get('currentMonth')
      , monthName = currentMonth.format("MMMM YYYY");
      return monthName;
  }),

  days: computed("currentMonth", function () {
    var currentMonth = this.get('currentMonth').clone()
      , month = currentMonth.month()
      , firstDayThisMonth = currentMonth.clone().startOf('month')
      , lastDay = currentMonth.clone().endOf('month')
      , currentDay = firstDayThisMonth
      , days = Em.A([])
      , i;

    //add the offset days to the array
    for (i=0; i<firstDayThisMonth.day() - 1; i++) {
      days.pushObject(null);
    }

    //add all days 
    while (currentDay.isBefore(lastDay)) {
      days.pushObject(App.Day.create({moment: currentDay}));
      currentDay = currentDay.clone().add('days', 1);
    }
    return days;
  }),

  weeks: computed("days", function () {
    var days = this.get('days')
      , weeks = Em.A([]);
    
    weeks.pushObject(days.filter(inRange(0, 7)));
    weeks.pushObject(days.filter(inRange(7, 14)));
    weeks.pushObject(days.filter(inRange(14, 21)));
    weeks.pushObject(days.filter(inRange(21, 28)));
    weeks.pushObject(days.filter(inRange(28, 35)));
    weeks.pushObject(days.filter(inRange(35, 42)));

    return weeks;
  })
});

});

minispade.register('router/Router.js', function() {

});
