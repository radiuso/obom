'use strict';

describe('Directive: poiList', function () {

  // load the directive's module and view
  beforeEach(module('obmApp'));
  beforeEach(module('app/components/poi-list/poi-list.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<poi-list></poi-list>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the poiList directive');
  }));
});
