(function () {
'use strict';

angular.module('lunchCheck', [])
.controller('lunchController', lunchController);

lunchController.$inject = ['$scope'];
function lunchController($scope, $filter) {
  $scope.messageOut = "Enjoy!";

  $scope.check = function() {
    var s = $scope.inputItems;
    var count = 0;

    for (var i = 0; i < s.length+1; i++) {
      if (s[i]==",") {
        count++;
      }
    }

    if (count>2) {
      $scope.messageOut = "Too much!";
    } else {
      $scope.messageOut = "Enjoy!";
    }

  };


}


})();
