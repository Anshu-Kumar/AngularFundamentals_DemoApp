/**
 * Created by anshu.c.kumar on 8/11/2016.
 */

eventsApp.directive('upvote', function($compile) {
    return {

        restrict: 'E',
        // use replace to remove from HTMl as directives are not valid html tags.
        replace: true,
        templateUrl: "/templates/directives/upvote.html",

        scope: {
           // calling the parent scope
            upvote : "&",
            downvote : "&",
            count : "="

        }

    };
});