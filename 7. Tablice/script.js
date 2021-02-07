//Zadanie 1
console.log("Zadanie 1");

var tablica = ["test", 3, "text", 5, 7, 10, "ostatni"];
tablica.forEach(element => {
    console.log(element);
});

//Zadanie 2
console.log("Zadanie 2");
console.log("1. pierwszy element: " + tablica[0] + ", drugi: " + tablica[1]);
console.log("2. ostatni element: " + tablica[tablica.length-1]);
console.log("3. wszystkie elementy:");
tablica.forEach(element => {
    console.log(element);
});
console.log("4. co drugi element:");
for(let i = 0; i < tablica.length; i++) {
    if ((i + 1 ) % 2 == 0) {
        console.log(tablica[i]);
    }
}
console.log("5. wszystkie stringi:");
tablica.forEach(element => {
    if (typeof element == "string") {
        console.log(element);
    }
});
console.log("6. Wszystkie numbery;");
tablica.forEach(element => {
    if (typeof element == "number") {
        console.log(element);
    }
});

//Zadanie 3
console.log("Zadanie 3");
var numbersTable = [3, 5, 8, 21, 6, 12];
var sum = 0;
var sub = 0;
var even = [];
var odd = [];
var max = null;
var min = null;
numbersTable.forEach(element => {
    sum += element;
    sub -= element;
    if (element % 2 == 0) {
        even.push(element);
    } else {
        odd.push(element);
    }
    if (max == null) {
        max = element;
        min = element;
    }
    if (max < element) {
        max = element;
    }
    if (min > element) {
        min = element;
    }
})
console.log("1. suma elementów: " + sum);
console.log("2. roznica elementów: " + sub);
console.log("3. średnia elementów: " + sum/numbersTable.length);
console.log("4. parzyste elementy: " + even);
console.log("5. nieparzyste elementy: " + odd);
console.log("6. najwiekszy element: " + max);
console.log("7. najmiejszy element: " + min);
console.log("8. tablica od tylu: ");
for (let i = numbersTable.length - 1; i >= 0; i--) {
    console.log(numbersTable[i]);
}

//Zadanie 4
console.log("Zadanie 4");
function summary(numTab) {
    let sum = 0;
    numTab.forEach(element => sum += element);
    return sum;
}
console.log("suma elementów: " + summary(numbersTable));

//Zadanie 5
console.log("Zadanie 5");
function numberFun(numTab) {
    let sum = 0;
    numTab.forEach(element => sum += element);
    numTab.forEach(element => console.log(element * sum / numTab.length));
}
numberFun(numbersTable);

//Zadanie 6
console.log("Zadanie 6");
function avarageEven(numTab) {
    let sumEven = 0;
    let counter = 0
    numTab.forEach(element => {
        if (element % 2 == 0) {
            sumEven += element;
            counter++;
        }
    });
    return sumEven/counter;
}
console.log("srednia parzystych elementow: " + avarageEven(numbersTable));

//Zadanie 7
console.log("Zadanie 7");
function sortTab(numTab) {
    function sortNums(num1, num2) {
        return num1 - num2;
    }
    numTab.sort(sortNums);
    numTab.forEach(element => console.log(element));
}
sortTab(numbersTable);

//Zadanie 8
console.log("Zadanie 8");
function addTables(table1, table2) {
    table2.forEach(element => table1.push(element))
    return table1;
}
console.log("dodane tablice: " + addTables(numbersTable, numbersTable));

//Zadanie 9
console.log("Zadanie 9");
var nums = [-1, 2, 4, -5, 4, -8];
console.log("bazowa tablica: " + nums);
function reversNums(nums) {
    let reversed = [];
    nums.forEach(element => reversed.push(-element));
    return reversed;
}
console.log("odwrocone znaki: " + reversNums(nums));
