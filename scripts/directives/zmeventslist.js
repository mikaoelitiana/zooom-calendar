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
      controller: ['$scope', 'eventService', 'Notification', function($scope, eventService, Notification) {
        $scope.updateWeight = function (e, index, item, external, type) {
          var event = {
            id: item.id,
            weight: index
          };
          eventService.save(event)
          .then(function successCallback() {
            Notification.success({message: 'Event saved.', delay: 5000});
          }, function errorCallback() {
            Notification.error({message: 'Error while saving event.', delay: 5000});
          });
        };
      }]
    };
  });
