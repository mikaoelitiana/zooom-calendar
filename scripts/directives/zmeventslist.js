'use strict';

/**
 * @ngdoc directive
 * @name zooomCalendarApp.directive:zmEventsList
 * @description
 * # zmEventsList
 */
angular.module('zooomCalendarApp')
  .directive('zmEventsList', function ($http) {
    return {
      templateUrl: 'views/zm-events-list.html',
      restrict: 'E',
      scope: {
        events: '='
      },
    };
  });
