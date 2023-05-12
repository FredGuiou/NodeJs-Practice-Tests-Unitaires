"use strict";
// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const Vector = require("../02.js");

describe("Vector constructor test", () => {
  it("use a constructor with defaults values", () => {
    const vec = new Vector();
    assert.strictEqual(vec.x, 0);
    assert.strictEqual(vec.y, 0);
    assert.strictEqual(vec.z, 0);
  });

  it("use a constructor with parametered values", () => {
    const vec = new Vector(1, 2, 3);
    assert.strictEqual(vec.x, 1);
    assert.strictEqual(vec.y, 2);
    assert.strictEqual(vec.z, 3);
  });

  it("throws an error if typeof x, y or z argument isn't \"number\"", () => {
    assert.throws(() => new Vector("a", 2, 3), TypeError, "argument x must be a number");
    assert.throws(() => new Vector(1, "b", 3), TypeError, "argument y must be a number");
    assert.throws(() => new Vector(1, 2, "c"), TypeError, "argument z must be a number");
  });

  it("throws an error if argument isn't an instance of Vector", () => {
    const vec = new Vector(1, 2, 3);
    assert.throws(() => vec.add({ x: 1, y: 2, z: 3 }), TypeError, "vec must be an instance of Vector");
  });

  it("add multiple vectors", () => {
    const vec1 = new Vector(1, 2, 3);
    const vec2 = new Vector(4, 5, 6);
    const vec3 = new Vector(7, 8, 9);

    vec1.add(vec2);
    vec1.add(vec3);

    assert.strictEqual(vec1.x, 1 + vec2.x + vec3.x);
    assert.strictEqual(vec1.y, 2 + vec2.y + vec3.y);
    assert.strictEqual(vec1.z, 3 + vec2.z + vec3.z);
  });

  it("add can use an return negative values", () => {
    const vec1 = new Vector(1, 2, 3);
    const vec2 = new Vector(-2, -4, -6);
    vec1.add(vec2);

    assert.strictEqual(vec1.x, -1);
    assert.strictEqual(vec1.y, -2);
    assert.strictEqual(vec1.z, -3);
  });

  it("return Json Object", () => {
    const vec = new Vector(1, 2, 3);
    const json = vec.toJSON();

    assert.deepStrictEqual(json, { x: 1, y: 2, z: 3 });
  });
});
