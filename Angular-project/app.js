var app = angular.module("myApp", ['ngRoute']);
app.config(function ($routeProvider) {
    console.log('running');
    $routeProvider
    
        .when('/', {
           
            templateUrl: "component/home.html",
            controller: "HomeController"
        })
        .when('/login',{
            templateUrl:"component/login.html",
            controller:'loginController'
        })
        .when('/signup',{
            templateUrl:"component/signup.html",
            controller:'signupController'
        })
       .when('/dashboard',{
        templateUrl:"component/dashboard.html",
        controller:'dashController'
       })
        // Add other routes as needed
        
        .otherwise({
           
            redirectTo: "/"
                });
        
});

app.controller('HomeController',function($scope,$location){
    $scope.loginTo=function(){
        $location.path('/login');
    };
    $scope.signTo=function(){
        $location.path('/signup');
    };
});

app.controller("signupController",function($scope,$http,$location){
    $scope.Register=function(){
            var username=$scope.username;
            var email=$scope.email;
            var password=$scope.password;
            var mobileNo=$scope.mobile;
$http({
    url: 'http://localhost/angular-project/mysql/connection.php',
    method: 'POST', 
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: 'username='+username+'&email='+email+'&password='+password+'&mobileNo='+mobileNo
}).then(function(response){
    if(response.data.status=='inserted'){
        user.saveData(response.data);
        alert("Registration Successful");
        $location.path('/login');
    }
    else{
        alert(" inserted unsucessful ");
    }

})
    }
});