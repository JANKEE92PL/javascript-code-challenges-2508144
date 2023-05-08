function hello() {
  return "Hello world.";
}


const { assert } = require('chai');
describe("Tests", function () {
  it("tests", () => {
    assert.equal(hello(), 'Hello world.');
  });
});
