
//This file initializes the Flower List angular app.
(function() {
  'use strict';

  angular.module('bloomandwild', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
