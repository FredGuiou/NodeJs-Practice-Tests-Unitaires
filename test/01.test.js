//Import des nodeJs dependencies
const { describe, it } = require('node:test');
const assert = require('node:assert');

//Import des fonctions à tester
const { add, calc_moy } = require('../01.js');

describe("add function", () => {
    
    it("make an addition of the two arguments", () => {
        assert.strictEqual(add(6, 8), 14);
        assert.strictEqual(add(-6, -8), -14);
        assert.strictEqual(add(0, 0), 0);
    });

    
    it("use default value = 10 for argument b if not specified", () => {
        assert.strictEqual(add(6), 16);
        assert.strictEqual(add(-6), 4);
        assert.strictEqual(add(0), 10);
    });
    
    it("throws an error if \"a\" type isn't \"number\"", () => {
        assert.throws(() => add("notNumberArgument"), TypeError, "a must be a number");
    });

    it("throws an error if \"b\" type isn't \"number\"", () => {
        assert.throws(() => add(3, "notNumberArgument"), TypeError, "b must be a number");
    });

});

describe("calc_moy function", () => {

    it("throws an error if argument type isn't \"array\"", () => {
        assert.throws(() => calc_moy("notAnArrayArgument"), TypeError, "nums must be an array!");
    });

    it("process an average mathematic operation", () => {
        assert.strictEqual(calc_moy([1, 2, 3, 4, 5]), 3);
        assert.strictEqual(calc_moy([10, 20, 30]), 20);
        assert.strictEqual(calc_moy([-5, 5]), 0);
    });

    it("throws \"NaN\" if array empty , or one of elements isn't type \"number\"", () => {
        assert.strictEqual(calc_moy(["string", 2, 3, 4, 5]), NaN);
        assert.strictEqual(calc_moy([]), NaN);
    });
    
});