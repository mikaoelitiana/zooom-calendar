'use strict';

/**
 * @ngdoc service
 * @name zooomCalendarApp.event
 * @description
 * # event
 * Service in the zooomCalendarApp.
 */
angular.module('zooomCalendarApp')
  .service('eventService', function ($http) {
    return {
      get: function () {
        return $http({
          method: 'GET',
          url: '/api/events'
        });
      },
      save: function (data) {
        return $http({
          method: 'POST',
          url: '/api/events' + (data.id ? '/#{data.id}' : '' ),
          data: data
        });
      },
      getByCategory: function (cat) {
        return $http({
          url: '/api/events/category/' + cat
        });
      }
    };
  });
