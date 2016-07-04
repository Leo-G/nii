angular.module('myApp', ['ui.router', 'ngResource',  "angularGrid" , 'myApp.controllers', 'myApp.services', 'satellizer','toaster', 'ngAnimate', 'angular-google-analytics']);

angular.module('myApp')
  .run( function($rootScope, $state){
                //$rootScope.$on('$stateChangeStart'
                $rootScope.$state = $state;
                $rootScope.$state.current.title = "Flask-Scaffold";
                }
    );

angular.module('myApp').config(function( $stateProvider , $urlRouterProvider, $authProvider, AnalyticsProvider) {

   
    $urlRouterProvider.otherwise('/')

 
$stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html',
    title: 'Home',
    

  })



   
   // States
  // Routes for headers
   .state('headers', {
    url: '/headers',
    templateUrl: '/headers/index.html',
    controller: 'HeaderController',

    })

        // End Routes for headers
        
        .state('user', {
    url: '/user',
    templateUrl: '/users/index.html',
    controller: 'UserController',

    })

  ;


  

});


angular.module('myApp.services', []);
angular.module('myApp.controllers', []);



