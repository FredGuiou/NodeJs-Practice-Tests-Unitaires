"use strict";

// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const proxy = require("../06.js");

// Ensemble des test

describe("handler_get", () => {
  it("Should throw a new Error if property \"prop\" is unknown", () => {
    assert.throws(() => {
      const unknownProp = proxy.unknownProp;

      return unknownProp;
    }, Error);
  });

  it("Should return square value of object property", () => {
    assert.strictEqual(proxy.foo, 100);
  });
});

describe("handler_set", () => {
  it("Should throw a new TypeError if typeof value isn't \"number\"", () => {
    assert.throws(() => {
      proxy.foo = "20";
    }, TypeError);
  });

  it("Should set the value on the object's property", () => {
    proxy.foo = 30;
    assert.strictEqual(proxy.foo, 900);
  });
});

// Documentation :
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set
