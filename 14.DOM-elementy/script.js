//Zadanie 1
console.log("Zadanie 1");

var divs = document.querySelectorAll('.more-divs');

function listOfDivs(arrayParam) {
    let newArray = [];
    
    for (let i = 0; i < arrayParam.length; i++) {
        newArray.push(arrayParam[i].tagName);
    }
    return newArray;
}

console.log(listOfDivs(divs));

//Zadanie 2
console.log("Zadanie 2");

function consoleListing(param){
    //1. Kod html wewnętrzny
    console.log(param.innerHTML);
    //2. kod html zewnętrzy
    console.log(param.outerHTML);
    //3. listę klass elementu w postaci stringu
    console.log(param.className);
    //4. listę klass elementu w postaci tablicy
    console.log([...param.classList]);
    //5. obiekt dataset
    console.log(param.dataset);
}
consoleListing(document.querySelector(".short-list"));

//Zadanie 3
console.log("Zadanie 3");

const numbersDataset = document.getElementById('datasetCheck');
const addSub = takeNumbers => {
    const firstNumber = parseInt(takeNumbers.dataset.numberOne)
    const secondNumber = parseInt(takeNumbers.dataset.numberTwo)
    const thirdNumber = parseInt(takeNumbers.dataset.numberThree)
    let adding = firstNumber + secondNumber + thirdNumber
    let substraction = firstNumber - secondNumber - thirdNumber;
    return [adding, substraction];
}
console.log(addSub(numbersDataset));

//Zadanie 4
console.log("Zadanie 4");

document.querySelector("#spanText").innerHTML = "cokolwiek"

//Zadanie 5
console.log("Zadanie 5");

document.querySelector("#spanText").className = "someclass";

//Zadanie 6
console.log("Zadanie 6");

var element = document.getElementById("classes");
var list = element.classList;

var concat = [];
for (let i = 0; i< list.length; i++)
    {
        concat.push(list[i]);
        console.log(list[i]);
    }
console.log(concat.join('+'));
element.className = ''

//Zadanie 7
console.log("Zadanie 7");

var list = document.querySelectorAll('#longList > li')

function addAttributes(elements) {
    elements.forEach( element => {
        if(!element.getAttribute("data-text")){
            element.dataset.text = "text";
        }
    })
}
var result = addAttributes(list);

//Zadanie 8
console.log("Zadanie 8");

function stringFun(className) {
    let obj = {newClass: className};
    obiectFun(obj);
}

function obiectFun(obj) {
    let zmienna = obj.newClass;
    document.getElementById('myDiv').className = zmienna;
}

stringFun('string_z_parametru');

//Zadanie 9
console.log("Zadanie 9");

function addClass(param){
    param = parseInt(param);
    var numbers = document.querySelector("#numbers");
    if(param % 2 === 0){
        numbers.className = "even";
    } else {
        numbers.className = "odd";
    }
}
