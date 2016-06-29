'use strict';

describe('Directive: zmEventsList', function () {

  // load the directive's module
  beforeEach(module('zooomCalendarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<zm-events-list></zm-events-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the zmEventsList directive');
  }));
});
