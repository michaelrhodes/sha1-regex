# sha1-regex
sha1-regex is a regular expression that matches hex-encoded sha-1 hashes.

[![Build status](https://travis-ci.org/michaelrhodes/sha1-regex.svg?branch=master)](https://travis-ci.org/michaelrhodes/sha1-regex)

## install
```sh
$ npm install sha1-regex
```

## example
```js
var sha1 = require('sha1-regex')

sha1.test('17413f944145f37dcaa9bc55d9a201a248a08aae')
> true

sha1.test('nope')
> false
```

## license
[MIT](http://opensource.org/licenses/MIT)
