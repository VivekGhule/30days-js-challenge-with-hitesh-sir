// Day 4: Loops

// Tasks/Activities:


// Activity 1: For Loop



// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// • Task 2: Write a program to print the multiplication table of 5 using a for loop.

for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5*i}`);
}


// Activity 2: While Loop


// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let i = 1 ;
let result = 0;
while (i <= 10) {
    result += i;
    i++
}
console.log(result);


// • Task 4:
// Write a program to print numbers from 10 to 1 using a while loop.

let  k = 10;

while (k >= 1) {
    console.log(k);
    k--
}


// Activity 3: Do...While Loop
// . Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
 k= 1
do {
    console.log(k);
    k++
} while (k <= 5);



// . Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let number = 5
let factorial = 1;
let l = number;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`The factorial of ${number} is ${factorial}.`);



// Activity 4:

// Nested Loops


// • Task 7:

// Write a program to print a pattern using nested for loops: (ignore color)

for (let i = 1; i <= 5; i++) {
    let breks = "";
    for (let j = 1; j <= i; j++) {
        breks += "*"
        
    }
    console.log(breks);  
}


// Activity 5: Loop Control Statements


// • Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

for (let index = 1; index <= 10; index++) {
    if (index == 5) continue ;
    console.log(index); 
}


// • Task 9: Write a program to print numbers from 1 to IO, but stop the loop when the number is 7 using the break statement.

for (let index = 1; index <= 10; index++) {
    if (index == 7) break ;
    console.log(index); 
}