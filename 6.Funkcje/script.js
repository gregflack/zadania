//Zadanie 1
console.log("Zadanie 1");
function zad1() {
    console.log("Udało się!");
}
zad1();

//Zadanie 2
console.log("Zadanie 2");
function zad2(param) {
    console.log(param);
}
zad2("parameter");

//Zadanie 3
console.log("Zadanie 3");
var tab = [2, 3, 7];
function zad3(array) {
    return array;
}
console.log(zad3(tab));

//Zadanie 4
console.log("Zadanie 4");
function zad4(text) {
    let counter = 1;
    let writeInterval = setInterval(() => {
        console.log(text);
        counter++;
        if (counter == 6)
        {
            clearInterval(writeInterval);
            console.log("Koniec");
        }
    }, 3000);
}
zad4("testowy string");
