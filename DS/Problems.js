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

// [-1,4,-1,12,4,5]
// max = INT_MIN
// sum = 0;
// for(var)
// sum = 0
// 1
// sum

function maxSum(a) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      sum = 0;
    } else {
      sum = sum + a[i];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}

let a = [-1, 4, 6, -12, 4, 5];
console.log(maxSum(a));
