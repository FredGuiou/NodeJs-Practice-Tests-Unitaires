"use strict";
// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const calc = require("../04.js");

// Ensemble des test

describe("calc function tests", () => {
  it("Should throw an error if calc hasn't actionName or has got a wrong one", () => {
    assert.throws(() => calc("div", 4, 2), Error, "Unknown actionName");
    assert.throws(() => calc("", 4, 2), Error, "Unknown actionName");
    assert.throws(() => calc(undefined, 4, 2), Error, "Unknown actionName");
  });

  it("Should use default values 0 for a or b argument if they're unset or undefined", () => {
    assert.strictEqual(calc("add"), 0);
    assert.strictEqual(calc("add", 1, undefined), 1);
    assert.strictEqual(calc("add", "", 2), 2);
    assert.strictEqual(calc("mul"), 0);
    assert.strictEqual(calc("mul", 1, undefined), 0);
    assert.strictEqual(calc("mul", "", 2), 0);
    assert.strictEqual(calc("sub"), 0);
    assert.strictEqual(calc("sub", 1, undefined), 1);
    assert.strictEqual(calc("sub", "", 2), -2);
  });

  it("Should transform arguments to Number", () => {
    assert.strictEqual(calc("add", "2", "3"), 5);
    assert.strictEqual(calc("mul", "2", "3"), 6);
    assert.strictEqual(calc("sub", "2", "3"), -1);
  });
});
