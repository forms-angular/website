'use strict';

var websiteApp = angular.module('websiteApp', [
  'ngRoute',
  'formsAngular',
  'ui.date',
  'ngGrid',
  'ngCkeditor',
  'ui.select2',
  'uploadModule'
]);

websiteApp.config(function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  })
  .controller('DemoCtrl', function ($scope, $location, $anchorScroll) {

  $scope.scrollToSection = function (id) {
    $location.hash(id);
    $anchorScroll();
  };
});


formsAngular.config(['cssFrameworkServiceProvider', 'routingServiceProvider', function (cssFrameworkService, routingService) {
  routingService.start({fixedRoutes: [
    {route: '/', options: {templateUrl: 'partials/landing-page.html'}},
    {route: '/get-started', options: {templateUrl: 'partials/get-started.html'}},
    {route: '/forms', options: {templateUrl: 'partials/forms.html'}},
    {route: '/schemas', options: {templateUrl: 'partials/schemas.html'}},
    {route: '/plugins', options: {templateUrl: 'partials/plugins.html'}},
    {route: '/more', options: {templateUrl: 'partials/more.html'}},
    {route: '/in-the-wild', options: {templateUrl: 'partials/in-the-wild.html'}},
    {route: '/examples', options: {templateUrl: 'partials/examples.html'}},
    {route: '/api-docs', options: {templateUrl: 'partials/api-docs.html'}},
    {route: '/404', options: {templateUrl: 'partials/404.html'}},
    {route: '/z_custom_form/new', options: {templateUrl: 'partials/custom-new.html'}},            // example view override
    {route: '/z_custom_form/:id/edit', options: {templateUrl: 'partials/custom-edit.html'}},      // example view override
    {route: '/z_custom_form/:form/new', options: {templateUrl: 'partials/custom-new.html'}},      // example view override with specified form content
    {route: '/z_custom_form/:form/:id/edit', options: {templateUrl: 'partials/custom-edit.html'}} // example view override with specified form content
  ], html5Mode: false, routing: 'ngroute'});
  cssFrameworkService.setOptions({framework: 'bs2'});
}]);
