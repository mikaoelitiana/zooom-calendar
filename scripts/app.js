'use strict';

/**
 * @ngdoc overview
 * @name zooomCalendarApp
 * @description
 * # zooomCalendarApp
 *
 * Main module of the application.
 */
angular
  .module('zooomCalendarApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-jwt',
    'LocalStorageModule',
    'angular-location-picker',
    'ui.bootstrap',
    'leaflet-directive',
    'ui-notification',
    'dndLists'
  ])
  .config(function ($routeProvider, $httpProvider, jwtInterceptorProvider) {
    jwtInterceptorProvider.tokenGetter = ['authProvider', function(authProvider) {
      return authProvider.getToken().jwt;
    }];
    $httpProvider.interceptors.push('jwtInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin',
        requireAuth: true
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, authProvider) {
      $rootScope.$on('$routeChangeStart', function (event, toRoute) {
        if (!authProvider.isLoggedIn() && typeof(toRoute.$$route.requireAuth) && toRoute.$$route.requireAuth) {
          event.preventDefault();
          $rootScope.redirectTo = toRoute.$$route.originalPath;
          $location.path('/login');
        }
        else {
        }
    });
  })
  .filter('moment', function() {
    return function(dateString, format) {
      return '';
    };
});

$(document).ready(function(){
  $('#locationpicker').leafletLocationPicker();
})
