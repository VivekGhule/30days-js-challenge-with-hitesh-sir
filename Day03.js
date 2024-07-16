// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: If-Else Statements

// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

const num1 = 21
const num2 = 24
const num3 = 25

if (num1 > 0) {
    console.log("Number is positive");
} else if (num1 < 0) {
    console.log("Number is negative");
}
else {
    console.log("The Number is Zero");
    
}



// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 18 

if (age >= 18) {
    console.log("You are aligble for Vote"); 
}else{
    console.log("You are age not fit in crataria");
}
// Activity 2:

// Nested If-Else Statements

// • Task 3:
// Write a program to find the largest of three numbers using nested if-else statements.

if (num1 >= num2 && num1 >= num3) {
    console.log('num1 is the largest number.');
} else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is the largest number.");
} else {
    console.log("num3 is the largest number.");
}


// Activity 3: Switch Case
// . Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

const num = 3;

switch (num) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid inpute");
        break;
}


// . Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', C', 'D', 'F) based on a score and log the grade to the console.

const marks = 98

switch (true) {
    case (marks >= 90):
        console.log("A");
        break;
    case (marks >=70):
        console.log("B");
        break;
    case (marks >=60):
        console.log("C");
        break;
    case (marks >=35):
        console.log("D");
        break;
    case (marks < 35):
        console.log("F");
        break;
    default:
        console.log("Invalid inpute");
        break;
}


// Activity 4.

// • Conditional (Ternary) Operator

// • Task 6:
// Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let results = 22 % 2 === 0 ? "Number is odd" : " Number is even"
console.log(results);




// Activity 5: Combining Conditions

// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.


const year = 2024;


let LeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
console.log(LeapYear ? `${year} is a leap year.` : `${year} is not a leap year.`);
