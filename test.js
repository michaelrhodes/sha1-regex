var test = require('tape')
var sha1 = require('./')

test('it works', function (assert) {
  assert.equal(true, sha1.test('17413f944145f37dcaa9bc55d9a201a248a08aae'))
  assert.equal(false, sha1.test('7413f944145f37dcaa9bc55d9a201a248a08aae'))
  assert.equal(false, sha1.test('nope'))
  assert.end()
})
