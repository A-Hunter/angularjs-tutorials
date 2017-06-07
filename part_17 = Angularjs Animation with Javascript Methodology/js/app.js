var app = angular.module('app',["ngAnimate"]);

app.controller('appController', ['$scope', function($scope){

    $scope.isAnimate=false;
        
}]);

app.animation(".toggle", function(){
    return{
        enter:function(element,done){
            TweenMax.from(element,1,{opacity:0,onComplete:done});
        },
        leave:function(element,done){
            TweenMax.to(element,1,{opacity:0,onComplete:done});
        }
    }
})

