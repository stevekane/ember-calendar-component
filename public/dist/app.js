minispade.register('Application.js', function() {
window.App = Ember.Application.create();

//here we add our main router file
minispade.require("router/Router.js");
minispade.require("controllers/ApplicationController.js");
minispade.require("components/KaneDatepickerComponent.js");

});

minispade.register('components/KaneDatepickerComponent.js', function() {
//alias
var computed = Ember.computed;

//helper method used by filter to close over bounds
var inRange = function (lower, upper) {
  return function (each, index) {
    return (index >= lower && index < upper);
  };
};

//Basic Ember object that holds a moment Date object and
//a computed value for its "day of the month"
Day = Ember.Object.extend({
  moment: null,
  date: computed("moment", function () {
    return this.get('moment').date(); 
  })
});

//takes in moment, returns an array of all days in that month
var buildDaysArrayForMonth = function (moment) {
  var daysArray = Em.A()
    , firstDay = moment.clone().startOf('month')
    , lastDay = moment.clone().endOf('month')
    , currentDay = firstDay;

  while (currentDay.isBefore(lastDay)) {
    daysArray.pushObject(Day.create({moment: currentDay}));
    currentDay = currentDay.clone().add('days', 1);
  }

  return daysArray; 
};

//builds an array of nulls of provided length
var buildNullArray = function (length) {
  var nullAr = [];

  for (var i=0; i<length; i++) {
    nullAr.push(null); 
  }
  return nullAr;
};

//chops up provided array into segments of length 7
//and returns a new array of those arrays
var groupByWeeks = function (array) {
  var grouped = Em.A([]);
  
  grouped.pushObject(array.filter(inRange(0, 7)));
  grouped.pushObject(array.filter(inRange(7, 14)));
  grouped.pushObject(array.filter(inRange(14, 21)));
  grouped.pushObject(array.filter(inRange(21, 28)));
  grouped.pushObject(array.filter(inRange(28, 35)));
  grouped.pushObject(array.filter(inRange(35, 42)));

  return grouped;
};

/*
This component is used to select a date from a given month
It could, for example, be used in a form or dropdown component/view
pass in the value for data binding of the chosen date
pass in the currentMonth to set the default currentMonth
*/
App.KaneDatepickerComponent = Ember.Component.extend({

  currentMonth: moment(),

  value: null,

  dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

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

  /*
   week contains array of days
   day contains a moment() and a date (number of that day in the month)
   month array contains nulls and days and is always 42 elements
  1. build array of all the days for a given month
  2. determine what day the month starts on (0 is sun 6 is sat)
  3. build an array of nulls to fill the array up to our starting day
  4. determine how many days are null at the end of the month array
  4. build an array of nulls to fill the array at the tail
  5. construct montharray by concatenating nullhead, days, and nulltail
  6. group the month array by weeks by filtering by 7 length ranges
  */
  weeks: computed("currentMonth", function () {
    var monthArrayLength = 42
      , currentMonth = this.get('currentMonth').clone()
      , daysArray = buildDaysArrayForMonth(currentMonth)
      , firstDayPosition = daysArray.get('firstObject.moment').day() 
      , nullHeadLength = firstDayPosition
      , numberOfDays = daysArray.get('length')
      , nullTailLength = monthArrayLength - nullHeadLength - numberOfDays
      , nullDaysHead = buildNullArray(nullHeadLength) 
      , nullDaysTail = buildNullArray(nullTailLength)
      , monthArray = Em.A(nullDaysHead.concat(daysArray).concat(nullDaysTail))
      , weeks = groupByWeeks(monthArray);

      return weeks; 
  }),
});

});

minispade.register('controllers/ApplicationController.js', function() {
App.ApplicationController = Ember.Controller.extend({
  initialDate: moment(),
  targetDate: null
});

});

minispade.register('router/Router.js', function() {

});
