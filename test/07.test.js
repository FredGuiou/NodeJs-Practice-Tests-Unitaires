"use strict";

// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const foo = require("../07.js");

// Ensemble des test
describe("test on function generator foo", () => {
  it("Should return expected values if no argument", () => {
    const iterator = foo();
    assert.strictEqual(iterator.next().value, 1);
    assert.strictEqual(iterator.next().value, 10);
    assert.strictEqual(iterator.next().value, 5n);
    assert.strictEqual(iterator.next().value, 0n);
    assert.ok(iterator.next().done);
  });
  it("Should return expected values if argument defined", () => {
    const coefValue = 5;
    const iterator = foo(coefValue);
    assert.strictEqual(iterator.next().value, 1 + coefValue);
    assert.strictEqual(iterator.next().value, 10 - coefValue);
    assert.strictEqual(iterator.next().value, 5n);
    assert.strictEqual(iterator.next().value, 0n);
    assert.ok(iterator.next().done);
  });
});

// Documentation :
// https://www.youtube.com/watch?v=nrGpYTQW_O0&ab_channel=tonygo_
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function*
