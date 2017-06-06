var app = angular.module('app',["ngCookies"]);

app.controller('appController', ['$scope','$http','$cookies', function($scope, $http,$cookies){
    
        $http.get("attachments/character.json")
        .success(function(response){
            $scope.characters=response;
      }).error(function(error){
            alert(error);
    });
    
    var exp = new Date();
    exp.setDate(exp.getDate()+5);
    $cookies.put('characters',$scope.characters,{path:'/',expires:exp});
    
    var coo = $cookies.get('characters');
    $scope.charac=coo;
    
}]);


