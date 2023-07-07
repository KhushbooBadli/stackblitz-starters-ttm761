// Question 2 --
/* You are required to sort an array of objects, where each student is represented as an object 

 Each object has 4 keys, i.e, name, chemistry marks, biology marks, and date of birth. You should sort the array of objects according to the following rules: 

 1. The first priority is the total marks.
 2. In case the students have the same total marks, the next priority should be the number of marks in biology.
 3. If students have the same marks in biology, and chemistry and have the same date of birth, then any order between them is acceptable */

function sortStudents(testCase2) {
  testCase2.sort((a, b) => {
    // 1. Sort by total marks in descending order
    const totalMarksDiff =
      b.chemistryMarks + b.biologyMarks - (a.chemistryMarks + a.biologyMarks);
    if (totalMarksDiff !== 0) {
      return totalMarksDiff;
    }

    // 2. Sort by biology marks in descending order
    const biologyMarksDiff = b.biologyMarks - a.biologyMarks;
    if (biologyMarksDiff !== 0) {
      return biologyMarksDiff;
    }

    // 3. Sort by date of birth in ascending order
    const dateA = new Date(a.dateOfBirth.split('-').reverse().join('-'));
    const dateB = new Date(b.dateOfBirth.split('-').reverse().join('-'));
    return dateA - dateB;
  });

  testCase2.forEach((student) => {
    console.log(
      `${student.name}
      `
    );
  });
}

// Example usage with two provided test cases:
let testCase1 = [
  {
    name: 'Leo Messi',
    dateOfBirth: '31-12-1995',
    biologyMarks: 95,
    chemistryMarks: 91,
  },
  {
    name: 'Cristiano Ronaldo',
    dateOfBirth: '31-05-1992',
    biologyMarks: 90,
    chemistryMarks: 81,
  },
  {
    name: 'Virat Kohli',
    dateOfBirth: '31-12-1995',
    biologyMarks: 95,
    chemistryMarks: 96,
  },
  {
    name: 'Rohit Sharma',
    dateOfBirth: '31-12-1995',
    biologyMarks: 85,
    chemistryMarks: 86,
  },
  {
    name: 'Viswanathan Anand',
    dateOfBirth: '12-12-1994',
    biologyMarks: 99,
    chemistryMarks: 10,
  },
];
console.log('testCase1');
sortStudents(testCase1);

let testCase2 = [
  {
    name: 'Leo Messi',
    dateOfBirth: '31-12-1995',
    biologyMarks: 100,
    chemistryMarks: 80,
  },
  {
    name: 'Cristiano Ronaldo',
    dateOfBirth: '31-05-1992',
    biologyMarks: 80,
    chemistryMarks: 100,
  },
  {
    name: 'Virat Kohli',
    dateOfBirth: '31-12-1995',
    biologyMarks: 30,
    chemistryMarks: 40,
  },
  {
    name: 'Rohit Sharma',
    dateOfBirth: '31-12-1995',
    biologyMarks: 40,
    chemistryMarks: 30,
  },
  {
    name: 'Viswanathan Anand',
    dateOfBirth: '12-12-1994',
    biologyMarks: 99,
    chemistryMarks: 10,
  },
];
console.log('testCase2');
sortStudents(testCase2);
