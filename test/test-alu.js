'use strict';

var assert = require('assert');
var alu = require('../lib/alu');

describe('alu', function() {
  it('zx:0, nx:0, zy:1, ny:1, f:0, no:0 (x)', function() {
    assert.deepEqual(alu(0,0,1,1,0,0, [0,0,1,1], [0,1,0,1]), [0,0,1,1]);
  });
  it('zx:1, nx:1, zy:0, ny:0, f:0, no:0 (y)', function() {
    assert.deepEqual(alu(1,1,0,0,0,0, [0,0,1,1], [0,1,0,1]), [0,1,0,1]);
  });
  it('zx:0, nx:0, zy:1, ny:1, f:0, no:1 (!x)', function() {
    assert.deepEqual(alu(0,0,1,1,0,1, [0,0,1,1], [0,1,0,1]), [1,1,0,0]);
  });
  it('zx:1, nx:1, zy:0, ny:0, f:0, no:1 (!y)', function() {
    assert.deepEqual(alu(1,1,0,0,0,1, [0,0,1,1], [0,1,0,1]), [1,0,1,0]);
  });
});