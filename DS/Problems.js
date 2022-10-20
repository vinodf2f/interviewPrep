// HackerRank grading
const getUpdatedGrades = (grades = []) => {
  if (!grades.length) return grades;
  return grades.map((grade) => {
    const lastDigit = grade % 10;
    let newGrade = grade;

    if (lastDigit < 5) {
      newGrade = newGrade + 5 - lastDigit;
    } else {
      newGrade = newGrade + 10 - lastDigit;
    }
    if (newGrade >= 40 && newGrade - grade < 3) return newGrade;
    else return grade;
  });
};
