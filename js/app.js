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

    // Fifth Lesson : ng-submit
    this.submitForm = function(){
        this.characters.push({firstName:this.Object.firstName, lastName:this.Object.lastName,
                              age:this.Object.age, occupation:this.Object.occupation,
                              birthDate:this.Object.birthDate});
        this.Object.firstName = "";
        this.Object.lastName = "";
        this.Object.age = "";
        this.Object.occupation = "";
        this.Object.birthDate = "";

    }
});

app.controller("appController2", function(){
    this.name = "This is the second controller";
});
