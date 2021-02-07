//Zadanie 1
console.log("Zadanie 1");
var boolValue1 = true;
var boolValue2 = false;
console.log(boolValue1 == boolValue2);
console.log(boolValue1 === boolValue2);
console.log(boolValue1 != boolValue2);

//Zadanie 2
console.log("Zadanie 2");
var numericValue1 = 17;
var numericValue2 = 5;
var moduloResult = 0;
console.log("result: " + (moduloResult = numericValue1 % numericValue2));

//Zadanie 3
console.log("Zadanie 3");
let stringOne = "pierwszy ";
let stringTwo = "drugi";
let stringsResult = "";
console.log("concat: " + (stringsResult = stringOne.concat(stringTwo)));
stringsResult = "";
console.log("adding: " + (stringsResult = stringOne + stringTwo));

//Zadanie 4
console.log("Zadanie 4");
var someNumber = 425;
var someString = "425";
console.log("==: " + (someNumber == someString));//true
console.log("===: " + (someNumber === someString));//false
// operator == porównuje wartości
// operator === porównuje wartość i typ

//Zadanie 5
console.log("Zadanie 5");
var counter = 30;
console.log("counter: " + counter);
counter++;
console.log("counter after incrementing: " + counter);
counter--;
console.log("counter after decrementing: " + counter);

//Zadanie  6
console.log("Zadanie 6");
var numValue1 = 3;
var numValue2 = 4;
var result = null;
result = numValue1 < numValue2;
console.log("Result: " + result);
