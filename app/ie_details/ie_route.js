'use strict';

var app = angular.module('myApp.ie_details', ['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ie_details', {
    templateUrl: 'ie_details/ie_details.html',
    controller: 'IEServiceCtrl'
  });
}]);
