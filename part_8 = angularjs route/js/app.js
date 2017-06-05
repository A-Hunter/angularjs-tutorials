var app = angular.module('app',["ngRoute"]);

app.controller('appController', ['$scope','$http', function($scope, $http){

    $http.get("attachments/character.json")
        .success(function(response){
            $scope.characters=response;
      }).error(function(error){
            alert(error);
    });

}]);

app.config(function($routeProvider){
    $routeProvider
        .when("/header", {
        templateUrl:"attachments/header.html"
      }).when("/aboutus", {
        templateUrl:"attachments/about.html"
    })
})
