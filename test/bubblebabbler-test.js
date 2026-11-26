'use strict';

const bubblebabbler = require('../bubblebabbler.js');
const assert = require('assert');

assert.equal(bubblebabbler(''), 'xexax');
assert.equal(bubblebabbler('1234567890'), 'xesef-disof-gytuf-katof-movif-baxux');
assert.equal(bubblebabbler('Pineapple'), 'xigak-nyryk-humil-bosek-sonax');

// Buffer input gives the same result as the string's UTF-8 bytes.
assert.equal(bubblebabbler(Buffer.from('Pineapple')), 'xigak-nyryk-humil-bosek-sonax');
assert.equal(bubblebabbler(Buffer.alloc(0)), 'xexax');
assert.equal(bubblebabbler('häppää'), bubblebabbler(Buffer.from('häppää', 'utf8')));

// A SHA-1 digest, against "ssh-keygen -B" (OpenSSH).
assert.equal(bubblebabbler(Buffer.from('6d5324d33bbfd914668973fa0cb569a88b1a9cdb', 'hex')),
             'xireh-fynot-fivor-zykec-ginim-nysez-pefer-hepop-mydec-pilot-roxyx');

// Other input is refused.
assert.throws(function() { bubblebabbler(123); }, /Bad input/);
assert.throws(function() { bubblebabbler(null); }, /Bad input/);
assert.throws(function() { bubblebabbler(); }, /Bad input/);
assert.throws(function() { bubblebabbler([ 1, 2, 3 ]); }, /Bad input/);

console.log('OK');
