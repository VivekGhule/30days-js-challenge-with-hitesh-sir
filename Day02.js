// • Task 1:
// Write a program to add two numbers and log the result to the console.

let sum = (num1,num2) =>num1+num2

console.log(sum(7,7));

 
// • Task 2:
// Write a program to subtract two numbers and log the result to the console.

 sum = (num1,num2) =>num1-num2

console.log(sum(7,7));
// • Task 3:
// Write a program to multiply two numbers and log the result to the console.

sum = (num1,num2) =>num1*num2

console.log(sum(7,7));


// • Task 4:
// Write a program to divide two numbers and log the result to the console.

sum = (num1,num2) =>num1/num2

console.log(sum(7,7));

// • Task 5:
// Write a program to find the remainder when one number is divided by another and log the result to the console.

sum = (num1,num2) =>num1%num2

console.log(sum(7,7));




// Activity 2: Assignment Operators


// • Task 6:
// Use the operator to add a number to a variable and log the result to the console.

 sum = (num1,str) =>{
    const result = num1 + str;
    return result
}

console.log(sum(12,"Vivek"));

// • Task 7:
// Use the -z operator to subtract a number from a variable and log the result to the console.

sum = (str,num1) =>{
    const result = str-num1;
    return result
}

console.log(sum("Vivek",12));


// Activity 3: Comparison Operators
// . Task 8: Write a program to compare two numbers using > and < and log the result to the console.

const num1 = 21;
const num2 = 24;

if (num1 > num2) {
    console.log("num1 is greate");
    
}else if (num1 == num2)
{
    console.log("Both Number Is same");
}else{
    console.log("num2 is Greate");
}


// . Task 9: Write a program to compare two numbers using and <= and log the result to the console.

if (num1 <= num2) {
    console.log("True");
}


// • Task IO: Write a program to compare two numbers using == and = and log the result to the console.
if (num1 == num2){
    console.log("true");
}
// else if (num1 = num2)
// {
//     console.log("False");



// }
else{
    console.log("false");
}



// Activity 4: Logical Operators
// • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

if (num1 > num1 && num1 == num2) {
    console.log("True");
}else if (num1 < num2 && num1 <= num2){
    console.log("True");
}else{
    console.log("False");
}



// • Task 12: Write a program that uses the I I operator to combine two conditions and log the result to the console.


if (num1 > num1 ||  num1 == num2) {
    console.log("True");
}else{
    console.log("False");
}

// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

if (num1 != num2) {
    console.log("true");
}else{
    console.log("False");
}
// Activity 5: Ternary Operator


// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let rank = 1;

const results = rank <= 0 ? "rank is negative" : "rank is positive";
console.log(results);




// Feature Request:
// 1 . Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let oprations = (num1,num2) =>{
    let sum ,sub ,mult ,div ,remen;
    sum = num1+num2;
    sub = num1-num2;
    mult = num1*num2;
    div = num1/num2;
    remen= num1%num2;

    console.log(sum,sub,mult,div,remen);
}
oprations(12,12);




// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

if (num1 > num2) {
    console.log("true 1");
}else if(num1 < num2){
    console.log("True 2");
} else if(num1 >= num2){
    console.log("True 3");
} else if(num1 <= num2){
    console.log("True 4");
} else if(num1 == num2){
    console.log("True 5");
} 
else {
    console.log("false");
}

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

results = rank <= 0 ? "rank is negative" : "rank is positive";
console.log(results);
