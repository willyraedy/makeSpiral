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
}

module.exports = {
  determineSize,
  createEmptySpiral,
  getStartingIndex,
};
