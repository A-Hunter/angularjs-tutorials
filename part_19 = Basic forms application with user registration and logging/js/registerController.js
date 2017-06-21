app.controller("registrationController", ['$scope','userRegistration',function($scope,userRegistration){
   
    $scope.formSubmit = function(user){
        var result = userRegistration(user);
        result.then(function(output){
            alert("Success");
        })
    }
}])