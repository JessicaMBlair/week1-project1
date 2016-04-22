//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log("Log your name to the console (as a string)");
console.log("Jessica Blair");

//2. Declare a variable called 'name', and then log it to the console.
console.log("Declare a variable called 'name', and then log it to the console");
var name = "Jessica";
console.log(name);


//3. Declare two variables with number values. 
//   Add, subtract, multiply and divide them.
console.log("Declare two variables with number values.  Add, subtract, multiply and divide them.");

var firstNum = 1;
var secondNum = 2;

console.log(firstNum + secondNum);
console.log(firstNum - secondNum);
console.log(firstNum * secondNum);
console.log(firstNum / secondNum);



//4. Declare two variables with string values. 
//   Create a third variable that concatenates them.

console.log("Declare two variables with string values. Create a third variable that concatenates them.");

var firstWord = "Sunny";
var secondWord = "Day";
var combinedWords = firstWord + secondWord;

console.log(combinedWords);

//5. Add, subract, multiply and divide the strings '5' and '3'. 
//   Observe the results and know how to explain the results if asked.

console.log("Add, subract, multiply and divide the strings '5' and '3'. Observe the results and know how to explain the results if asked.");

var a = '5';
var b = '3';

var ab = a + b;

console.log(ab);


//6. Create a prompt that asks a user to pick a number. 
//   Then double the answer.

console.log("Create a prompt that asks a user to pick a number. Then double the answer.");
var user = prompt("Please enter a number");

console.log(user * 2);


//7. Create a custom alert.

console.log("Create a custom alert.");
window.alert("BLAA BLEE BLOO");



//8. Declare three variables called length, width and height. 
//   Calculate area and volume.

console.log("Declare three variables called length, width and height. Calculate area and volume.");
var length = 3;
var width = 6;
var height = 10;

console.log(height * width);
console.log(length * width * height);


//9. Ask for a user's name, age and city. 
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."

console.log("Ask for a user's name, age and city. In a single command display/log the sentence: My name is...I'm....years old, and I live in.....");

var name = prompt("What is your name?");
var age = prompt("How old are you?");
var town = prompt("What town do you live in?");

console.log("My name is " + name + " I'm " + age + " years old, and I live in " + town);



//10. Create an alert that uses the response from a prompt.

console.log("Create an alert that uses the response from a prompt.");

var sign = prompt("How old are you?");
alert("You are " + age + " years old! Congrats");


// 10. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
// 11???

var rec1 = 2;
var rec2 = 3;
var rectangle = rec1 * rec2;

console.log(rec1 * rec2);
console.log(rectangle);
