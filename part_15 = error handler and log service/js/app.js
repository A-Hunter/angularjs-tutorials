var app = angular.module('app',["ngCookies"]);

app.controller('appController', ['$scope','$http','$exceptionHandler','$log', function($scope, $http,$cookies,$log){
    
    try{
        $http.get("attachments/character.json")
        .success(function(response){
            $scope.characters=response;
      }).error(function(error){
            alert(error);
    });
        
        throw (new Error("This is an exception !"))
        
    }catch(error){
        $log.error(error);
        $log.log(error);
        $log.info(error);
        $log.warn(error);
        $log.debug(error);
    }
        
}]);


