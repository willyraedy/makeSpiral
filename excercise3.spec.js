const { expect } = require('chai');
const { determineSize } = require('./excercise3');

describe('determineSize', () => {
  it('determines the correct size', () => {
    const num1 = 0;
    const num2 = 7;
    const num3 = 55;
    const num4 = 118;

    expect(determineSize(num1)).to.equal(1);
    expect(determineSize(num2)).to.equal(3);
    expect(determineSize(num3)).to.equal(9);
    expect(determineSize(num4)).to.equal(11);
  });
});
