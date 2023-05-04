//Import des nodeJs dependencies
const { describe, it} = require('node:test');
const assert = require('node:assert');

//Import des fonctions à tester
const { add } = require('../01.js');

describe("add function", () => {
    
    it("should throw an error if type isn't number for the first argument", () => {
        const a = "a string";
        const b = 6;
        assert.throws(()=> add(a, b), TypeError);
    });
    
    it("should throw an error if type isn't number for the first argument", () => {
        const a = 5;
        const b = "a string";
        assert.throws(()=> add(a, b), TypeError);
    });

    it("must get and return a type \"number\"", () => {
        const a = 5;
        const b = 6;
        const result = add(a, b);
        assert.ok(typeof a, b, result === "number");
    });
    
});