(function(){
  var myApp = angular.module('beautifierApp');
  
  myApp.controller('beautifierCtrl', ['$scope', 'beautifierService', '$localStorage', function($scope, beautifierService, $localStorage){
    $scope.inputJson = $localStorage.inputJson || [''];
    $scope.outputJson = {};
    $scope.showChildren = true;
    $scope.tabs = $localStorage.tabs || [{tabName:'Tab 1', active: true}];
    $scope.activeTab = $localStorage.activeTab || 0;

    $scope.isValidInput = function(){
        return beautifierService.isValidInput($scope.inputJson[$scope.activeTab]);
    };

    $scope.updateOutput = function(){
        $localStorage.inputJson = $scope.inputJson;
        $scope.outputJson = beautifierService.getParsedOutput($scope.inputJson[$scope.activeTab]);
    };

    $scope.isEmptyInput = function(){
        return beautifierService.isEmpty($scope.inputJson[$scope.activeTab]);
    };
      
    $scope.isArrayType = function(obj){
        return obj !== null && beautifierService.isArrayType(obj);
    };

    $scope.isObjectType = function(obj){
        console.log('Object ', obj);
        console.log('Equas null ', obj !== null);
        return obj !== null && beautifierService.isObjectType(obj);
    };
      
    $scope.toggleTab = function(activeIndex) {
      var length = $scope.tabs.length;
        
      for(var c=0; c<length; c++) {
          if(activeIndex == c) {
              $scope.tabs[c].active = true;
              $scope.activeTab = activeIndex;
              $localStorage.activeTab = $scope.activeTab;
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
      $localStorage.tabs = $scope.tabs;
    };
      
    $scope.deleteTab = function(index){
    
      $scope.tabs.splice(index, 1);
      $scope.inputJson.splice(index, 1);
        
      $localStorage.tabs = $scope.tabs;
      $localStorage.inputJson = $scope.inputJson;
    };
     
    $scope.updateOutput();
  }]);
  
})();