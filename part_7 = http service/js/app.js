var app = angular.module('app',[]);

app.controller('appController', ['$scope','$http', function($scope, $http){

    $http.get("attachments/character.json")
        .success(function(response){
        
            $scope.characters=response;
        
      }).error(function(error){
        
        alert(error);
        
    });

}]);

app.directive('otherPage', function(){
    return{
        restrict: 'E',
        templateUrl:'attachments/otherPage.html'
    };
})

/**
//  You can use also
    $http.get("attachments/character.json")
        .then(function(response){
        
            $scope.characters=response.data;
        
      }).then(function(error){
        
        alert(error.error + "/" + error.statusCode);
        
    });
*/