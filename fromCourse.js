//ручное, просто вызываем

capitalaize(text)

//автоматические 

if (capitalaize('hello') !== 'Hello') {
    throw new Error('Test failed');
}

if (capitalaize("") !== '') {
    throw new Error('Test failed');
}

// кол-во тестов:
// основной сценарий
// пограничный случай
// ошибочный сценарий

import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize('hello'), 'Hello');

/*
AssertionError [ERR_ASSERTION]: 'hello' == 'Hello'
  actual: 'hello',
  expected: 'Hello'
*/
assert.strictEqual(1, '1'); // Ошбика

assert.deepStrictEqual({ key: "value" }, {key: "value" }); 
assert.deepStrictEqual({ key: "value" }, {key: "another value" }); 

//с not
assert.notstrictEqual(1, '1'); // Ошбика

assert.notdeepStrictEqual({ key: "value" }, {key: "value" }); 
assert.notdeepStrictEqual({ key: "value" }, {key: "another value" }); 