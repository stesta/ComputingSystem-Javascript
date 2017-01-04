'use strict';

var assert = require('assert');
var gates = require('../lib/elementaryGates');

describe('nand gate', function() {
  it('0 0 = 1', function() {
    assert.equal(gates.nand(0)(0), 1);
  });
  it('0 1 = 1', function() {
    assert.equal(gates.nand(0)(1), 1);
  });
  it('1 0 = 1', function() {
    assert.equal(gates.nand(1)(0), 1);
  });
  it('1 1 = 0', function() {
    assert.equal(gates.nand(1)(1), 0);
  });
});

describe('not gate', function() {
  it('0 = 1', function() {
    assert.equal(gates.not(0), 1);
  });
  it('1 = 0', function() {
    assert.equal(gates.not(1), 0);
  });
});

describe('and gate', function() {
  it('0 0 = 0', function() {
    assert.equal(gates.and(0)(0), 0);
  });
  it('0 1 = 0', function() {
    assert.equal(gates.and(0)(1), 0);
  });
  it('1 0 = 0', function() {
    assert.equal(gates.and(1)(0), 0);
  });
  it('1 1 = 1', function() {
    assert.equal(gates.and(1)(1), 1);
  });
});

describe('or gate', function() {
  it('0 0 = 0', function() {
    assert.equal(gates.or(0)(0), 0);
  });
  it('0 1 = 1', function() {
    assert.equal(gates.or(0)(1), 1);
  });
  it('1 0 = 1', function() {
    assert.equal(gates.or(1)(0), 1);
  });
  it('1 1 = 1', function() {
    assert.equal(gates.or(1)(1), 1);
  });
});

describe('xor gate', function() {
  it('0 0 = 0', function() {
    assert.equal(gates.xor(0)(0), 0);
  });
  it('0 1 = 1', function() {
    assert.equal(gates.xor(0)(1), 1);
  });
  it('1 0 = 1', function() {
    assert.equal(gates.xor(1)(0), 1);
  });
  it('1 1 = 0', function() {
    assert.equal(gates.xor(1)(1), 0);
  });
});
