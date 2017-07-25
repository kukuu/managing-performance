// Author: Alexander Adu-Sarkodie
//File name: route.js

var app = angular.module('prerender-tutorial', ['ngRoute']) 

.config(function($routeProvider, $locationProvider){ 

  $routeProvider.when('/', { 
    templateUrl : 'views/homeView.html', 
    controller: 'homeController' 
  })

  $routeProvider.when('/about', {
      templateUrl : '/views/aboutView.html',
      controller: 'githubController'
  })

  $routeProvider.when('/features', {
      templateUrl : '/views/featuresView.html',
      controller : 'blogController'
  })

  $routeProvider.otherwise({
          redirectTo : '/'
  });

  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
});

function mainController($scope) { 
  // We will create an seo variable on the scope and decide which fields we want to populate 
  $scope.seo = { 
    pageTitle : '', pageDescription : '' 
  }; 
}

function homeController($scope) { 
  // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content. 
  // Additionally you can create a service to update the SEO variables - but that's for another tutorial. 
  $scope.$parent.seo = { 
    pageTitle : 'AngularJS SEO Tutorial', 
    pageDescripton: 'Welcome to tutorial on getting  AngularJS websites and apps indexed by Google.' 
  }; 
}

function githubController($scope) { 
  $scope.$parent.seo = { pageTitle : 'GitHub', 
    pageDescripton: 'I need to be indexed.' 
  }; 
}

function blogController($scope) { 
  $scope.$parent.seo = { pageTitle : 'Blog', pageDescripton: 'Welcome to my blog' }; 
}