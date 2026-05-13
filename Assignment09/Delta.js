// JS Practice 1 - Delta

// 1. Variable Declaration and Scope
function scopeExample() {
    console.log("1. Scope Example");
    if (true) {
        var functionScoped = "I am var (Function Scoped)";
        let blockScoped = "I am let (Block Scoped)";
        const constantScoped = "I am const (Block Scoped)";
        console.log("Inside block:", functionScoped, "|", blockScoped, "|", constantScoped);
    }
    console.log("Outside block (var):", functionScoped); 
    console.log("Outside block (let/const): Cannot be accessed here.\n");
}
scopeExample();


//2. Array Access 
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
function getSecondFruit() {
    return fruits[1];
}
console.log("2. Array Access");
console.log("Second fruit:", getSecondFruit(), "\n");


//3. Push and Pop 
function modifyArray(arr) {
    arr.push("Mango");
    arr.pop();
    return arr;
}
console.log("3. Push and Pop");
console.log("Modified array:", modifyArray([...fruits]), "\n");


// 4. Map Method (Squaring Numbers)
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log("4. Map (Square)");
console.log("Squared numbers:", squareNumbers(numbers), "\n");


// 5. Filter Method (Odd Numbers)
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log("5. Filter (Odds)");
console.log("Odd numbers:", filterOddNumbers(numbers), "\n");


// 6. Objects and Greetings
const person = {
    name: "Alex",
    age: 25,
    occupation: "Developer"
};
function greetPerson(obj) {
    console.log("6. Object Greeting");
    console.log(`Hello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.\n`);
}
greetPerson(person);


// 7. Rectangle Area 
const rect = { width: 10, height: 5 };
function calculateArea(obj) {
    return obj.width * obj.height;
}
console.log("7. Rectangle Area");
console.log("Area:", calculateArea(rect), "\n");


// 8. Object Keys
function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log("8. Object Keys");
console.log("Keys:", getObjectKeys(person), "\n");


// 9. Merging Objects
const extraInfo = { location: "New York", hobby: "Coding" };
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log("9. Merge Objects");
console.log("Merged:", mergeObjects(person, extraInfo), "\n");


// 10. Reduce Method (Sum of Numbers)
function calculateSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log("10. Reduce (Sum)");
console.log("Total Sum:", calculateSum(numbers), "\n");