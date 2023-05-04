//Import des nodeJs dependencies
// import { test } from "node:test"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
// import assert from "node:assert"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
const test = require('node:test');
const assert = require('node:assert');

//Import des fonctions à tester
// import add from "../01.js"; (impossible car les exports ne sont pas en ES6 et je ne peux pas modifier les fichiers originels)
const { add, calc_moy } = require('../01.js');

test("add function", () => {
    //example from https://www.youtube.com/watch?v=jV9eoXCOFJg&ab_channel=TypeScriptTVwithBenny
    // const actual = add(5, 5);
    // const expected = 10;
    // assert.strictEqual(actual, expected);

    //Vérification de la fonction via true/false
    assert.ok(add(5, 5) === 10, true);
    assert.ok(add(2, 5) === 7, true, 'it\'s true');
    assert.equal(add(5) === 15, true);
    assert.strictEqual(add(5) === 12, false);

    //Vérification du renvoi d'une erreur.
    //https://nodejs.org/api/assert.html#assertthrowsfn-error-message
    assert.throws(() => add("5", 5) === 10, TypeError);
    assert.throws(() => add(1, "string"), TypeError);
});

test("calc_moy function", () => {
    //La fonction calcule une moyenne
    //Elle additionne via la méthode reduce les éléments du tableau nums
    //Elle divise ce total par le nombre de valeurs (la longuer du tableau).
    //La fontion prévoit un renvoi d'erreur si nums n'est pas un tableau ou contient
    //d'autres types que des entiers.

    //Vérification de la fonction
    assert.strictEqual(calc_moy([6, 5, 4, 3, 2, 1]), 3.5);
    assert.strictEqual(calc_moy([10, 100, 1000]) === 370, true);
    assert.strictEqual(calc_moy([1, 2, 3]) === 0, false);

    //Vérification du renvoi d'une erreur.
    //https://nodejs.org/api/assert.html#assertthrowsfn-error-message

    
    //J'envoie un argument qui n'est pas un tableau.
    const strTest = "une chaine de caractères";
    assert.throws(() => calc_moy(strTest), TypeError);
});