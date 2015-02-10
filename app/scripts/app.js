'use strict';

var websiteApp = angular.module('websiteApp', [
  'ngRoute',
  'formsAngular',
  'ui.date',
  'ngGrid',
  'ngCkeditor',
  'ui.select2',
  'fng.uiSelect',
  'uploadModule',
  'door3.css'
]);

websiteApp
  .config(function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
  })
  .controller('DemoCtrl', function ($scope, $location, $anchorScroll) {

    $scope.scrollToSection = function (id) {
      $location.hash(id);
      $anchorScroll();
    };
  });

websiteApp.frameworks = ['bs2', 'bs3'];   // Just for testing forms-angular
websiteApp.defaultFramework = 'bs2';

formsAngular.config(['cssFrameworkServiceProvider', 'routingServiceProvider', function (cssFrameworkService, routingService) {
  routingService.start(
    {
      // Define the fixed routes (the dynamic routes for CRUD will be created by forms-angular)
      fixedRoutes: [
        {route: '/', options: {templateUrl: 'partials/landing-page.html'}},
        {route: '/get-started', options: {templateUrl: 'partials/get-started.html'}},
        {route: '/forms', options: {templateUrl: 'partials/forms.html'}},
        {route: '/schemas', options: {templateUrl: 'partials/schemas.html'}},
        {route: '/plugins', options: {templateUrl: 'partials/plugins.html'}},
        {route: '/more', options: {templateUrl: 'partials/more.html'}},
        {route: '/in-the-wild', options: {templateUrl: 'partials/in-the-wild.html'}},
        {route: '/supported-by', options: {templateUrl: 'partials/supported-by.html'}},
        {route: '/examples', options: {templateUrl: 'partials/examples.html'}},
        {route: '/api-docs', options: {templateUrl: 'partials/api-docs.html'}},
        {route: '/404', options: {templateUrl: 'partials/404.html'}},
        {route: '/z_custom_form/new', options: {templateUrl: 'partials/custom-new.html'}},            // example view override
        {route: '/z_custom_form/:id/edit', options: {templateUrl: 'partials/custom-edit.html'}},      // example view override
        {route: '/z_custom_form/:form/new', options: {templateUrl: 'partials/custom-new.html'}},      // example view override with specified form content
        {route: '/z_custom_form/:form/:id/edit', options: {templateUrl: 'partials/custom-edit.html'}} // example view override with specified form content
      ],
      routing: 'ngroute',                       // specify the routing we are using
      html5Mode: false,
      variants:  websiteApp.frameworks          // variants is just for testing forms-angular
    }
  );
  cssFrameworkService.setOptions({framework: websiteApp.defaultFramework});
}]);

/**
 * The rest of this file all about testing different frameworks and will almost certainly be of no interest to
 * anyone not working on forms-angulat itself
 *
 * CSSInitialiseCtrl
 * CSSSwitchCtrl
 **/

websiteApp.css = {
  bs2: ['styles/main-bs2.css', 'bower_components/select2-bootstrap-css-1-2/select2-bootstrap.css'],
  bs3: ['styles/main-bs3.css', 'bower_components/select2-bootstrap-css-1-3/select2-bootstrap.css']
};
websiteApp.cssLoaded = false;

websiteApp
  .run(function($location, $css, cssFrameworkService) {
    var framework = $location.path().slice(1);
    var newPath;

    if (websiteApp.frameworks.indexOf(framework) !== -1) {
      cssFrameworkService.setFrameworkForDemoWebsite(framework);
      newPath = $location.path().slice(1 + framework.length)
      if (!newPath[0]) {newPath = '/';}
    } else {
      framework = websiteApp.defaultFramework;
    }
    $css.add(websiteApp.css[framework]);
    if (newPath) {$location.path(newPath);}
    })
  .controller('CSSSwitchCtrl', ['$scope', 'cssFrameworkService', '$css', function($scope, cssFrameworkService, $css) {
    // Switch the CSS when asked
    $scope.$on('fngFormLoadStart', function(event, formScope) {
      if (formScope.variant && formScope.variant !== cssFrameworkService.framework()) {
        $css.remove(css[cssFrameworkService.framework()]);
        cssFrameworkService.setFrameworkForDemoWebsite(formScope.variant);
        $css.add(css[cssFrameworkService.framework()]);
        console.log('Switched to ' + cssFrameworkService.framework());
      }
    });

  }])
;



