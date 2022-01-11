'use strict'

// 1. Read the JSON file into a variable called students
const students = require("./students.json");

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker
students.forEach(student => {
    console.log(`Hello ${student.firstName} ${student.lastName}.`);
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
function test (arr, letter) {
    // Filter the original array to only include students whose last name starts with "letter":
    let filteredArr = arr.filter(student => student.lastName.toLowerCase().startsWith(letter.toLowerCase()));

    // Count how many students have a last name beginning with "letter":
    const count = function (arr) {
        let count = 0;
        arr.forEach(student => {
            count += 1;
        });

        return count;
    };

    // Output:
    console.log(`${count(filteredArr)} student(s) have a last name starting with ${letter.toUpperCase()}.`);
}

// Call function:
test(students, "D"); // You can filter and count by any letter.