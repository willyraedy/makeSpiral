const { expect } = require('chai');
const {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
  Spiral,
} = require('./excercise3');

describe('Spiral ', () => {
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
    const spiral = new Spiral(8);
    spiral.spiral = centerSpiral;
    it('determines if there is a number to the left', () => {
      spiral.row = 1;
      spiral.col = 2;
      expect(spiral.isNum('left')).to.equal(true);
      spiral.row = 2;
      spiral.col = 2;
      expect(spiral.isNum('left')).to.equal(false);
    });
    it('determines if there is a number to the right', () => {
      spiral.row = 1;
      spiral.col = 0;
      expect(spiral.isNum('right')).to.equal(true);
      spiral.row = 2;
      spiral.col = 2;
      expect(spiral.isNum('right')).to.equal(false);
    });
    it('determines if there is a number to the top', () => {
      spiral.row = 2;
      spiral.col = 1;
      expect(spiral.isNum('top')).to.equal(true);
      spiral.row = 2;
      spiral.col = 2;
      expect(spiral.isNum('top')).to.equal(false);
    });
    it('determines if there is a number to the left', () => {
      spiral.row = 0;
      spiral.col = 1;
      expect(spiral.isNum('bottom')).to.equal(true);
      spiral.row = 2;
      spiral.col = 2;
      expect(spiral.isNum('bottom')).to.equal(false);
    });
  });

  describe('insert number', () => {
    it('inserts number in the current position', () => {
      const spiral = new Spiral(8);
      spiral.row = 1;
      spiral.col = 1;
      spiral.insertNumber(99);
      expect(spiral.spiral[1][1]).to.equal(99);
      spiral.row = 0;
      spiral.col = 0;
      spiral.insertNumber(66);
      expect(spiral.spiral[0][0]).to.equal(66);
    });
  });

  describe('place next number', () => {
    it('places numbers correctly', () => {
      const spiral = new Spiral(8);
      spiral.spiral = emptySpiral;
      spiral.row = 1;
      spiral.col = 1;
      spiral.goToNextPosition();
      expect(spiral.row).to.equal(1);
      expect(spiral.col).to.equal(2);
      spiral.spiral = centerSpiral;
      spiral.row = 1;
      spiral.col = 2;
      spiral.goToNextPosition();
      expect(spiral.row).to.equal(2);
      expect(spiral.col).to.equal(2);
    });
  });

  describe('make spiral', () => {
    it('makes spiral correctly', () => {
      const resultFor8 = [
        [6, 7, 8],
        [5, 0, 1],
        [4, 3, 2],
      ];
      const spiral = new Spiral(8);
      expect(spiral.spiral).to.deep.equal(resultFor8);
    });
  });
});
