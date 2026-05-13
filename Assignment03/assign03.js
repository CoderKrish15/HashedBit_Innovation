// Q1) Remove states starting with vowels using filter()
let states = [
    "Andhra Pradesh",
    "Bihar",
    "Uttar Pradesh",
    "Maharashtra",
    "Odisha",
    "Kerala",
    "Assam"
];

let filteredStates = states.filter(state => {
    let firstLetter = state[0].toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstLetter);
});

console.log(filteredStates);

// Q2) Reverse the sentence
let sentenceStr = "I love my India";
let reversedSentence = sentenceStr.split(" ").reverse().join(" ");
console.log(reversedSentence);

// Q3) Convert INDIA to INDONESIA using splice()
let country = "INDIA";
let countryArr = country.split("");
countryArr.splice(3, 2, "O", "N", "E", "S", "I", "A");
console.log(countryArr.join(""));

// Q4) Count vowels and consonants
let textString = "Hello My name is Krish";
let vowelCount = 0;
let consonantCount = 0;

for (let char of textString.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {

        if ("aeiou".includes(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
}
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);


// Q5) Replace wrong word with correct word
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
let sentence = "I love Java";
console.log(correctfn(sentence, "Java", "JavaScript"));


// Q6) Filter numbers greater than 5
let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let filteredNumbers = inputArr.filter(num => num > 5);
console.log(filteredNumbers);

// Q7) Find average using map() and reduce()
const studentsData = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let averageResult = studentsData.map(student => {
    let total = student.scores.reduce((sum, score) => sum + score, 0);
    let average = total / student.scores.length;
    return {
        name: student.name,
        average: average
    };
});
console.log(averageResult);


// Q8) Repeated sum of digits
function repeatedSum(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

console.log(repeatedSum(456));


// Q9) Count number of words in paragraph
function countWords(paragraph) {
    let words = paragraph.trim().split(" ");
    return words.length;
}

let paragraphText = "Hello Krish here This is Assignment number 3";
console.log(countWords(paragraphText));

// Q10) Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));


// Q11) Find average marks using object and array methods
let studentMarks = {

    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};
let averageMarksOutput = {};
for (let student in studentMarks) {
    let marks = Object.values(studentMarks[student]);
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;
    averageMarksOutput[student] = {
        average: average
    };
}
console.log(averageMarksOutput);