
function add(num1 :  number, num2: number  ){
    if(typeof num1 !== "number" && typeof num2 !== "number") {
        throw new Error('Incorrect input')
    }
    return num1 + num2;
}

let num1 = 7
let num2 = 34
let printResult = true



