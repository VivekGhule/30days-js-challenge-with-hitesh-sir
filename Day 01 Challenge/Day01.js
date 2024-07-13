
// Activity 1: 

// TASK 1

var num = 777;
console.log(num);

// TASK 2

let name = "Vivek";
console.log(name);



// Activity 2: 

// Task 3
const isFriends = true;
console.log(isFriends);

// Activity 3: 

// Task 4

const luckChamp = 777;
const Country= "India"
const isPracrice = true
const data ={
    name:"Vivek",
    age:85,
    profession:"Student",
}

const arr =[1,2,3,4,5,"Chai"]

console.log(typeof luckChamp)
console.log(typeof Country)
console.log(typeof isPracrice)
console.log(typeof data)
console.log(typeof arr)

// Activity 4: 

             // Task 5
    let task5 = 776;
    console.log(task5);

    task5 = 777;
    console.log(task5);
   


// Activity 5:

    // Task 6

    const check = "Demo";
    console.log(check);

    // check ="Demo2"
    // console.log(check);

    // output : Assignment to constant variable.  we can not reassigning value with const declared variable




    // Feature Request :

let numberVar = 100;
let stringVar = "JavaScript";
let booleanVar = true;
let objectVar = { name: "Alice", age: 25 };
let arrayVar = [1, 2, 3, 4, 5];
let undefinedVar;
let nullVar = null;

// Log the value and type of each variable
console.log(`Value: ${numberVar}, Type: ${typeof numberVar}`);
console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);
console.log(`Value: ${booleanVar}, Type: ${typeof booleanVar}`);
console.log(`Value: ${objectVar}, Type: ${typeof objectVar}`); 
console.log(`Value: ${arrayVar}, Type: ${typeof arrayVar}`);
console.log(`Value: ${undefinedVar}, Type: ${typeof undefinedVar}`);
console.log(`Value: ${nullVar}, Type: ${typeof nullVar}`);




    // feature Request 2nd


let myLetVar = "Initial let value";
console.log(myLetVar); 


myLetVar = "Reassigned let value";
console.log(myLetVar); 


const myConstVar = "Initial const value";
console.log(myConstVar); 

//With error handling 

try {
    myConstVar = "Reassigned const value";
} catch (error) {
    console.error("Error:", error.message); 
}
