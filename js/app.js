var app = angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){

  $routeProvider

  .when('/',{templateUrl: 'partials/index.html',controller: 'IntroCtrl'})

  .when('/home',{templateUrl: 'partials/home.html',controller: 'PostsCtrl'})

  .when('/page/:slug',{templateUrl: 'partials/page.html',controller: 'PageCtrl'})

  // .when('/volume/',{templateUrl: 'partials/home.html', controller: 'PostsCtrl'})
  //
  .when('/single/:slug' , {templateUrl: 'partials/single.html', controller: 'SingleCtrl'})
  //
  // .when('/likes' , {templateUrl: 'partials/likes.html', controller: 'LikesCtrl'})

  .otherwise({redirectTo : '/'});


});
