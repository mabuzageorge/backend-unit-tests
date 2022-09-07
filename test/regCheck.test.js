import assert from "assert";
import regCheck from "../regCheck.js";

describe('Test my regCheck function' , function(){
    it("it should return 'True' when called with 'DC 55 YU GP' and 'GP' " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it("it should return 'False' when called with 'DC 55 YU GP' and 'EC' " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

});