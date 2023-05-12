"use strict";

// Import des nodeJs dependencies
const { describe, it } = require("node:test");
const assert = require("node:assert");

// Import des fonctions à tester
const Server = require("../05.js");

// Ensemble des test
describe("Server setTimeout", () => {
  it("Should send \"ready\" and return SimReady \"true\" after 500 ms", () => {
    const server = new Server();
    server.once("ready", () => {
      console.log("Server is ready");
    });
  });
});

describe("Server getter isReady", () => {
  it("Should set isReady true when ready is emited", () => {
    const server = new Server();
    server.once("ready", () => {
      assert.strictEqual(server.isReady, true);
    });
  });
});

describe("Server callMeMaybe", () => {
  it("Should throw an Error if isReady isn't true", () => {
    const server = new Server();
    assert.throws(() => {
      server.callMeMaybe();
    }, new Error("Server must be ready!"));
  });

  it("Should write in terminal \"WELL DONE!\" or \"FOO BAR!\" When Server is Ready", () => {
    const server = new Server();
    server.once("ready", () => {
      server.callMeMaybe();
      assert.strictEqual(process.stdout.write, "WELL DONE!" || "FOO BAR!");
    });
  });
});

// Documentation :
//
// https://nodejs.org/api/events.html#emitteronceeventname-listener
