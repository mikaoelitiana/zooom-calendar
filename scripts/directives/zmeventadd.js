'use strict';

/**
 * @ngdoc directive
 * @name zooomCalendarApp.directive:zmEventAdd
 * @description
 * # zmEventAdd
 */
angular.module('zooomCalendarApp')
  .directive('zmEventAdd', function () {
    return {
      templateUrl: 'views/zm-event-add.html',
      restrict: 'E',
      scope: {
        data: '=data'
      },
      controller: ['$scope', 'eventService', 'countryService', 'Notification', function($scope, eventService, countryService, Notification) {
        $scope.countries = countryService.get();
        $('#locationpicker').leafletLocationPicker();
        $scope.showEventForm = function (){
          $scope.showForm = true;
        };
        $scope.saveEvent = function () {
          eventService.save(this.event)
          .then(function successCallback(response) {
            Notification.success({message: 'Event saved.', delay: 5000});
            $scope.events = response.data;
          }, function errorCallback(response) {
            Notification.error({message: 'Error while saving event.', delay: 5000});
        });
        };
        $scope.open1 = function () {
          $scope.popup1.opened = true;
        };
        $scope.open2 = function () {
          $scope.popup2.opened = true;
        };
        $scope.popup1 = {
          opened: false
        };
        $scope.popup2 = {
          opened: false
        };
      }]
    };
  });
