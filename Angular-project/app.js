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
        controller:'dashboardController'
       })
       .when('/cart.html',{
        templateUrl:"component/cart.html",
        controller:"cartController"
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
    $scope.dashboardTo=function(){
        $location.path('/dashboard');
    }
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

app.controller('dashboardController',function($scope,$location){
   console.log('dashborad');
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
    cartService.addItem(product);

   }

   $scope.goTocart=function(){
$location.path('/cart.html');
   }
});


app.service('CartService', function() {
    var cartItems = [];

    this.addToCart = function(product) {
        // Check if the product is already in the cart
        var existingItem = cartItems.find(function(item) {
            return item.name === product.name;
        });

        if (existingItem) {
            // If the item is already in the cart, increase its quantity
            existingItem.quantity++;
        } else {
            // If the item is not in the cart, add it
            var newItem = angular.copy(product);
            newItem.quantity = 1;
            cartItems.push(newItem);
        }
    };

    this.getCartItems = function() {
        return cartItems;
    };

    this.removeFromCart = function(product) {
        var index = cartItems.findIndex(function(item) {
            return item.name === product.name;
        });

        if (index !== -1) {
            if (cartItems[index].quantity > 1) {
                // Decrease the quantity if there are more than one
                cartItems[index].quantity--;
            } else {
                // Remove the item from the cart if there's only one
                cartItems.splice(index, 1);
            }
        }
    };

    this.getTotalCost = function() {
        var total = 0;
        for (var i = 0; i < cartItems.length; i++) {
            total += cartItems[i].price * cartItems[i].quantity;
        }
        return total;
    };
});
;

app.controller('CartController', function($scope, CartService) {
    $scope.cartItems = CartService.getCartItems();

    $scope.removeFromCart = function(product) {
        CartService.removeFromCart(product);
    };

    $scope.getTotalCost = function() {
        return CartService.getTotalCost();
    };
});
