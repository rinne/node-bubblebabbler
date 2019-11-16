'use strict';

function bubblebabbler(b) {
	var v = 'aeiouy', c = 'bcdfghklmnprstvzx', r, i, e, h;
    if (typeof(b) === 'string') {
        b = Buffer.from(b, 'utf8');
    } else if (! Buffer.isBuffer(b)) {
        throw new Error('Bad input');
    }
    for (r = 'x', h = 1, i = 0, e = b.length - 1; i < e; i += 2) {
        r += (v[(((b[i] >> 6) & 3) + h) % 6] +
              c[(b[i] >> 2) & 15] +
              v[(((b[i]) & 3) + Math.floor(h / 6)) % 6] +
              c[(b[i + 1] >> 4) & 15] +
              '-' +
              c[b[i + 1] & 15]);
        h = ((h * 5) + (b[i] * 7) + b[i + 1]) % 36;
    }
    if (b.length & 1) {
        r += (v[(((b[i] >> 6) & 3) + h) % 6] +
              c[(b[i] >> 2) & 15] +
              v[(((b[i]) & 3) + Math.floor(h / 6)) % 6] +
              'x');
    } else {
        r += (v[h % 6] +
              c[16] +
              v[Math.floor(h / 6)] +
              'x');
    }
	return r;
}

module.exports = bubblebabbler;
