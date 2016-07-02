'use strict';

/**
 * @ngdoc directive
 * @name zooomCalendarApp.directive:zmEventsList
 * @description
 * # zmEventsList
 */
angular.module('zooomCalendarApp')
  .directive('zmEventsList', function () {
    return {
      templateUrl: 'views/zm-events-list.html',
      restrict: 'E',
      scope: {
        events: '='
      },
      controller: ['$scope', 'eventService', 'Notification', function($scope, eventService, Notification) {
        $scope.hideEvent = function (event) {
          event.active = 0;
          eventService.save(event)
            .then(function successCallback() {
              Notification.success({message: 'Event saved.', delay: 5000});
            }, function errorCallback() {
              Notification.error({message: 'Error while saving event.', delay: 5000});
            });
        };
        $scope.unhideEvent = function (event) {
          event.active = 1;
          eventService.save(event)
            .then(function successCallback() {
              Notification.success({message: 'Event saved.', delay: 5000});
            }, function errorCallback() {
              Notification.error({message: 'Error while saving event.', delay: 5000});
            });
        };
        $scope.deleteEvent = function (event, index) {
          var del = window.confirm('Delete this event?');
          if (del) {
            eventService.delete(event)
              .then(function successCallback() {
                Notification.success({message: 'Event saved.', delay: 5000});
                $scope.events.splice(index, 1);
              }, function errorCallback() {
                Notification.error({message: 'Error while saving event.', delay: 5000});
              });
          }
        };
        $scope.updateWeight = function (e, index, item) {
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
          return item;
        };
      }]
    };
  });
