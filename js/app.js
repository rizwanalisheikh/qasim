
var app = angular.module('intro-ui-router', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "templates/main.html",
	      controller: 'templates.CalculatorController',
	      
	    })
	    .state('viewPost1', {
			url: '/post1',
			templateUrl: 'templates/post1/post1.html',
			//controller: 'PostCtrl',
			
		})
		.state('contactUs', {
			url: '/contactUs',
			templateUrl: 'templates/contactUs/contactUs.html',
			//controller: 'PostCtrl',
			
		})
	    .state('aboutUs', {
			url: '/aboutUs',
			templateUrl: 'templates/aboutUs/aboutUs.html',
			//controller: 'PostCtrl',
			
		})
	    .state('projects', {
			url: '/projects',
			templateUrl: 'templates/projects/projects.html',
			//controller: 'PostCtrl',
			
		})
	    .state('viewPost2', {
			url: '/post2',
			templateUrl: 'templates/post2/post2.html',
			//controller: 'PostCtrl',
			
		});
});