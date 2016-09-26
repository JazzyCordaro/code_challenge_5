console.log('client.js is sourced');

var myApp = angular.module('myApp', []);

myApp.controller('viewHeroController', ['$scope', '$http',
  function($scope, $http) {
    console.log('view hero controller');

    $scope.getHeros = function () {
      $http({
        method: 'GET',
        url: '/heros'
      }).then(function success(responseObject) {
        console.log('got dis', responseObject);
        $scope.heros = responseObject.data;
      }, function error(errorObject){
        console.log(errorObject);
      });
    };
}]);

myApp.controller('addHeroController', ['$scope', '$http',
function($scope, $http) {
  console.log('add hero controller');
  $scope.addHero = function(inputAlias, inputFirstName, inputLastName, inputCity, inputPowerName) {

    console.log('button click');

    var heroToSend = {
      alias: inputAlias,
      first_name: inputFirstName,
      last_name: inputLastName,
      city: inputCity,
      power_name: inputPowerName
    };

    console.log('hero to send: ', heroToSend);

    $http({
      method: 'POST',
      url: '/pets',
      data: heroToSend
    }).then(function success(responseObject) {
      console.log('got dis', responseObject);
    }, function error(errorObject){
      console.log(errorObject);
    });
  };
}]);
