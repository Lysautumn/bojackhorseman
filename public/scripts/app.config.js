angular.module('routeApp').config(function($routeProvider, $locationProvider) {
  // get route provider service
  $routeProvider.when('/bojack', {
    templateUrl: 'views/bojackhorseman.html'
  }).when('/princessc', {
    templateUrl: 'views/princessc.html'
  }).when('/mrpb', {
    templateUrl: 'views/mrpeanutbutter.html'
  });
  // lets us use normal looking links
  // need to set base href to '/' in index.html
  $locationProvider.html5Mode(true);
});
