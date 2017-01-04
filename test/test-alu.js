'use strict';

var assert = require('assert');
var alu = require('../lib/alu');

describe('alu', function() {
  it('x', function() {
    //                  |- inputs  -| |- xs  -|  |- ys  -|
    assert.deepEqual(alu(0,0,1,1,0,0, [0,0,1,1], [0,1,0,1]),
                    [0,0,1,1]);
  });
  it('y', function() {
    //                  |- inputs  -| |- xs  -|  |- ys  -|
    assert.deepEqual(alu(1,1,0,0,0,0, [0,0,1,1], [0,1,0,1]),
                    [0,1,0,1]);
  });
  it('!x', function() {
    //                  |- inputs  -| |- xs  -|  |- ys  -|
    assert.deepEqual(alu(0,0,1,1,0,1, [0,0,1,1], [0,1,0,1]),
                    [1,1,0,0]);
  });
  it('!y', function() {
    //                  |- inputs  -| |- xs  -|  |- ys  -|
    assert.deepEqual(alu(1,1,0,0,0,1, [0,0,1,1], [0,1,0,1]),
                    [1,0,1,0]);
  });
});