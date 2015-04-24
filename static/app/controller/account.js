(function () {
    'use strict';

    angular
    .module('app')
    .controller('AccountCtrl', ['$scope', '$state',  '$location', 'AccountService',
    function ($scope,$state,  $location,accountService) {
		$scope.user={username:'anuj',password:'acbd',email:'a@e10.in'};
        $scope.signup=function(user){
            accountService.signup(user).then(function(result){
            	if(result.data.message==='User added to repositary!'){
            		$state.go('#/login');
            	}
            });
        }
        $scope.login=function(user){
        	accountService.login(user).then(function(result){
        		console.log(result.data);
            	if(result.data.message==='User added to repositary!'){
            		$state.go('#/login');
            	}
            });
        }
    }]);

})();
