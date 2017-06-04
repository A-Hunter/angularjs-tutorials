var app = angular.module("characters",[]);

app.controller("appController", ["$scope",function($scope){
    $scope.characters = [{
        firstName:"Netero", lastName:"Isaac", email:"issac.netero@gmail.com",age:"125",occupation:"Hunter",birthDate:"1889-01-01"
    }];
}]);
