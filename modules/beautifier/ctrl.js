(function(){
  var myApp = angular.module('beautifierApp');
  
  myApp.controller('beautifierCtrl', ['$scope', 'beautifierService', function($scope, beautifierService){
    $scope.inputJson = [''];
    $scope.outputJson = {};
    $scope.showChildren = true;
    $scope.tabs = [{tabName:'Tab 1', active: true}];
    $scope.activeTab = 0;

    $scope.isValidInput = function(){
        return beautifierService.isValidInput($scope.inputJson[$scope.activeTab]);
    };

    $scope.updateOutput = function(){
        $scope.outputJson = beautifierService.getParsedOutput($scope.inputJson[$scope.activeTab]);
    };

    $scope.isEmptyInput = function(){
        return beautifierService.isEmpty($scope.inputJson[$scope.activeTab]);
    };
      
    $scope.isArrayType = function(obj){
        return beautifierService.isArrayType(obj);
    };

    $scope.isObjectType = function(obj){
        return beautifierService.isObjectType(obj);
    };
      
    $scope.toggleTab = function(activeIndex) {
      var length = $scope.tabs.length;
        
      for(var c=0; c<length; c++) {
          if(activeIndex == c) {
              $scope.tabs[c].active = true;
              $scope.activeTab = activeIndex;
              $scope.updateOutput();
          } else {
              $scope.tabs[c].active = false;
          }
      }
    };
      
    $scope.addTab = function(){
      $scope.tabs.push({tabName: 'Tab '+($scope.tabs.length+1), active:false});
      $scope.inputJson.push('');
      $scope.toggleTab($scope.tabs.length-1);
    };
  }]);
  
})();