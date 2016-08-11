/**
 * Created by anshu.c.kumar on 8/11/2016.
 */

eventsApp.directive('eventThumbnail', function($compile) {
    return {

        restrict: 'E',
        // use replace to remove from HTMl as directives are not valid html tags.
        replace: true,
        templateUrl: "/templates/directives/eventThumbnail.html",

        //  Isolate scope do not work. Not generating anything so Need to add event for refer to parent scope.
        scope: {
            // can also use @ and & in place of =
            event: "=myEvent"
        }

    };
});