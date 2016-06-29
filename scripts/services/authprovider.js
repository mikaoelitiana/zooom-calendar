'use strict';

/**
 * @ngdoc service
 * @name zooomCalendarApp.authProvider
 * @description
 * # authProvider
 * Service in the zooomCalendarApp.
 */
angular.module('zooomCalendarApp')
.factory('authProvider', function($resource, $location, localStorageService, jwtHelper) {
  var user;
  var userActions = {
    'get':    {method:'GET'},
    'login':    {method:'POST'},
    'save':   {method:'POST'},
    'query':  {method:'GET', isArray:true},
    'remove': {method:'DELETE'},
    'delete': {method:'DELETE'}
  };
  var userParams = {};
  var User = $resource('./api/users/login', userParams, userActions);
    return {
      setUser : function(aUser){
        user = aUser;
      },
      getToken: function() {
        return localStorageService.get('zooomJwt');
      },
      isLoggedIn : function(){
        var token = localStorageService.get('zooomJwt');
        if (token) {
          var tokenPayload = jwtHelper.decodeToken(token.jwt);
          return (tokenPayload.data.uid) ? true : false;
        }
        return false;
      },
      login: function(account, redirectTo){
        User.login({action: 'login'}, account, function(res){
          if(res.logged){
            localStorageService.set('zooomJwt', res);
            $location.path(redirectTo);
          }
        });
      }
    };
});
