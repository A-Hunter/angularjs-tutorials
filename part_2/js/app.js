var app = angular.module("app", []);

app.controller("appController1", function(){

    this.characters = [{firstName:"Itachi", lastName:"Uchiha", email:"itachi.uchiha@gmail.com", age:"25", occupation:"Shinobi", birthDate:"1989-01-01"},
                       {firstName:"Sishui", lastName:"Uchiha", email:"sishui.uchiha@gmail.com", age:"28", occupation:"Shinobi", birthDate:"1986-02-02"},
                       {firstName:"Netero", lastName:"Isaac", email:"netero.isaac@gmail.com",age:"125", occupation:"Hunter", birthDate:"1889-03-03"}];

    // Fifth Lesson : ng-submit
    this.submitForm = function(){
        this.characters.push({firstName:this.Object.firstName, lastName:this.Object.lastName,
                              email:this.Object.email,
                              age:this.Object.age, occupation:this.Object.occupation,
                              birthDate:this.Object.birthDate});
        this.Object.firstName = "";
        this.Object.lastName = "";
        this.Object.age = "";
        this.Object.email = "";
        this.Object.occupation = "";
        this.Object.birthDate = "";
    };


});

