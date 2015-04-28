(function() {
    'use strict';

    angular
    .module('app')
    .controller('AccountCtrl', ['$scope', '$state', '$location', 'AccountService',
    function($scope, $state, $location, accountService) {
        //$scope.user={username:'anuj',password:'acbd',email:'a@e10.in'};
        $scope.signup = function(user) {
            accountService.signup(user).then(function(result) {
                if (result.data.message === 'User added to repositary!') {
                    $state.go('login');
                }
            });
        }

        $scope.login = function(user) {
            accountService.login(user).then(function(result) {
                console.log(result.data);
                if (result.data.message === 'Login sucess') {
                    $state.go('home', { user: result.data.data });
                }
            });
        }
    }])
    .controller('UserCtrl', ['$scope', '$state', '$location', 'AccountService',
    function($scope, $state, $location, accountService) {
        $scope.id = $state.params.id;

        accountService.getUser($scope.id).then(function(result) {
            $scope.user = result.data;
        });

        $scope.updateUser = function(user) {
            var updatedUser = { username: user.username, email: user.email };
            accountService.updateUser($scope.id, updatedUser).then(function(result) {
                if (result.data.message === 'User is updated!') {
                    $state.go('home');
                }
            });
        }

    }]);

})();
