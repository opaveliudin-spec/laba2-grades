function filterFailed(data, passScore = 60) {
  return data.filter(s => s.score < passScore).map(s => s.name);
}
module.exports = filterFailed;