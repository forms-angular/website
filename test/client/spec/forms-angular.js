'use strict';

describe('Controller: BaseCtrl', function () {

  // load the controller's module
  beforeEach(function() {
    angular.mock.module('websiteApp');
  });

  var scope,
    $httpBackend;

  describe('forms-angular', function() {

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should request a schema', function () {
      inject(function (_$httpBackend_, $rootScope, $controller, $location) {
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('/api/schema/collection').respond({
          'name': {'path': 'name', 'instance': 'String', 'options': {'form': {'label': 'Organisation Name'}, 'list': true}}
        });
        $location.$$path = '/collection/new';
        scope = $rootScope.$new();
        $controller('BaseCtrl', {$scope: scope});
        $httpBackend.flush();
      });
      expect(scope.formSchema.length).toBe(1);
    });

  });

});
