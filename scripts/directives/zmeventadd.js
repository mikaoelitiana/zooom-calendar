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
      controller: ['$scope', 'eventService', 'countryService', function($scope, eventService, countryService) {
        $scope.countries = countryService.get();
        $('#locationpicker').leafletLocationPicker();
        $scope.showEventForm = function (){
          $scope.showForm = true;
        };
        $scope.saveEvent = function () {
          this.event.lat = this.event.latlng.split(',')[0];
          this.event.lon = this.event.latlng.split(',')[1];
          eventService.save(this.event);
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
