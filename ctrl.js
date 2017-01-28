(function(){
  var myApp = angular.module('jpApp');
  
  myApp.controller('jpCtrl', ['$scope', function($scope){
    $scope.inputJson = "";

    $scope.isValidInput = function(){
      try {
          var o = JSON.parse($scope.inputJson);
          getFormattedJson(o, 2);
          if (o && typeof o === 'object') {
              return true;
          }
      } catch (e) {}
      return false;
    };

    $scope.updateOutput = function(){
      if($scope.isValidInput()) {
        var parsedInput = JSON.parse($scope.inputJson);
        $scope.outputFormattedJson = getToken(parsedInput, true)+getFormattedJson(parsedInput, 3, '')+getToken(parsedInput, false);
      }
    };

    var getFormattedJson = function(jsonObject, numberOfSpaces, formattedStr){
      var keys = Object.keys(jsonObject);
      for(var index = 0; index < keys.length; index++) {
        var key = keys[index];
        formattedStr += getSpaces(numberOfSpaces)+ key + ' : ';
        if(jsonObject[key] instanceof Array || jsonObject[key] instanceof Object) {
          formattedStr += getToken(jsonObject[key], true);
          formattedStr = getFormattedJson(jsonObject[key], numberOfSpaces + 3, formattedStr);
          formattedStr += getSpaces(numberOfSpaces) + getToken(jsonObject[key], false);
        } else {
          formattedStr += jsonObject[key] + '\n';
        }
      }
      return formattedStr;
    };
    
    var getSpaces = function(numberOfSpaces) {
      var spaces = '';
      for(var counter = 0; counter < numberOfSpaces; counter++) {
        spaces += ' ';
      }
      return spaces;
    };
      
    var getToken = function(obj, openFlag) {
      if(obj instanceof Array) {
          return openFlag?'[\n':']\n';
      }
        return openFlag?'{\n':'}\n';
    };
      
    $scope.isEmptyInput = function(){
        return $scope.inputJson === undefined || $scope.inputJson === '';
    }
  }]);
  
})();