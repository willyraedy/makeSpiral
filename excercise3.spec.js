const { expect } = require('chai');
const {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
} = require('./excercise3');

describe('Spiral Maker', () => {
  describe('determineSize', () => {
    it('returns the correct size', () => {
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

  describe('empty spiral creator', () => {
    it('returns an empty spiral of the right size', () => {
      const emptySpiral = [
        ['  ', '  ', '  '],
        ['  ', '  ', '  '],
        ['  ', '  ', '  '],
      ];
      expect(createEmptySpiral(3)).to.deep.equal(emptySpiral);
    });
  });

  describe('get starting index', () => {
    it('returns the staring index', () => {
      expect(getStartingIndex(3)).to.equal(1);
      expect(getStartingIndex(13)).to.equal(6);
      expect(getStartingIndex(25)).to.equal(12);
    });
  });
})
