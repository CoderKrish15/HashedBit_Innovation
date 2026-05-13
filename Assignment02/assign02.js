
// Q1. Display even numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Q2. Calculator using function and switch

function calculator(num1, num2, operator) {

    switch (operator) {

        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;

        default:
            return "Invalid Operator";
    }
}

// Example
console.log(calculator(10, 5, '+'));
console.log(calculator(10, 5, '-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/'));


// Q3. Tax Calculator using switch

function findTax(salary) {

    switch (true) {

        case (salary > 0 && salary <= 500000):
            return salary * 0;

        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;

        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;

        case (salary > 1500000):
            return salary * 0.30;

        default:
            return "Invalid Salary";
    }
}

// Example
console.log(findTax(400000));
console.log(findTax(700000));
console.log(findTax(1200000));
console.log(findTax(2000000));


// Q4. Sum of products of corresponding digits

function digitProductSum(n1, n2) {

    let str1 = n1.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();

    let maxLength = Math.max(str1.length, str2.length);

    let sum = 0;

    for (let i = 0; i < maxLength; i++) {

        let digit1 = i < str1.length ? Number(str1[i]) : 0;
        let digit2 = i < str2.length ? Number(str2[i]) : 0;

        sum += digit1 * digit2;
    }

    return sum;
}

// Example
console.log(digitProductSum(6, 34));
console.log(digitProductSum(123, 456)); 

