angular.module("appModule", [
    'ngRoute',
    'sharedModule'
])


angular.module("appModule").config(function($routeProvider){

    // Inyectamos el route provider en esta funcion
    $routeProvider
    .when('/', { // route for the home page
        templateUrl: 'view/view_inicio.html',
        controller: 'HomeController'
    })
    .when('/about', {// route for the about page = Acerca de
        templateUrl: 'view/view_about.html',
        controller: 'AboutController'
    })
    .otherwise({ // when all else fails
        templateUrl: 'view/view_inicio.html',
        controller: 'HomeController'
    });
    
})

.config(function($locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }) 
});








        

