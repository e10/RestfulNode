(function() {
    'use strict';

    angular
    .module('app')
    .controller('HomeCtrl', ['$scope', '$state', 'AccountService',
    function($scope, $state, accountService) {
        $scope.user = $state.params.user;

        $scope.logout = function(user) {
            accountService.logout(user).then(function(result) {
                console.log(result.data);
                if (result.data.message === 'User is logged out') {
                    $state.go('login');
                }
            });
        }
    }]);

    console.log('loaded home');

})();
