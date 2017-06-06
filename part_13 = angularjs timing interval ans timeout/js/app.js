var app = angular.module('app',[]);

app.controller('appController', ['$scope','$http','$timeout','$interval', function($scope, $http,$timeout,$interval){
    
    $scope.loadTimeout=function(){
        $http.get("attachments/character.json")
        .success(function(response){
            $scope.characters=response;
      }).error(function(error){
            alert(error);
    });
    }
    
    $timeout($scope.loadTimeout, 5000);
    
    $scope.loadInterval=function(){
        $scope.characters.push({
                id:"30",
                firstName:"Hiruzen", 
                lastName:"Sarutobi", 
                email:"hiruzen.sarutobi@gmail.com", 
                age:"75", 
                occupation:"Shinobi", 
                birthDate:"1935-01-01"
        })
    }
    
    $interval($scope.loadInterval, 2500);
    
}]);


