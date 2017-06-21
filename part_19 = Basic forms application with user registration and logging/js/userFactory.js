app.factory('userRegistration', ['$http','$q',function($http,$q){
    return function(user){
        var defferedObject = $q.defer();
        $http.post('/views/registerFunction',{usPass:user})
            .success(function(){
                defferedObject.resolve({data:true});
            }).error(function(){
                defferedObject.resolve({data:false});
        });
        return defferedObject.promise;
    }
}])