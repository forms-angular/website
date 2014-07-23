'use strict';

describe('Controller: BaseCtrl', function () {

  // load the controller's module
  beforeEach(function() {
    angular.mock.module('websiteApp');
  });

  var scope;
  var $httpBackend;
  var routingService = {
    parsePathFunc: function () {
      return function  () {
        return {modelName: 'collection', newRecord: true};
      };
    }
  };

  describe('forms-angular', function() {

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should request a schema', function () {
      inject(function (_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('/api/schema/collection').respond({
          'name': {'path': 'name', 'instance': 'String', 'options': {'form': {'label': 'Organisation Name'}, 'list': true}}
        });
        scope = $rootScope.$new();
        $controller('BaseCtrl', {$scope: scope, routingService: routingService});
        $httpBackend.flush();
      });
      expect(scope.formSchema.length).toBe(1);
    });

  });

});
