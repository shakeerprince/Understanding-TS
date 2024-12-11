"use strict";
function adding(num1, num2, showResult, phrase) {
    // if(typeof num1 !== "number" && typeof num2 !== "number") {
    //     throw new Error('Incorrect input')
    //}
    const result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return num1 + num2;
}
let num1 = 7;
let num2 = 34;
let printResult = true;
const resultPhrase = 'Result is ';
adding(num1, num2, printResult, resultPhrase);
const Person = {
    name: "shaker",
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: [1, 'author']
};
console.log(Person.name);
let favoriteActivity;
favoriteActivity = ["string"];
console.log(favoriteActivity);
const a = true;
console.log(a);
console.log(typeof (a));
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("an Error occurred", 500);
console.log(result);
