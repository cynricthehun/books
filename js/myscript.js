var book_app = angular.module('book_app', []);

book_app.controller('bookHandler', function($scope) {
  $scope.bookName = "Default Book";
  $scope.bookImage = "image";
  $scope.bookLink = "www.google.com";

  $scope.bookList = [];

  $scope.addText = function() {
    $scope.arrayText.push(this.myText);
}
});
