
function adding(num1 :  number, num2: number, showResult : boolean,  phrase: string  ){
    // if(typeof num1 !== "number" && typeof num2 !== "number") {
    //     throw new Error('Incorrect input')
    //}
    const result = num1 + num2
    if(showResult){
        console.log(phrase + result)
    }else{
        return result;
    }
    return num1 + num2;
}

let num1 = 7
let num2 = 34
let printResult = true
const resultPhrase = 'Result is '


adding(num1, num2, printResult, resultPhrase)


const Person :{
    name : string;
    age : number;
    hobbies: string[];
    role: [number, string];

} 
 = {
    name : "shaker",
    age : 30,
    hobbies: ['sports', 'Cooking'],
    role: [1, 'author']

}

console.log(Person.name);

let favoriteActivity : string[];
favoriteActivity = ["string"]
console.log(favoriteActivity);


const a : number | string | boolean =  true

console.log(a);

console.log(typeof(a));

type Combinable = number;