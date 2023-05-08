function isAllPossibilities(array) {
  // gesucht ist array länge soll gleich sein wie zahlen in ihm
  return array.every((v, i) => array.includes(i))

}


const { assert } = require('chai');
describe("Tests", () => {
  it("tests", () => {
    assert.equal(isAllPossibilities([0, 1, 2, 3, 4, 5]), true);
    assert.equal(isAllPossibilities([1, 2, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 4]), false);
    assert.equal(isAllPossibilities([0, 1, 3, 2]), true);
  });
});