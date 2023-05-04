//Import des nodeJs dependencies
// import { test } from "node:test"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
// import assert from "node:assert"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
const test = require('node:test');
const assert = require('node:assert');

//Import des fonctions à tester
// import add from "../01.js"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
const { add } = require('../01.js');

test("add function", () => {
    //example from https://www.youtube.com/watch?v=jV9eoXCOFJg&ab_channel=TypeScriptTVwithBenny
    // const actual = add(5, 5);
    // const expected = 10;
    // assert.strictEqual(actual, expected);

    //Vérification de la fonction via true/false
    assert.strictEqual(add(5, 5) === 10, true);
    assert.strictEqual(add(2, 5) === 7, true);
    assert.strictEqual(add(5) === 15, true);
    assert.strictEqual(add(5) === 12, false);

    //Vérification du renvoi d'une erreur.
    https://nodejs.org/api/assert.html#assertthrowsfn-error-message
    assert.throws(() => add("5", 5) === 10, TypeError);
    assert.throws(() => add(1, "string"), TypeError);
});