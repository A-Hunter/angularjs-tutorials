var app = angular.module('app',["ngRoute"]);

app.service("appService", function(){
//   var sharedService=this;
//    sharedService.name="shared service name";
    // or we can write simply:
    this.name="shared service name";
});

app.controller("appCont1", function(appService){
    this.name="Controller 1 : "+appService.name;
    /**
    If I change the the value of the variable "appService.name" here in the controller 1, this will be reflected in the second controller without manipulating anything in the controller 2.
    */
});

app.controller("appCont2", function(appService){
    this.name="Controller 2 : "+appService.name;
});