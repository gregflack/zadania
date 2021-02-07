//Zadanie 1
console.log("Zadanie 1");

//1. Kliknięcie w przycisk o id="test-event"
var btn = document.querySelector('#test-event');
btn.addEventListener("click", function (event) {
  console.log(event.type);
});

//2. Ruch myszką na ekranie
addEventListener("mousemove", function (event){
    console.log(event.type);
});

//3. Najechanie myszką na przycisk o id="test-event"
btn.addEventListener("mouseover", function (event) {
  console.log(event.type);
});

//4. naciśnięcie klawisza na klawiaturze
addEventListener("keypress", function (event){
  console.log(event.type);
});

//5. scrollowanie strony w dół i w górę
addEventListener("scroll", function (event){
  console.log(event.type);
});

//6. zmianę tekstu w input id="input-test"
document.querySelector('#input-test').addEventListener("change", function (event){
  console.log(event.type);
});

//Zadanie 2
console.log("Zadanie 2");

function clickButton() {
    var buttonEx2 = document.getElementById('ex2')
    buttonEx2.addEventListener('click', event => {
        let dataText = event.target.dataset.text;
        let belowElement = event.target.nextElementSibling;
        belowElement.innerText = dataText
    })
}
clickButton();

//Zadanie 3
console.log("Zadanie 3");
function switchColor() {
    var element = document.getElementById('ex3');

    element.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'blue';
    });

    element.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = 'red';
    });
}
switchColor();

//Zadanie 4
console.log("Zadanie 4");

var inputError = document.querySelector('#ex3-err');
var input = document.querySelector('#input-test');
input.addEventListener('keyup', event => {
	const reg = /[0-9]/gm;
	var checkIfNumber = event.target.value.match(reg);
	if (checkIfNumber !== null) {
		inputError.innerText = 'You cannot enter numbers here';
	} else {
		inputError.innerText = '';
	}
});

//Zadanie 5
console.log("Zadanie 5");
var divEx5 = document.getElementById('ex5');
var buttonEx5 = document.getElementById('ex5-button');
var numberOfClick = 0

function counting() {
    numberOfClick++
    if(numberOfClick ==  10) {
        buttonEx5.removeEventListener('click', counting)
    }
    else {
        divEx5.innerHTML = numberOfClick
    }
}

buttonEx5.addEventListener('click', counting);

//Zadanie 6
console.log("Zadanie 6");

function scrollWatch() {
    document.addEventListener('scroll', event => {
        var current = window.scrollY;
        var body = document.querySelector('body');
        if (current > 200) {
            body.style.backgroundColor = 'red';
        } else {
            body.style.backgroundColor = 'white';
        }
    }); 
}

scrollWatch();

//Zadanie 6
console.log("Zadanie 6");
var input = document.querySelector("div#calculator > input");
var buttons = document.querySelectorAll("div#calculator button");
var number1 = 0;
var number2 = 0;

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        if(this.innerText === '+'){
            input.value = number1 + number2;
            number1 = 0;
            number2 = 0;
        } else if(this.innerText === '-'){
            
        } else if(this.innerText === '*'){
            
        } else if(this.innerText === '/'){
            
        } else {
            if(number1 === 0){
                input.value = '';
                number1 = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
        }
        
    })
}
