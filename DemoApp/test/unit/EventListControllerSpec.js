/**
 * Created by anshu.c.kumar on 8/11/2016.
 */

'use strict';

describe('EventListController', function() {
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents: function() {}})
    }));

   it('should set the scope events to the results of eventData.getAllEvents', function(){

       var mockEvents = {};
       mockEventData.getAllEvents.returns(mockEvents);

       $controllerConstructor("EventListController",
         {'$scope':scope, eventData: mockEventData});

       expect(scope.events).toBe(mockEvents);


   })

});