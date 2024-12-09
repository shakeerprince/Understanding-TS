function add(num1, num2, showResult, phrase) {
    // if(typeof num1 !== "number" && typeof num2 !== "number") {
    //     throw new Error('Incorrect input')
    //}
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return num1 + num2;
}
var num1 = 7;
var num2 = 34;
var printResult = true;
var resultPhrase = 'Result is ';
add(num1, num2, printResult, resultPhrase);
var Person = {
    name: "shaker",
    age: 30,
    hobbies: ['sports', 'Cooking'],
    role: [1, 'author']
};
console.log(Person.name);
var favoriteActivity;
favoriteActivity = ["string"];
console.log(favoriteActivity);
