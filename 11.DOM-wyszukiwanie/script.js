//Zadanie 1
console.log("Zadanie 1");
var listElements = document.getElementsByClassName("list");
console.log(listElements);

//Zadanie 2
console.log("Zadanie 2");

var getByTag = (tag) => {
    return document.getElementsByTagName(tag);
}
console.log(getByTag("button"));

//Zadanie 3
console.log("Zadanie 3");
var element = document.getElementById("list");
console.log(element);

//Zadanie 4
console.log("Zadanie 4");
function printElements(elementList) {
    for (let i = 0; i < elementList.length; i++) {
        console.log(elementList[i]);
    }
}

console.log("1. wszystkie elementy li na stronie");
printElements(getByTag("li"));

console.log("2. wszystkie elementy ul na stronie");
printElements(getByTag("ul"));

console.log("3. wszystkie spany na stronie");
printElements(getByTag("span"))

console.log("4. wszystkie spany znajdujące się w elemencie div z klasą list");
printElements(document.querySelectorAll("div.list span"));

console.log(`5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"`);
printElements(document.querySelectorAll("div#spans span"))