'use strict';

describe('beautifierService', function(){
   
    var service;
    beforeEach(angular.mock.module('beautifierApp'));
    
    beforeEach(inject(function(beautifierService){
        service = beautifierService; 
    }));
    
    it('should return true when empty string is passed to isEmpty function', function(){
       expect(service.isEmpty(undefined)).to.be.true;
        expect(service.isEmpty('')).to.be.true;
    });
    
    it('should return false when non-empty string is passed to isEmpty function', function(){
        expect(service.isEmpty('something')).to.be.false; 
    });
    
    it('should return true when input is of array data type', function(){
        expect(service.isArrayType([])).to.be.true;
    });
    
    it('should return false when input is of non-array data type', function(){
        expect(service.isArrayType({})).to.be.false;
    });
    
    it('should return true when input is of non-array object data', function(){
        expect(service.isObjectType({})).to.be.true;
    });
    
    it('should return false when input is not of non-array object data', function(){
        expect(service.isObjectType([])).to.be.false;
    });
    
    it('should replace newline character from string', function(){
        var inputArray = ["test \n\r testing", "\n\rtest", "test\n\r"];
        var expectedArray = ["test  testing", "test", "test"];
        var actualArray = service.replaceNewLine(inputArray, '');
        for(var i = 0; i < 3; i++) {
            expect(actualArray[i]).to.be.equals(expectedArray[i]);   
        }
    });
    
    it('should not replace any character from string', function(){
        var inputArray = ["test  testing", "test", "test"];
        var expectedArray = ["test  testing", "test", "test"];
        var actualArray = service.replaceNewLine(inputArray, '');
        for(var i = 0; i < 3; i++) {
            expect(actualArray[i]).to.be.equals(expectedArray[i]);   
        }
    });
    
    it('should return true when valid JSON object passed to isValidInput function', function(){
        var inputJson = '{"a":"b"}';
        expect(service.isValidInput(inputJson)).to.be.true;    
    });
    
    it('should return false when invalid JSON object passed to isValidInput function', function(){
        expect(service.isValidInput('{a}')).to.be.false;    
    });
    
    it('should return JSON object when JSON string passed to getParsedOutput function', function(){
        var expected = {a:'b'};
        var actuals = service.getParsedOutput('{"a":"b"}');
        expect(actuals.a).to.be.equals(expected.a);
    });
});