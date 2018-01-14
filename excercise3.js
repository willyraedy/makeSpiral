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
  return Array(size).fill(Array(size).fill('  '));
};

const getStartingIndex = (size) => {
  return Math.floor(size / 2);
};

const isNum = (direction, row, col, spiral) => {
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
  if (spiral[row + rowAdj] === undefined ||
    spiral[row + rowAdj][col + colAdj] === undefined) return false;
  return typeof spiral[row + rowAdj][col + colAdj] === 'number';
};

module.exports = {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
  isNum,
};
