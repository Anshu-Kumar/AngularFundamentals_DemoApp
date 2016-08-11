'use strict';

// global object so that can create controller and service.
// Need to add ngResource and ngRoute model and js files
var eventsApp = angular.module('eventsApp', ['ngResource','ngRoute'])
  .config(function ($routeProvider,$locationProvider){

      $routeProvider.when('/newEvent',
        {
            templateUrl : 'templates/NewEvent.html',
            controller : 'EditEventController'
        });
      $routeProvider.when('/events',
        {

            templateUrl : 'templates/EventList.html',
            controller : 'EventListController'
        });

      $routeProvider.when('/event/:eventId',
        {
            // custom foo property on route.accessible on controller using $route service
            // template and resolve route property ..??
            foo : "bar",
            templateUrl : 'templates/EventDetails_New.html',
            controller : 'EventController'
        });

      $routeProvider.when('/sampleDirective',
        {
            templateUrl : 'templates/sampleDirective.html',
            controller : 'SampleDirectiveController'
        });

      $routeProvider.otherwise({redirectTo: '/events'});

      $locationProvider.html5Mode(true);

  });

