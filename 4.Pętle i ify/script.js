//Zadanie 1
console.log("Zadanie 1");

var numericValue1 = 3;
var numericValue2 = 7;
if (numericValue1 > numericValue2) {
    console.log(`${numericValue1} is greater than ${numericValue2}`);
} else {
    console.log(`${numericValue2} is greater than ${numericValue1}`);
}

//Zadanie 2
console.log("Zadanie 2");
var numericValue3 = 4;
if (numericValue1 > numericValue2 && numericValue1 > numericValue3) {
    console.log(`${numericValue1} is the greatest number`);
} else if (numericValue2 > numericValue1 && numericValue2 > numericValue3) {
    console.log(`${numericValue2} is the greatest number`);
} else {
    console.log(`${numericValue3} is the greatest number`);
}

//Zadanie 3
console.log("Zadanie 3");
for (let i = 1; i <= 10; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
console.log("Zadanie 4");
var result = 0;
for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log("Result: " + result);

//Zadanie 5
console.log("Zadanie 5");
var n = 5;
for (let i = 0; i <= n; i++) {
    if ( i % 2 == 0) {
        console.log(`${i} - parzysta`);
        continue;
    }
    console.log(`${i} - nieparzysta`);
}

//Zadanie 6
console.log("Zadanie 6");

for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 5; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7
console.log("Zadanie 7");
var result = [];
for (let i = 0; i <= 100; i++) {
    if (i == 0) {
        result.push(i);
        continue;
    }
    if (i % 15 == 0) {
        result.push("FizzBuzz");
        continue;
    }
    if (i % 3 == 0) {
        result.push("Fizz");
        continue;
    }
    if (i % 5 == 0) {
        result.push("Buzz");
        continue;
    }
    result.push(i);
}
console.log(result.join(" "));

//Zadanie 8
console.log("Zadanie 8");
console.log("a)");
var result = "";
for (let i = 1; i <= 5; i++) {
    result += "*";
    console.log(result);
}
console.log("b)");
var result = "";
for (let i = 1; i <= 5; i++) {
    result = "";
    for (let j = 5 - i; j > 0; j--) {
        result += " ";
    }
    for (let k = 0; k < i; k++) {
        result += "* ";
    }
    console.log(result);
}

console.log("c)");
var result = "";
for (let i = 1; i <= 5; i++) {
    result = "";
    for (let j = 5 - i; j > 0; j--) {
        result += " ";
    }
    for (let k = 0; k < i; k++) {
        result += "*";
    }
    for (let k = 0; k < i-1; k++) {
        result += "*";
    }
    console.log(result);
}

console.log("d)");
for (let i = 1; i <= 5; i++) {
    result = "";
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    for (let j = i; j <= 4; j++) {
        result += j;
    }
    console.log(result);
}
console.log("-----");
for (let i = 1; i <= 5; i++) {
    result = "";
    for (let j = i; j <= 5; j++) {
        result += "*";
    }
    for (let j = 5-i; j < 4; j++) {
        result += j + 1;
    }
    console.log(result);
}

console.log("d)");
var result = "";
for (let i = 1; i <= 5; i++) {
    result = "";
    for (let j = 5 - i; j > 0; j--) {
        result += " ";
    }
    for (let k = 0; k < i; k++) {
        result += "* ";
    }
    console.log(result);
}
var result = "";
for (let i = 1; i <= 3; i++) {
    result += "    *\n";
}
console.log(result);