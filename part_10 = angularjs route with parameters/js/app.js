var app = angular.module('app',["ngRoute"]);

app.controller('appController', ['$scope','$http', function($scope, $http){

        $http.get("attachments/character.json")
        .success(function(response){
            $scope.characters=response;
      }).error(function(error){
            alert(error);
    });

}]);

app.controller('detailsController', ['$scope','$http','$routeParams','$filter',function($scope,$http,$routeParams,$filter){
    
            $http.get("attachments/character.json")
        .success(function(response){
            $scope.character=$filter("filterById")(response,$routeParams.id);
      }).error(function(error){
            alert(error);
    });
    
}]);

app.config(function($routeProvider){
    $routeProvider
        .when("/header", {
        templateUrl:"attachments/header.html",
        controller:function($scope, $http){
                    $http.get("attachments/character.json")
            .success(function(response){
                $scope.characters=response;
          }).error(function(error){
                alert(error);
                });
        }
      })
        .when("/aboutus", {
        templateUrl:"attachments/about.html"
      })
        .when("/",{
        templateUrl:"attachments/header.html",
        controller:"appController",
        controllerAs:"cont"
      })
        .when('/details/:id',{
        templateUrl:"attachments/details.html",
        controller:"detailsController",
        controllerAs:"detCont"
      })
        .otherwise({
        redirectTo:'/'
    })
});

app.filter("filterById", function(){
    
    return function(charac, id){
        var i = 0, len=charac.length;
        for(;i<len;i++){
            if(+charac[i].id==+id){
                return charac[i];
            }
        }
    }
});