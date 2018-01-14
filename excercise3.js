const determineSize = (n) => {
  let total = 0;
  let rings = 0;
  while (total < n) {
    rings += 1;
    total += 8 * rings;
  }
  return 2 * rings + 1;
};

module.exports = {
  determineSize,
};
