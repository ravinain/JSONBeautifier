(function(){
  var myApp = angular.module('beautifierApp');
  
  myApp.controller('beautifierCtrl', ['$scope', 'beautifierService', function($scope, beautifierService){
    $scope.inputJson = "";
    $scope.outputJson = {};
    $scope.showChildren = true;

    $scope.isValidInput = function(){
        return beautifierService.isValidInput($scope.inputJson)
    };

    $scope.updateOutput = function(){
        $scope.outputJson = beautifierService.getParsedOutput($scope.inputJson);
    };

    $scope.isEmptyInput = function(){
        return beautifierService.isEmpty($scope.inputJson)
    };
      
    $scope.isArrayType = function(obj){
        return beautifierService.isArrayType(obj);
    };

    $scope.isObjectType = function(obj){
        return beautifierService.isObjectType(obj);
    };
  }]);
  
})();