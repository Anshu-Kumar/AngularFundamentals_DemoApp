/**
 * Created by anshu.c.kumar on 8/7/2016.
 */

'use strict';

eventsApp.controller('EventController',
  /* Added DI event data service */
  function EventController($scope, eventData, $routeParams, $route) {

      $scope.mystyle = {color : "red"};
      $scope.sortorder = "name";


      $scope.event = eventData.getEvent($routeParams.eventId);

      /* Route service
      console.log($route.current.foo);
      console.log($route.current.params.foo);
      console.log($route.current.pathParams.foo);
       */
      $scope.reload = function (){
          $route.reload();
      };

      //eventData.getEvent(function(event){
      //    $scope.event = event;
      //
      //});

      //Calling Service for Data
      //$scope.event = eventData.event;

      //$scope.event = {
      //
      //    name: "AngularJS-MeetUp",
      //    /*date: "01/09/2017",*/
      //    date : "1472709180000",
      //    time: "9:00 am",
      //    location: {
      //        address: "RJS technologies",
      //        city: "Bangalore"
      //    },
      //    imageUrl: "/img/angularjs-logo.png",
      //    sessions: [
      //        {
      //            name: "Angular Controllers & MarkUps",
      //            duration: 1,
      //            upVoteCount : 0
      //         },
      //        {name: "Creating and using Angular Services", duration: 2,upVoteCount : 0 },
      //        {name: "Angular Routing", duration: 2 , upVoteCount : 0 },
      //        {name: "Creating custom Angular Directives", duration: 3 ,upVoteCount : 0 },
      //        {name: "Testing Angular", duration: 4, upVoteCount : 0 }
      //    ]
      //
      //};

      $scope.UpVoteSession = function(session){

          session.upVoteCount ++;
      };

      $scope.DownVoteSession = function(session){

          session.upVoteCount --;
      };

  }
);

