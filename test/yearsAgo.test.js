import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Test my yearsAgo function' , function(){
    it("it should return '46' when called with '1976' " , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
    });

    it("it should return '22' when called with '2000' " , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));  });

        

});