(function() {
    'use strict';
    var app = angular.module('app');
    app.factory('AccountService', ['$rootScope', '$http', 'config', function($rootScope, $http, config) {
        var account = {};

        $http.defaults.headers.common.ApiKey = config.apiKey;
        $http.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';

        console.log($http.defaults.headers.common);

        account.isLoggedIn = function() {
            return $http.get(config.base);
        }

        account.getAll = function() {
            return $http.get(config.base + 'users');
        }

        account.signup = function(user) {
            return $http.post(config.base + 'users', user);
        }

        account.login = function(user) {
            return $http.post(config.base + 'login', user);
        }

        account.getUser = function(id) {
            return $http.get(config.base + 'user/' + id);
        }

        account.updateUser = function(id, user) {
            return $http.put(config.base + 'user/' + id, user);
        }

        account.logout = function(user) {
            return $http.get(config.base + 'logout', user);
        }


        return account;
    }]);

})();
