const determineSize = (n) => {
  let total = 0;
  let rings = 0;
  while (total < n) {
    rings += 1;
    total += 8 * rings;
  }
  return 2 * rings + 1;
};

const createEmptySpiral = (size) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Array(size).fill('  '));
  }
  return arr;
};

const getStartingIndex = (size) => {
  return Math.floor(size / 2);
};

class SpiralMaker {
  constructor(n) {
    if (n < 0) throw new Error('Number must be a positive integer');
    const size = determineSize(n);
    const index = getStartingIndex(size);
    this.spiral = createEmptySpiral(size);
    this.row = index;
    this.col = index;
    this.target = n;

    this.makeSpiral();
  }

  isNum(direction) {
    let rowAdj = 0;
    let colAdj = 0;
    switch (direction) {
      case 'left':
        colAdj = -1;
        break;
      case 'right':
        colAdj = 1;
        break;
      case 'top':
        rowAdj = -1;
        break;
      case 'bottom':
        rowAdj = 1;
        break;
      default:
        throw new Error('Unrecognized direction');
    }
    // Handle edges. Can't use falsy because 0 is falsy
    if (this.spiral[this.row + rowAdj] === undefined ||
      this.spiral[this.row + rowAdj][this.col + colAdj] === undefined) return false;
    return typeof this.spiral[this.row + rowAdj][this.col + colAdj] === 'number';
  }

  insertNumber(n) {
    this.spiral[this.row][this.col] = n;
  }

  goToNextPosition() {
    if (this.isNum('left')) {
      if (this.isNum('bottom')) {
        // go right
        this.col += 1;
      } else {
        // go down
        this.row += 1;
      }
    } else if (this.isNum('right')) {
      if (this.isNum('top')) {
        // go left
        this.col -= 1;
      } else {
        // go up
        this.row -= 1;
      }
    } else if (this.isNum('bottom')) {
      // go right
      this.col += 1;
    } else if (this.isNum('top')) {
      // go left
      this.col -= 1;
    } else {
      // go right
      this.col += 1;
    }
  }

  makeSpiral() {
    for (let i = 0; i <= this.target; i++) {
      this.insertNumber(i);
      this.goToNextPosition(i);
    }
  }
}

module.exports = {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
  SpiralMaker,
};
