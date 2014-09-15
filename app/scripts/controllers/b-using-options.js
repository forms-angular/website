'use strict';

websiteApp.controller('BUsingOptionsCtrl', ['$scope', '$data', '$timeout', function ($scope, $data, $timeout) {

  $scope.record = $data.record;

  $data.dropDownDisplay = 'Custom Dropdown';

  $scope.doAlert = function (message, showId) {
    var alertMessage = message;
    if (showId) {
      alertMessage += '\nThe id is ' + $scope.record._id;
    }
    alert(alertMessage);
  };

  $scope.changeCase = function () {

    function changeCaseInt(newCase) {
      for (var property in $scope.record) {
        if (property !== '_id' && typeof $scope.record[property] === 'string') {
          if (newCase === 'lower') {
            $scope.record[property] = $scope.record[property].toLowerCase();
          } else {
            $scope.record[property] = $scope.record[property].toUpperCase();
          }
        }
      }
    }

    if ($scope.record.surname === $scope.record.surname.toLowerCase()) {
      changeCaseInt('upper');
    } else {
      changeCaseInt('lower');
    }
  };

  $scope.contextMenu = [
    {
      fn: $scope.doAlert,
      args: ['Reading the data', true],
      listing: false,
      creating: false,
      editing: true,
      text: 'Demonstrate reading the data'
    },
    {
      fn: $scope.changeCase,
      listing: false,
      creating: false,
      editing: true,
      text: 'Demonstrate modifying the data'
    },
    {
      fn: $scope.doAlert,
      args: ['Big process', false],
      listing: true,
      creating: false,
      editing: false,
      text: 'Run some file wide process'
    }
  ];

  function setColour(number) {
    var colours = ['#81B7DB', '#C2A369', '#6DDB4F', '#47820C'];
    if (number !== '') {
      angular.element(document.querySelector('#cg_f_eyeColour')).css('background-color', colours[parseInt(number)]);
    } else {
      angular.element(document.querySelector('#cg_f_eyeColour')).css('background-color', 'white');
    }
  }

  $scope.$on('formInputDone', function () {
    var eyeColor = angular.element(document.querySelector('#f_eyeColour'));
    eyeColor.on('change', function (e) {
      console.log('change ' + JSON.stringify({val: e.val, added: e.added, removed: e.removed}));
      setColour(e.val);
    });
    $timeout(
      function () {
        if ($scope.record.eyeColour && $scope.record.eyeColour.id) {
          setColour($scope.record.eyeColour.id);
        }
      }, 100);   // very dependent on network speed, but only an illustration and fast enough to pass the e2e test
  });
}]);
