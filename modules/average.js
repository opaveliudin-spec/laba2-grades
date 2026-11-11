function calculateAverage(data) {
  if (data.length === 0) return 0;
  const sum = data.reduce((acc, s) => acc + s.score, 0);
  return sum / data.length;
}
module.exports = calculateAverage;