"use strict";
// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const User = require("../03.js");

describe("User name test", () => {
  it("Should have the correct value for name property", () => {
    assert.strictEqual(User.name, "fraxken");
  });
});

describe("User callGreet test", () => {
  it("Should have the correct initial value for callGreet property", () => {
    assert.strictEqual(User.callGreet, 0);
  });
});

describe("User addProperty test", () => {
  it("should return false", () => {
    assert.strictEqual(User.addProperty(), false);
  });
});

describe("User Object.seal statement", () => {
  it("Should be sealed", () => {
    assert.ok(Object.isSealed(User), "should equal true because the provided Object is expected to be sealed");
  });
});

describe("User greet function", () => {
  it("Should return a correct greeting sentence", () => {
    const greeting = User.greet();
    assert.deepStrictEqual(greeting, "hello fraxken");
  });

  it("Should increment callGreet property +1 untill >2 and reset to 0", () => {
    User.callGreet = 0;
    User.greet();
    assert.equal(User.callGreet, 1);
    User.greet();
    assert.equal(User.callGreet, 2);
    User.greet();
    assert.equal(User.callGreet, 3);
    User.greet();
    assert.equal(User.callGreet, 0);
  });
});
