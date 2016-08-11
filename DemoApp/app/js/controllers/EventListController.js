/**
 * Created by anshu.c.kumar on 8/10/2016.
 */
'use strict';

eventsApp.controller('EventListController',
  function EventListController( $scope,eventData){

      $scope.events = eventData.getAllEvents();

});