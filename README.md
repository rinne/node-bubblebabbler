In a Nutshell
=============

A simple function performing the binary buffer encoding into the
Bubble Babble format as described by late Dr. Antti Huima. This is
particularly useful if the user needs to read out the hash values or
other pseudorandom data e.g. over the phone in order to verify a match.


Reference
=========

Code

```
const bubblebabbler = require('bubblebabbler');
console.log(bubblebabbler(''));
console.log(bubblebabbler('1234567890'));
console.log(bubblebabbler('Pineapple'));
```

produces

```
xexax
xesef-disof-gytuf-katof-movif-baxux
xigak-nyryk-humil-bosek-sonax
```

in conformance with somewhat limited 'test vectors' in the specification.

There is no decoder in this module, because if you need one, you are
probably doing something terribly wrong.


Author
======

Timo J. Rinne <tri@iki.fi>


License
=======

This module is in public domain.
