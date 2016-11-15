var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
$routeProvider
    .when('/', {
        templateUrl: 'partials/aboutme.html'
    })
    .when('/aboutme', {
        templateUrl: 'partials/aboutme.html'
    })
    .when('/projects', {
        templateUrl: 'partials/projects.html'
    })
    .when('/contact', {
        templateUrl: 'partials/contact.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
