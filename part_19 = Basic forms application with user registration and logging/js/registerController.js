app.controller("registrationController", ['$scope','userRegistration',function($scope,userRegistration){
   
    $scope.isHidden = true;
    $scope.message = "";
    
    $scope.formSubmit = function(user){
        var result = userRegistration(user);
        result.then(function(output){
            $scope.isHidden = false;
            $scope.message = "User saved successfully !";
            
            user.firstname = "";
            user.lastname = "";
            user.email = "";
            user.password = "";
        })
    }
}])