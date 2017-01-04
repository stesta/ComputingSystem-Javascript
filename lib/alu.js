// ALU: Arithmetic Logic Unit
// inputs: 
//    if zx then x = 0
//    if nx then x = !x
//    if zy then y = 0
//    if ny then y = !y
//    if f then out x+y else out x&y
//    if no the out = !out
//    xs = multi-bit x input
//    ys = multi-bit y input
// outputs:
//    [Int] output
//    zr true iff out == 0
//    ng true iff out < 0
// comments:
//    overflow is neither detected nor handled

var _ = require("lodash"); 
var gates = require("../lib/elementaryGates");

var zeroAndNegate = function(z,n,elements) {
    var zero = _.map(elements, function(el) { return gates.and(gates.not(z))(el); });
    var negate = _.map(zero, function(el) { return gates.xor(n)(el); });

    return negate;
};

var andMBit = function(xs, ys) {
    return _.zipWith(xs, ys, function(x,y) {
        return gates.and(x)(y);
    });
};

// todo: return zr and ng
module.exports = function(zx, nx, zy, ny, f, no, xs, ys) {
    var _xs = zeroAndNegate(zx, nx, xs);
    var _ys = zeroAndNegate(zy, ny, ys);
    var combined = [];

    // todo: account for f === 1
    combined = andMBit(_xs, _ys);
    return _.map(combined, function(el) {
        return gates.xor(no)(el); // output negation
    });
};