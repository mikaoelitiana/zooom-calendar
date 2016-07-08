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
    $scope.center = {};
    var showOnMap = function (data, $scope) {
      $scope.markers['marker' + data.id] = {
        lat: data.lat,
        lng: data.lon,
        message: data.headline,
        focus: true,
        draggable: false
      };
    };
    var showMultipleOnMap = function (data) {
      for (var i in data) {
        showOnMap(data[i], $scope);
      }
    };
    $scope.showOnMap = function (data) {
      $scope.center = {
        lat: data.lat,
        lng: data.lon,
        zoom: 4
      };
      showOnMap(data, $scope);
    };
    eventService.getActiveByCategory(1)
      .then(function(data){
        $scope.category1 = data.data;
        showMultipleOnMap(data.data);
      });
    eventService.getActiveByCategory(2)
      .then(function(data){
        $scope.category2 = data.data;
        showMultipleOnMap(data.data);
      });
  });
