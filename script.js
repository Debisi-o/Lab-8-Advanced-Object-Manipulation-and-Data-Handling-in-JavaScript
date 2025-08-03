// student object
const student = {
    name: 'John Doe',
    age: 22,
    enrolled: true,
    courses: ['Math', 'Science', 'History'],

    // Method to display basic info
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};
// Output the name, age, and method result
console.log(student.name);  // John Doe
console.log(student.age);   // 22
student.displayInfo();      // Name: John Doe, Age: 22
// Convert student object to JSON string
const studentJSON = JSON.stringify(student);
console.log(studentJSON);  // Output JSON string
// Convert JSON string back into a JavaScript object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);  // The student object
// Destructuring student object
const { name, courses } = student;
console.log(name);  // John Doe
console.log(courses);  // ['Math', 'Science', 'History']
// Destructure array of scores
const scores = [85, 92, 78, 90];
const [score1, score2] = scores;
console.log(score1, score2);  // 85 92
// Cloning student object using spread operator
const clonedStudent = { ...student, graduationYear: 2025 };
console.log(clonedStudent);  // New object with added property
// Merging two arrays
const newCourses = ['Philosophy', 'Art'];
const allCourses = [...student.courses, ...newCourses];
console.log(allCourses);  // ['Math', 'Science', 'History', 'Philosophy', 'Art']
// Add new course method
student.addCourse = function (course) {
    this.courses.push(course);
};
// Calculate total number of courses
student.getTotalCourses = function () {
    return this.courses.length;
};
// Add a new course
student.addCourse('Computer Science');
console.log(student.courses);  // ['Math', 'Science', 'History', 'Computer Science']