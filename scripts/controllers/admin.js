'use strict';

/**
 * @ngdoc function
 * @name zooomCalendarApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the zooomCalendarApp
 */
angular.module('zooomCalendarApp')
  .controller('AdminCtrl', function ($http, $scope, eventService, countryService, Notification, utils) {
    var getEvents = function() {
      eventService.get()
        .then(function successCallback(response) {
          $scope.events = utils.toArray(response.data);
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
          console.log('Event saved.');
          Notification.success({message: 'Event saved.', delay: 5000});
          $scope.events = response.data;
        }, function errorCallback(response) {
          Notification.error({message: 'Error while saving event.', delay: 5000});
          console.error('Error', response);
      });
    };
  });
