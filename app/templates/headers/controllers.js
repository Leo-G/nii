angular.module('myApp.services').factory('Header', function($resource) {
  return $resource('api/v1/headers/:id.json', { id:'@headers.id' }, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});

angular.module('myApp.services').factory('User', function($resource) {
  return $resource('api/v1/headers/user.json', { id:'@headers.id' }, {
    update: {
      method: 'PATCH',
      
     
     
    }
    }, {
    stripTrailingSlashes: false
    });
});

angular.module('myApp.controllers').controller('UserController', function($scope, $state, User, toaster) {
          $scope.user = new User(); 
          $scope.loading = false;

         $scope.GetUser = function() { 
                                $scope.loading = true;
                                $scope.user.data.type = "headers";
                                $scope.user.$save(function(data) {
                                
                                   $scope.data = data.users;
                                   
                                   $scope.loading = false; 
                                }, function(error) {
                                toaster.pop({
                                            type: 'error',
                                            title: 'Error',
                                            body: error,
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                 $scope.loading = false;
                                           });
                                 };
});


angular.module('myApp.controllers').controller('HeaderController', function($scope, $state, Header, toaster) {
          $scope.header = new Header(); 
          $scope.loading = false;

         $scope.getHeader = function() { 
                                $scope.loading = true;
                                $scope.header.data.type = "headers";
                                $scope.header.$save(function(data) {
                                
                                   $scope.data = data;
                                   
                                   $scope.loading = false; 
                                }, function(error) {
                                toaster.pop({
                                            type: 'error',
                                            title: 'Error',
                                            body: error,
                                            showCloseButton: true,
                                            timeout: 0
                                            });
                                 $scope.loading = false;
                                           });
                                 };
});




  