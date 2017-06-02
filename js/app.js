var app = angular.module("app", []);

app.controller("appController1", function(){

    // First Lesson : Oneway Data Binding
    this.name = "This is the first controller";

    // Second Lesson : ng-hide and ng-show
    this.showMe = true;
    this.hideMe = true;

    // Third Lesson : ng-repeat
    // Fourth Lesson : ng-model 2-way data binding
    this.text = "ABC";
    this.tab = ['i','j','k'];

    this.characters = [{firstName:"Itachi", lastName:"Uchiha", age:"25", occupation:"Shinobi", birthDate:"1989-01-01"},
                       {firstName:"Sishui", lastName:"Uchiha", age:"28", occupation:"Shinobi", birthDate:"1986-02-02"},
                       {firstName:"Netero", lastName:"Isaac", age:"125", occupation:"Hunter", birthDate:"1889-03-03"}];

});

app.controller("appController2", function(){
    this.name = "This is the second controller";
});
