var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/register',{templateUrl:'views/register.html'})
                  .when('/login',{templateUrl:'views/login.html'})
                  .when('/',{templateUrl:'views/login.html'})
})
