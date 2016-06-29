'use strict';

describe('Directive: zmEventAdd', function () {

  // load the directive's module
  beforeEach(module('zooomCalendarApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<zm-event-add></zm-event-add>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the zmEventAdd directive');
  }));
});
