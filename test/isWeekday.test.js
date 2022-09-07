import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test my isWeekday function' , function(){
    it("it should return 'False' when called with 'Saturday' " , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it("it should return 'False' when called with 'Sunday' " , function(){
        assert.equal(isWeekday('Sunday'), false);   });

        it("it should return 'True' when called with 'Monday' " , function(){
            assert.equal(isWeekday('Monday'), true);    });
});