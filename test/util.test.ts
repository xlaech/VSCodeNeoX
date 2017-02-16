// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

import * as util from '../src/util';

// Defines a Mocha test suite to group tests of similar kind together
suite("Sort Tests", () => {
    test("Sort a simple string", () => {
        assert.equal(util.sort("hallo"), "ahllo");
    });
    test("Sort with an empty string", () => {
        assert.equal(util.sort("ha ll o"), "  ahllo");
    });
    test("Sort numbers", () => {
        assert.equal(util.sort("hallo123"), "123ahllo");
    });
});