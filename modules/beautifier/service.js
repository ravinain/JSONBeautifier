/**
 *
 */
(function() {
    var app = angular.module('beautifierApp');
    
    var beautifierService = function() {
      
        var isValidInput = function(input) {
            try {
              var o = JSON.parse(input);
              if (o && typeof o === 'object') {
                  return true;
              }
            } catch (e) {}
            return false;
        };
        
        var getParsedOutput = function(input) {
            if(isValidInput(input)) {
                return JSON.parse(input);
            }
            return {};
        };
        
        var isEmpty = function(input) {
            return input === undefined || input === '';
        };
        
        var isArrayType = function(obj) {
            return obj instanceof Array;
        };

        var isObjectType = function(obj) {
            return ((obj instanceof Object) && !isArrayType(obj));
        };
                
        var replaceNewLine = function(inputArray, token) {
            var length = inputArray.length;
            for(var index = 0; index < length; index++) {
                inputArray[index] = inputArray[index].replace(/(?:\r\n|\r|\n)/g, token);    
            }
            
            return inputArray;
        };
        
        return {
          isValidInput: isValidInput,
          getParsedOutput: getParsedOutput,
          isEmpty: isEmpty,
          isArrayType: isArrayType,
          isObjectType: isObjectType,
          replaceNewLine: replaceNewLine
        };
    };
    
    app.factory('beautifierService', beautifierService);
})();