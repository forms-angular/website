'use strict';
websiteApp.controller('BEnhancedSchemaJustnameandpostcodeCtrl', ['$scope', '$data', function ($scope, $data) {

  $scope.record = $data.record;

  $data.modelNameDisplay = 'Another override';
  $data.dropDownDisplay = 'Custom 2nd Level';


  $scope.contextMenu = [
    {
      divider: true      // Add a divider to your drop down menu
    },
    {
      fn: $scope.doAlert,
      args: ['Reading the data 2', true],
      listing: false,
      creating: false,
      editing: true,
      text: 'Demonstrate reading the data 2'
    }
  ];

}]);
