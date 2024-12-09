function add(num1, num2) {
    if (typeof num1 !== "number" && typeof num2 !== "number") {
        throw new Error('Incorrect input');
    }
    return num1 + num2;
}
var num1 = 7;
var num2 = '34';
console.log(add(num1, num2));
console.log(typeof num2);
