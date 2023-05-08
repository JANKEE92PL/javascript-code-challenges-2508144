function isIban(value) {
  let rearrange =
    value.substring(4, value.length)
    + value.substring(0, 4);
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let alphaMap = {};
  let number = [];

  alphabet.forEach((value, index) => {
    alphaMap[value] = index + 10;
  });

  rearrange.split('').forEach((value, index) => {
    number[index] = alphaMap[value] || value;
  });

  return modulo(number.join('').toString(), 97) === 1;
}

const modulo = (aNumStr, aDiv) => {
  var tmp = "";
  var i, r;
  for (i = 0; i < aNumStr.length; i++) {
    tmp += aNumStr.charAt(i);
    r = tmp % aDiv;
    tmp = r.toString();
  }
  return tmp / 1;
}

const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isIban('DE02200505501015871393'), true);
    assert.equal(isIban('DE88100900001234567892'), true);
    assert.equal(isIban('AT026000000001349870'), true);
    assert.equal(isIban('AT022081500000698597'), true);
    assert.equal(isIban('CH0204835000626882001'), true);
    assert.equal(isIban('CH0200790016271403331'), true);
  });
});
