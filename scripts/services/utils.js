'use strict';

/**
 * @ngdoc service
 * @name zooomCalendarApp.utils
 * @description
 * # utils
 * Service in the zooomCalendarApp.
 */
angular.module('zooomCalendarApp')
  .service('utils', function () {
    this.toArray = function (obj) {
      return Object.keys(obj).map(function(k) { return obj[k]; });
    };
  });
