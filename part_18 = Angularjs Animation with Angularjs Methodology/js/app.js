var app = angular.module('app',["ngAnimate"]);

app.controller('appController', ['$scope', function($scope){

    $scope.isAnimate=false;
        
}]);

app.directive("hideMe", function($animate){
    return function(scope,element,attrs){
        scope.$watch(attrs.hideMe, function(newVal){
            if(newVal){
                $animate.addClass(element,"toggle");
            }else{
                $animate.removeClass(element,"toggle");
            }
        })
    };
});

app.animation(".toggle",function(){
    return{
        addClass:function(element,className){
           TweenMax.to(element,1,{opacity:0}); 
        },
        removeClass:function(element,className){
            TweenMax.to(element,1,{opacity:1});
        }
    }
})