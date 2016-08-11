/**
 * Created by anshu.c.kumar on 8/11/2016.
 */

'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        link: function(scope, element, attrs, controller) {

            attrs.$observe('email', function(newValue, oldValue) {
                if(newValue !== oldValue) {
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            });
        }
    }
})
