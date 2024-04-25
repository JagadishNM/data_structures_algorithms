function calculateTotalMarks(N, M, marks) {
    const totalMarks = [];

    // Step 1: Calculate average marks for each subject
    const subjectAverages = marks[0].map((_, j) => {
        let sum = marks.reduce((acc, curr) => acc + curr[j], 0);
        return sum / N;
    });

    // Step 2: Find the subject with the lowest average
    const lowestSubjectIndex = subjectAverages.indexOf(Math.min(...subjectAverages));

    // Step 3 & 4: Deduct marks for the lowest subject and calculate total marks for each student
    marks.forEach(studentMarks => {
        let total = 0;
        studentMarks.forEach((mark, j) => {
            if (j !== lowestSubjectIndex) total += mark;
        });
        totalMarks.push(total);
    });

    return totalMarks;
}

// Example usage:
const N = 3;
const M = 5;
const marks = [
    [175, 76, 65, 87, 87],
    // Add more rows for other students
];
console.log(calculateTotalMarks(N, M, marks)); // Output will be an array of total marks for each student

// Given a list of N students, every student is marked for M subjects. Each student is denoted by an index value. Their teacher Ms. Margaret must ignore the marks of any 1 subject for every student. For this she decides to ignore the subject which has the lowest class average.
// Your task is to help her find that subject, calculate the total marks of each student in all the other subjects and then finally return the array of the total marks scored by each student.
// Input Specification:
// input1: An integer value N denoting number of students input2: An integer value M denoting number of subjects
// input3: A 2-D integer array of size N*M containing the marks of all students in each subject
// Output Specification:
// Return an integer array of size N containing the total marks of each student after deducting the score for that one subject.