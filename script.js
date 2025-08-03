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
