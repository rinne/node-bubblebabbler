Changelog
=========

Unreleased
----------

Requires Node.js 8 or newer (was 4.2, which the code didn't
actually support: it needs Buffer.from() for strings, added in 4.5).

### Other

- More tests: Buffer input, a SHA-1 digest against OpenSSH
  (ssh-keygen -B), and refusal of input that is not a string or a
  Buffer.

1.0.1
-----

Published 2019-11-16. Earlier versions are not covered here; see the git
history.
