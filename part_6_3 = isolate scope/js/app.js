var app = angular.module('app',[]);

app.controller('appController', function($scope){
    $scope.occupationType = function(jobSalary){
        alert(jobSalary);
    }
});

app.directive('occupation', function(){
    return{
        scope:{
          work:"&"  
        },
        template:"<input type='text' ng-model='salary'/><button ng-click='work({jobSalary:salary})'>Work</button>"
    };
})