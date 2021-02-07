//Zadanie 1
console.log("Zadanie 1");
var buz = document.querySelector("#buz");
var baz = document.querySelector("#baz");
var foo = document.querySelector("#foo");

console.log(`1. Rodzic elementu id="buz"`);
console.log(buz.parentElement);

console.log(`2. Brat elementu id="baz"`);
console.log(baz.previousElementSibling);

console.log(`3. Dzieci elementu id="foo"`);
console.log(foo.children);

console.log(`4. rodzic elementu id"foo"`);
console.log(foo.parentNode);

console.log(`5. pierwsze dziecko elementu id="foo"`);
console.log(foo.firstElementChild);

console.log(`6. środkowe dziecko elementu id="foo"`);
console.log(foo.children[Math.floor(foo.children.length / 2)]);

//Zadanie 2
console.log("Zadanie 2");
var pageElement = document.getElementById("ex2")
function printDivTestEvent(element) {
    element.addEventListener('click', e => {
        console.log(element.textContent)
    })
}
printDivTestEvent(pageElement);

//Zadanie 3
console.log("Zadanie 3");
function hideUnhide(){
    const root = document.getElementById('ex3');
    const buttons = root.querySelectorAll('button');
    
    buttons.forEach(key => {
        key.addEventListener('click', e => {
            if(key.nextElementSibling.style.display === 'none'){
                key.nextElementSibling.style.display='block';
            }else {
                key.nextElementSibling.style.display='none';
            }
            
        })
    })
}
hideUnhide();

//Zadanie 4
console.log("Zadanie 4");
const ex3Buttons = document.querySelectorAll('#ex3 button');

ex3Buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const parentElement = event.target.parentElement;
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        parentElement.style.backgroundColor = randomColor;
    })
})

//Zadanie 5
console.log("Zadanie 5");
var elementsToHover = document.querySelectorAll("div#ex5 div");

var listElements = document.querySelectorAll("div#ex5 li");

var listElement = document.querySelector("div#ex5 ul");
//1. Tylko pierwszy element listy
function onlyFirst() {
    for(var i = 0; i < elementsToHover.length; i++){
        elementsToHover[i].addEventListener('mouseover', function(){
            var color = this.style.backgroundColor;
            listElements[0].style.backgroundColor = color;
        })
    }
}
//onlyFirst();

//2. tylko ostatni element listy
function onlyLast() {
    for(var i = 0; i < elementsToHover.length; i++){
        elementsToHover[i].addEventListener('mouseover', function(){
            var color = this.style.backgroundColor;
            listElements[listElements.length - 1].style.backgroundColor = color;
        })
    }
}
//onlyLast();

//3. Parzyste elementy listy
function onlyEven() {
    for(var i = 0; i < elementsToHover.length; i++){
        elementsToHover[i].addEventListener('mouseover', function(){
            var color = this.style.backgroundColor;
            for(var j = 0; j < listElements.length; j++) {
                if((j + 1) % 2 == 0) {
                    listElements[j].style.backgroundColor = color;
                }
            }
        })
    }
}
//onlyEven();

//4. Wszystkie elementy listy
function allElements() {
    for(var i = 0; i < elementsToHover.length; i++){
        elementsToHover[i].addEventListener('mouseover', function(){
            var color = this.style.backgroundColor;
            listElements.forEach(element => {
                element.style.backgroundColor = color
            })
        })
    }
}
//allElements();

//5. Żaden z elementów - tylko cała lista
function wholeList() {
    for(var i = 0; i < elementsToHover.length; i++){
        elementsToHover[i].addEventListener('mouseover', function(){
            var color = this.style.backgroundColor;
            listElement.style.backgroundColor = color;
        })
    }
}
wholeList();

//Zadanie 6
console.log("Zadanie 6");

var parent = document.querySelector("div#ex6");

console.log(`1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko`);
var cw1 = parent.firstElementChild.firstElementChild.firstElementChild;
console.log(cw1);

console.log(`2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic`);
var cw2 = parent.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parent;
console.log(cw2);

console.log(`3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko`);
var cw3 = parent.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild;
console.log(cw3);