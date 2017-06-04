var app = angular.module('app',[]);

app.controller('appController', function($scope){
    $scope.occupationType="Hunter";
});

app.directive('occupation', function(){
    return{
        scope:{
          type:"@"  
        },
        template:"<div>{{type}}</div>"
    };
})