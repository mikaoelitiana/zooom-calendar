'use strict';

/**
 * @ngdoc function
 * @name zooomCalendarApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the zooomCalendarApp
 */
angular.module('zooomCalendarApp')
  .controller('LoginCtrl', function ($rootScope, $scope, authProvider) {
    $scope.account = {};
    $scope.login = function(){
      authProvider.login($scope.account, $rootScope.redirectTo);
    };
  });
