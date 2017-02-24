var book_app = angular.module('book_app', []);

book_app.controller('ctrl1', function($scope) {
  $scope.first = 1;
  $scope.second = 1;
  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second + " = " + (+$scope.first + +$scope.second);
  };
});
