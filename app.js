/*

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

//never type

function generateError(message: string, code: number): never{
    throw {message: message, errorCode: code}
}

const result = generateError("an Error occurred", 500);

console.log(result);


const addNum = (a: number, b: number) =>{
    return a + b ;
}

console.log(addNum(1,2));


const hobbies = ['sports', 'cooking']
const addHobbies = ['hiking']

addHobbies.push(...hobbies);

console.log(addHobbies);



enum Weather{
    sunny = "sun",
    rainy = "rain",
    windy = "wind",
    monsoon = "fall",
}

const currentWeather = Weather
console.log(currentWeather);



class  Person {
  public  name : string;
  private  age : number;
  protected gender : string;
    constructor(name : string, age : number, gender : string){
        this.name  = name;
        this.age = age;
        this.gender = gender;
    }

    getName(){
        return `${this.name} ${this.age}`;
    }
}

class Human extends Person{
    constructor(name : string, age : number, gender : string){
       super(name, age, gender);
    }
}


const person = new Person("john", 20)
console.log(person);
console.log(person.getName());



interface Computer{
    name: string;
    ram:number;
    brand : string

}

const computerExample :  Computer = {
    name : "Dell",
    ram : 8,
    brand : "Intel"
}
console.log(computerExample);
console.log(computerExample.name);
console.log(computerExample.ram);
console.log(computerExample.brand);



interface MathOperator {
    (x : number, y: number): number
}

const add: MathOperator = (a, b) => a + b;
const subtract: MathOperator = (a,b) => a - b
console.log(add(2,2));
console.log(subtract(2,2));



interface Song {
    songName: string;
    singerName: string;
    printSongInfo (songName: string, singerName: string) : string
}


const song1: Song = {
    songName: "Baby",
    singerName: "justin",
    printSongInfo: (songName, singerName) =>{
        return `Song: ${songName} Singer: ${singerName}`
    }
}

console.log(song1.printSongInfo("Baby Baby", "justin"));



interface movieDetails{
    name: string;
    rating: number;
    printMovieInfo(name: string, price: number, rating: number): string | number
}

interface movieGenre extends movieDetails{
    genre: string
}


const movie1: movieGenre = {
    name: "Avengers",
    rating : 8.0,
    genre: "Action",
    printMovieInfo(
        name: string,
        price: number,
        rating: number
    ): string | number {
        return ` Movie name: ${name} Price: ${price} Rating: ${rating}`
    }
}

const res = movie1.printMovieInfo("John Wick", 100, 8)
console.log(res);



// interface with implement

interface Hello {
    greeting(): void,
    goodbye(): void
}

class hi implements Hello {

    greeting(): void {
        console.log('Hey');
        
    }
    goodbye(): void {
        console.log('Bye Bye ');
        
        }
}


let greet = new hi();
greet.greeting();
greet.goodbye();



//Generics

// function printNumber(item: number, defaultValue: number):[number, number] {
//     return [ item, defaultValue]
// }

// const num = printNumber(1,2)
// console.log(num);

function uniqueDataTypesFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

const result = uniqueDataTypesFunc<number>(10,20)

console.log(result);




function filterArray<T>(array: T[], condition: (item: T)=> boolean): T[]{
    return array.filter((item) => condition(item));
}

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = filterArray<number>(numberArray , (num) => num % 2 == 0)
console.log(evenNumbers);


const stringArr = ['apple', 'orange', 'water melon','kivi']

const shortWords = filterArray<string>(stringArr , (word)=> word.length > 5);

console.log(shortWords);

 */
var Box = /** @class */ (function () {
    function Box(initialContent) {
        this.content = initialContent;
    }
    Box.prototype.getContent = function () {
        return this.content;
    };
    Box.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    return Box;
}());
var stringBox = new Box("Hello, TypeScript");
console.log(stringBox.getContent());
