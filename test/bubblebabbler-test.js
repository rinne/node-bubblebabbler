'use strict';

const bubblebabbler = require('../bubblebabbler.js');
const assert = require('assert');

assert.equal(bubblebabbler(''), 'xexax');
assert.equal(bubblebabbler('1234567890'), 'xesef-disof-gytuf-katof-movif-baxux');
assert.equal(bubblebabbler('Pineapple'), 'xigak-nyryk-humil-bosek-sonax');
