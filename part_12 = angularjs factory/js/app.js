var app = angular.module('app',["ngRoute"]);

app.factory("appFactory", function(){
    return {
        name:"This is the first angularjs factory in this tutorial"
    };
});

app.factory("appFactorySecond", function($http,$q){
    return function(){
        
        var obj = $q.defer();
        
        $http.get("attachments/character.json")
        .success(function(response){
            obj.resolve({
                data:response
            })
        }).error(function(){
            obj.resolve({
                data:false
            })
        })
        return obj.promise;
    };
});

app.controller('appController', ['$scope','$http','appFactory','appFactorySecond', function($scope, $http,appFactory,appFactorySecond){
    
    $scope.name=appFactory.name;
    
    var result = appFactorySecond();
    result.then(function(output){
        $scope.characters=output.data;
    })
}]);

