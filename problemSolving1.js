/* 1. Write a function that can print any random number between any two given numbers.
(included them) */
console.log('Qs no: 1');
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const result = getRandomNumber(1, 6);
console.log(result); // Output result

console.log(`-----------------------------------------------------
Qs no: 2

`);

// 2. How can you order roll numbers of students in your class sequentially?

const rollNumbers = [3, 4, 1, 5, 78, 65, 43, 23, 13, 45, 55];

rollNumbers.sort((a, b) => a - b); // return sorted array in accending order

console.log(rollNumbers);

console.log(`-----------------------------------------------------
Qs no: 3

`);

// 3. How can you order names of students in your class sequentially?
const studentNames = ['rasel', 'zibon', 'sumon', 'abir', 'faysal', 'farin'];
studentNames.sort();
console.log(studentNames);

console.log(`----------------------------------------------------
Qs no: 4

`);

// 4. Write a function that can tell us whether an year is a leap year or not.

function checkLeapYear(year) {
    // three conditions to find out the leap year
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
const year = 2020;
checkLeapYear(year);

console.log(`-----------------------------------------------------
Qs no: 5

`);

// 5. How would you determine the number of vowels in a sentence?

const str = 'I love Bangladesh';
function countVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const intersection = vowels.filter((element) => sentence.includes(element));
    return intersection.length;
}

const output = `The total number of vowels in the given sentence is: ${countVowels(
    'Olla how is going brother and what is the most useful method of teaching in todays era of joy and celebration',
)}`;
console.log(output);

console.log(`-----------------------------------------------------
Qs no: 6

`);

// 6. How would you extract the duplicate numbers in an array?

const number = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3];

function findDuplicates(array) {
    const duplicates = array.filter((value, index, self) => self.indexOf(value) !== index);
    return duplicates;
}

function findUnique(array) {
    const uniques = array.filter((value, index, self) => self.indexOf(value) === index);
    return uniques;
}

console.log(`The duplicates value of numbers array: ${findDuplicates(number)}`);
console.log(`The uniques value of numbers array: ${findUnique(number)}`);
