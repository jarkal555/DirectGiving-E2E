'use strict';

describe('Controller: CausesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngApp'));

  var CausesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CausesCtrl = $controller('CausesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
