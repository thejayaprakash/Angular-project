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
        controller:'dashboardController',
        service:'cartservice'
       })
       .when('/cart',{
        templateUrl:"component/cart.html",
        controller:"cartController",
        service:'Cartservice'
       })
        // Add other routes as needed
        
        .otherwise({
           
            redirectTo: "/"
                });
        
});
// app.service('cartService',function($scope){
//     this.carts=[];
// })

app.controller('HomeController',function($scope,$location){
    $scope.loginTo=function(){
        $location.path('/login');
    };
    $scope.signTo=function(){
        $location.path('/signup');
    };
    $scope.dashboardTo=function(){
        $location.path('/dashboard');
    }
});

app.controller("signupController",function($scope,$http,$location){
  console.log('inside a singup')

    $scope.Register=function(info) {
        console.log('inside a fun')
        $http.post('http://127.0.0.1:5500//Angular-project/Angular-project/api/'+'insert',info).then(successCallback, errorCallback);

        function successCallback(response){
            console.log(info)
            $window.location.href='login.html';
        }
        function errorCallback(error){
            console.log(error)
        }
    };

});
app.service('Cartservice',function(){
    this.cart=[];
    this.addToCart = function (product) {
        var existingItem = this.cart.find(item => item.p_name === product.description);
        
        if (existingItem) {
            // If the item is already in the cart, increment its quantity and update the total price
            existingItem.quantity += 1;
            existingItem.totalPrice = existingItem.p_price * existingItem.quantity;
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            product.quantity = 1;
            product.totalPrice = product.p_price;
            this.cart.push(product);
            
            console.log(this.cart)
        }
    };
});
app.controller('dashboardController',function($scope,$location,Cartservice){
   console.log('dashborad');
//    $scope.cart=Cartservice.cart;
    $scope.products=[
      { 
       
        description:'ADIDAS',
        price: 499.00,
        imageUrl:'images/shoe-1.png',
        category: 'shoes'
        

    },
    { 
      
        description:'PUMA',
        price: 899.00,
        imageUrl:'images/shoe-2.jpeg',
        category: 'shoes'
    },
    { 
     
        description:'CRAETIVE',
        price: 399.00,
        imageUrl:'images/t-short-1.png',
        category:'T-short'
    },
    { 
     
        description:'ERA-CAP',
        price: 699.00,
        imageUrl:'images/cap-1.jpeg',
        category:'cap'
    },
   
    
    ];

   $scope.addToCart=function(product){

    console.log(product);

    Cartservice.addToCart(product);

    

   }

 $scope.goTocart=function(){

$location.path('/cart');

   }
});

app.controller('cartController',function($scope,Cartservice){
console.log(Cartservice.cart[0])
$scope.carts=Cartservice.cart;
$scope.getTotalPrice = function () {
    let totalPrice = 0;
    for (let i = 0; i < $scope.carts.length; i++) {
        totalPrice += $scope.carts[i].p_price;
    }
    return totalPrice;
};
// $scope.getQuantity=function(){
//     let quantity = 0;
//     for (let i = 0; i < $scope.carts.length; i++) {
//         if($scope.carts[i].p_id>0)
//              totalPrice ++;
//     }
//     return totalPrice;

});




