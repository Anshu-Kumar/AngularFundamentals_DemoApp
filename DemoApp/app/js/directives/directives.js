'use strict';

// Need to use $compile service
eventsApp.directive('mySample', function($compile) {
    return {
        // default restrict is 'A' and other 'E' for element 'C for class
        restrict: 'C',
        /* can replace below by template
        link: function($scope, element, attrs, controller){
            var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>";
            angular.element(element).html($compile(markup)($scope));
        }
        */
        // can also use templateURl for getting more html tags
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",

        // Isolate scope by adding empty scope.
        scope: {

        }

    };
});