(function(){
  var myApp = angular.module('jpApp');
  
  myApp.controller('jpCtrl', ['$scope', function($scope){
    $scope.inputJson = "";
    $scope.showChildren = true;

    $scope.isValidInput = function(){
      try {
          var o = JSON.parse($scope.inputJson);
          if (o && typeof o === 'object') {
              return true;
          }
      } catch (e) {}
      return false;
    };

    $scope.updateOutput = function(){
      if($scope.isValidInput()) {
        var parsedInput = JSON.parse($scope.inputJson);
        $scope.outputJson = parsedInput;
      }
    };

    $scope.isEmptyInput = function(){
        return $scope.inputJson === undefined || $scope.inputJson === '';
    }
  }]);
  
})();