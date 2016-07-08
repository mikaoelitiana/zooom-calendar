'use strict';

/**
 * @ngdoc function
 * @name zooomCalendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zooomCalendarApp
 */
angular.module('zooomCalendarApp')
  .controller('MainCtrl', function ($scope, eventService) {
    $scope.markers = {};
    $scope.showOnMap = function (id, lon, lat, title) {
      $scope.markers['marker' + id] = {
        lat: lat,
        lng: lon,
        message: title,
        focus: true,
        draggable: false
      };
    };
    eventService.getActiveByCategory(1)
      .then(function(data){
        $scope.category1 = data.data;
      });
    eventService.getActiveByCategory(2)
      .then(function(data){
        $scope.category2 = data.data;
      });
  });
