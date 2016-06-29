'use strict';

/**
 * @ngdoc function
 * @name zooomCalendarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the zooomCalendarApp
 */
angular.module('zooomCalendarApp')
  .controller('AdminCtrl', function ($http, $scope, eventService, countryService) {
    var getEvents = function() {
      eventService.get()
        .then(function successCallback(response) {
          $scope.events = response.data;
        }, function errorCallback(response) {
          console.error('No data received', response);
      });
    };
    getEvents();

    $scope.data = {};
    $scope.data.countries = countryService.get();
    $scope.data.save = function () {
      eventService.save($scope.event)
        .then(function successCallback(response) {
          $scope.events = response.data;
        }, function errorCallback(response) {
          console.error('Error', response);
      });
    };
  });
