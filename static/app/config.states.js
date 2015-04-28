(function() {
    'use strict';

    angular.module('app').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.when("/settings", "/settings/profile");

            $stateProvider.state('login', {
                url: '/login',
                templateUrl: '/app/views/login.html'
            }).state('logout', {
                url: '/logout',
                templateUrl: '/app/views/logout.html'
            }).state('signup', {
                url: '/signup',
                templateUrl: '/app/views/signup.html'
            }).state('home', {
                url: '/home',
                templateUrl: 'app/views/home.html',
                params: { user: 'user', }
            }).state('profile', {
                url: '/:id/profile',
                templateUrl: '/app/views/profile.html'
            }).state('shell', {
                url: '/',
                templateUrl: 'app/views/shell.html'
            });

            $urlRouterProvider.otherwise('/');
        }
    ]);
})();
