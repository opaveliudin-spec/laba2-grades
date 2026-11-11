function findTopStudent(data) {
  return data.reduce((max, s) => (s.score > max.score ? s : max)).name;
}
module.exports = findTopStudent;