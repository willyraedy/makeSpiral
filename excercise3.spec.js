const { expect } = require('chai');
const {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
  SpiralMaker,
} = require('./excercise3');

describe('Spiral Maker', () => {
  const emptySpiral = [
    ['  ', '  ', '  '],
    ['  ', '  ', '  '],
    ['  ', '  ', '  '],
  ];
  const centerSpiral = [
    ['  ', '  ', '  '],
    ['  ', 10, '  '],
    ['  ', '  ', '  '],
  ];
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

  describe('isNum', () => {
    const spiralMaker = new SpiralMaker(8);
    spiralMaker.spiral = centerSpiral;
    it('determines if there is a number to the left', () => {
      spiralMaker.row = 1;
      spiralMaker.col = 2;
      expect(spiralMaker.isNum('left')).to.equal(true);
      spiralMaker.row = 2;
      spiralMaker.col = 2;
      expect(spiralMaker.isNum('left')).to.equal(false);
    });
    it('determines if there is a number to the right', () => {
      spiralMaker.row = 1;
      spiralMaker.col = 0;
      expect(spiralMaker.isNum('right')).to.equal(true);
      spiralMaker.row = 2;
      spiralMaker.col = 2;
      expect(spiralMaker.isNum('right')).to.equal(false);
    });
    it('determines if there is a number to the top', () => {
      spiralMaker.row = 2;
      spiralMaker.col = 1;
      expect(spiralMaker.isNum('top')).to.equal(true);
      spiralMaker.row = 2;
      spiralMaker.col = 2;
      expect(spiralMaker.isNum('top')).to.equal(false);
    });
    it('determines if there is a number to the left', () => {
      spiralMaker.row = 0;
      spiralMaker.col = 1;
      expect(spiralMaker.isNum('bottom')).to.equal(true);
      spiralMaker.row = 2;
      spiralMaker.col = 2;
      expect(spiralMaker.isNum('bottom')).to.equal(false);
    });
  });

  describe('insert number', () => {
    it('inserts number in the current position', () => {
      const spiralMaker = new SpiralMaker(8);
      spiralMaker.row = 1;
      spiralMaker.col = 1;
      spiralMaker.insertNumber(99);
      expect(spiralMaker.spiral[1][1]).to.equal(99);
      spiralMaker.row = 0;
      spiralMaker.col = 0;
      spiralMaker.insertNumber(66);
      expect(spiralMaker.spiral[0][0]).to.equal(66);
    });
  });

  describe('place next number', () => {
    it('places numbers correctly', () => {
      const spiralMaker = new SpiralMaker(8);
      spiralMaker.spiral = emptySpiral;
      spiralMaker.row = 1;
      spiralMaker.col = 1;
      spiralMaker.goToNextPosition();
      expect(spiralMaker.row).to.equal(1);
      expect(spiralMaker.col).to.equal(2);
      spiralMaker.spiral = centerSpiral;
      spiralMaker.row = 1;
      spiralMaker.col = 2;
      spiralMaker.goToNextPosition();
      expect(spiralMaker.row).to.equal(2);
      expect(spiralMaker.col).to.equal(2);
    });
  });

  describe('make spiral', () => {
    it('makes spiral correctly', () => {
      const resultFor8 = [
        [6, 7, 8],
        [5, 0, 1],
        [4, 3, 2],
      ];
      const spiralMaker = new SpiralMaker(8);
      expect(spiralMaker.spiral).to.deep.equal(resultFor8);
    });
  });
});
