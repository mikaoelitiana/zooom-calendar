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
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    eventService.getByCategory(1)
      .then(function(data){
        $scope.category1 = data.data;
      });
    eventService.getByCategory(2)
      .then(function(data){
        $scope.category2 = data.data;
      });
  });
