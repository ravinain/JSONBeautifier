(function(){
  var myApp = angular.module('jpApp');
  
  myApp.controller('jpCtrl', ['$scope', function($scope){
    $scope.inputJson = "";

    $scope.isValidInput = function(){
      try {
          var o = JSON.parse($scope.inputJson);
          getFormattedJson(o, 2);
          if (o && typeof o === "object") {
              return true;
          }
      } catch (e) {}
      return false;
    };

    $scope.updateOutput = function(){
      if($scope.isValidInput()) {
        $scope.outputFormattedJson = "{\n"+getFormattedJson(JSON.parse($scope.inputJson), 3, "")+"}";
        console.log($scope.outputFormattedJson);
      }
    };

    var getFormattedJson = function(jsonObject, numberOfSpaces, formattedStr){
      var keys = Object.keys(jsonObject);
      for(var index = 0; index < keys.length; index++) {
        var key = keys[index];
        formattedStr += getSpaces(numberOfSpaces)+ key + " : ";
        if(jsonObject[key] instanceof Array) {
          formattedStr += " [\n";
          formattedStr = getFormattedJson(jsonObject[key], numberOfSpaces + 3, formattedStr);
          formattedStr += getSpaces(numberOfSpaces) + "] \n"
        } else if(jsonObject[key] instanceof Object) {
          formattedStr += " {\n";
          formattedStr = getFormattedJson(jsonObject[key], numberOfSpaces + 3, formattedStr);
          formattedStr += getSpaces(numberOfSpaces) + "} \n"
        } else {
          formattedStr += jsonObject[key] + "\n";
        }
      }
      return formattedStr;
    };
    
    var getSpaces = function(numberOfSpaces) {
      var spaces = "";
      for(var counter = 0; counter < numberOfSpaces; counter++) {
        spaces += " ";
      }
      return spaces;
    };

  }]);
  
})();