/**
 * Created by anshu.c.kumar on 8/9/2016.
 */

'use strict';

eventsApp.factory('eventData', function($http,$log,$resource){


    var resource = $resource('/data/event/:id', {id:'@id'});
    return{

        getEvent : function(eventId){

            //return $resource('/data/event/:id', {id:'@id'}).get({id:'1_New'});
            return resource.get({id:eventId});
        },

        save : function(event){

            //ToDO: Look up to find the next highest ID
            event.id = 999;
            return resource.save(event);
        },

        getAllEvents : function(){
            return resource.query();

        }

       //getEvent : function(sucesscb){
       //    $http({method: 'GET', url: '/data/event/1_New'}).
       //      success(function (data,status,headers,config){
       //          sucesscb(data);
       //
       //    }).
       //    error(function (data,status,headers,config){
       //          $log.warn(data,status,headers(),config);
       //
       //      });
       //
       //}


        //event:{
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
        //        },
        //        {name: "Creating and using Angular Services", duration: 2,upVoteCount : 0 },
        //        {name: "Angular Routing", duration: 2 , upVoteCount : 0 },
        //        {name: "Creating custom Angular Directives", duration: 3 ,upVoteCount : 0 },
        //        {name: "Testing Angular", duration: 4, upVoteCount : 0 }
        //    ]
        //
        //}

    };

});