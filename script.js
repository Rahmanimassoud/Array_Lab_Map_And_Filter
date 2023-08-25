// // Task 0

let points = [12, 8, 17, 23, 15]

// // Our company does a special bonus and all users get double points. DO NOT MAKE A NEW ARRAY. Change the points array so everyone has double points.
// ============================================================================================
 points.forEach((element, index)=>{
    points[index] = element * 2
});
// console.log(points);


// Task 1:
let numbers = [25, 36, 49, 64, 81];

// Task: Square each number in the array and create a new array with the squared values.
// call this new array squaredNumbers

const squaredNumbers = numbers.map((e)=>{
    return e * e;
});
// console.log(squaredNumbers);

// ============================================================================================

// Task 2
let groupsOfPeople = [8, 15, 24, 31, 42];

// Task: We only want groups that are divisible by 3. Filter out numbers that are not divisible by 3 from the array, creating a new array called validGroups

// groupsOfPeople.filter((e)=>{
//     if(e % 3 === 0){
//         console.log(e, "is divisable by 3");
//     } else {
//         console.log(e, "is not divisable by 3");
//     }
// });

// ============================================================================================

// Task 3
let fruits = ['apple', 'banana', 'cherry', 'date'];

// Task: I want to see each fruit in the console with an ! after each fruit.

// fruits.forEach((e)=>{
//     console.log(e+= "!");
// });

// ============================================================================================

// Task 4
let animals = [ 'dog', 'elephant', 'cat', 'giraffe', 'rabbit' ];

// Task: We only want to show big animal names on our site - filter out animals with names shorter than 4 characters from the array, creating a new array called longNameAnimals

const longNameAnimals = animals.filter((e)=>{
    if(e.length < 4){
        return e;
    } else {
        return false;
    }
});
// console.log(longNameAnimals);
// ============================================================================================

// Task 5

let ages = [18, 25, 37, 12, 30];

// Task: I want to have the total of the ages in a variable that I can use many times. Create and update a variable to store the sum of the ages in the array.
let sum = 0;
ages.forEach((e)=>{
    sum = e += sum;
});
// console.log(sum);
// ============================================================================================

// Task 6

let myFruits = ['apple', 'banana', 'cherry', 'date'];

// I need an array that has the lengths of each fruit's coresponding fruit in the array. Create a new array called fruitLengths with the modified values.

const fruitLenght =  myFruits.map((e)=>{
    return e.length;
});
// console.log(fruitLenght);
// ============================================================================================