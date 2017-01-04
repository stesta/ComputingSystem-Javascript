'use strict';

var nand = function(a) {
    return function(b) {
        return a === 1 && b === 1 ? 0 : 1;
    };
};

var not = function(a) {
    return nand(a)(a);
};

var and = function(a) {
    return function(b) {
        return not(nand(a)(b));
    };
};

var or = function(a) {
    return function(b) {
        return nand(nand(a)(a))(nand(b)(b));
    };
};

var xor = function(a) {
    return function(b) {
        return and(or(a)(b))(nand(a)(b));
    };
};

module.exports = {
    nand: nand,
    not: not,
    and: and,
    or: or,
    xor: xor
};

