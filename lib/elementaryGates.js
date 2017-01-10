var _ = require("lodash");

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

var andMBit = function(xs, ys) {
    return _.zipWith(xs, ys, function(x,y) {
        return and(x)(y);
    });
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

var halfAdder = function(a, b) {
    return {
        sum: xor(a)(b),
        carry: and(a)(b) 
    };
};

var fullAdder = function(c,a,b) {
    a = halfAdder(a, b);
    b = halfAdder(a.sum, c);

    return {
        sum: b.sum,
        carry: xor(a.carry)(b.carry)
    }
}

var addMBit = function(xs, ys) {
    var ret = [],
        width = xs.length,
        carry = 0;

    while (width--) {
        var obj = fullAdder(xs[width], ys[width], carry);
        ret[width] = obj.sum;
        carry = obj.carry;
    }

    return ret;
};

module.exports = {
    nand: nand,
    not: not,
    and: and,
    andMBit: andMBit,
    or: or,
    xor: xor,
    halfAdder: halfAdder,
    fullAdder: fullAdder,
    addMBit: addMBit
};

