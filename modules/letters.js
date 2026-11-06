function addLetterGrade(data) {
  return data.map(s => {
    let letter = "C";
    if (s.score >= 90) letter = "A";
    else if (s.score >= 75) letter = "B";
    return { ...s, letter };
  });
}
module.exports = addLetterGrade;