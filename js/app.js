var app = angular.module("app", []);

app.controller("appController1", function(){
    this.name = "This is the first controller";
    this.showMe = true;
    this.hideMe = true;
});

app.controller("appController2", function(){
    this.name = "This is the second controller";
});
