"use strict";

// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");
const path = require("node:path");

// Import des fonctions à tester
const getFilesExtensions = require("../08.js");

// Ensemble des test
describe("test on function getFilesExtensions", () => {
  it("Should throw an Error if directory doesn't exist", async() => {
    const dir = "./fixtures/a.js";
    await assert.rejects(async() => {
      await getFilesExtensions(dir);
    }, new Error("dir must be a directory!"));
  });

  it("Should return all files extensions for a directory", async() => {
    const dir = path.join(__dirname, "fixtures");
    const expectedResult = new Set([".js", ".html", ".css"]);
    const result = await getFilesExtensions(dir);
    assert.deepStrictEqual([...result], [...expectedResult]);
  });

  it("Should return an empty set if the directory is empty", async() => {
    const dir = path.join(__dirname, "fixtures/emptydirectory");
    const result = await getFilesExtensions(dir);
    assert.deepStrictEqual([...result], []);
  });
});

// Documentation :
// https://nodejs.org/api/assert.html#assertrejectsasyncfn-error-message
