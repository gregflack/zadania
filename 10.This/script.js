//Zadanie 1
console.log("Zadanie 1");
var person = {
    name: "Greg",
    surname: "Smith",
    age: 26,
    country: "Polska",
    city: "Szczecin"
}

var person2 = {
    name: "Eva",
    surname: "Young",
    age: 46,
    country: "UK",
    city: "Londyn"
}

person.print = function() {
    console.log(`${this.name} ${this.surname} w wieku ${this.age} mieszka ${this.country},${this.city}`);
}
person.aging = function() {
    this.age++;
}
person2.print = function() {
    console.log(`${this.name} ${this.surname} w wieku ${this.age} mieszka ${this.country},${this.city}`);
}
person2.aging = function() {
    this.age++;
}
person.print();
person.aging();
person.aging();
person.print();

person2.print();
person2.aging();
person2.print();

//Zadanie 2
console.log("Zadanie 2");
person.dishes = [];
person2.dishes = [];
person.addDish = function (dish) {
    this.dishes.push(dish);
}
person2.addDish = function (dish) {
    this.dishes.push(dish);
}
person.printDishes = function () {
    console.log(this.dishes.join(", "));
}
person2.printDishes = function () {
    console.log(this.dishes.join(", "));
}
person.addDish("bigos");
person.addDish("carbonarra");
person2.addDish("pomidorowa");
person2.addDish("kapusniak");
person.printDishes();
person2.printDishes();

//Zadanie 3
console.log("Zadanie 3");

function Calculator() {
    this.numbers = function (a, b) {
        this.a = a;
        this.b = b;
    } 
    this.add = function () {
        console.log(`${this.a} + ${this.b} = ${this.a + this.b}`);
    }
    this.sub = function () {
        console.log(`${this.a} - ${this.b} = ${this.a - this.b}`);
    }
    this.multi = function () {
        console.log(`${this.a} * ${this.b} = ${this.a * this.b}`);
    }
    this.div = function () {
        if (this.b === 0) {
            console.error("Dzielenie przez 0!");
            return;
        }
        console.log(`${this.a} / ${this.b} = ${this.a / this.b}`);
    }
}

var cal = new Calculator();
cal.numbers(4,5);
cal.add();
cal.multi();
cal.numbers(5,0);
cal.div();

//Zadanie 4
console.log("Zadanie 4");

function Ladder(ledderHeight) {
    this.height = ledderHeight;
    this.currentStep = 0;
    this.goUp = () => {
        if (this.currentStep == this.height) {
            console.error("jesteś na samej gorze");
        }
        console.log("idziesz w gore");
        this.currentStep++;
    }
    this.goDown = () => {
        if (this.currentStep == 0) {
            console.error("jesteś na samym dole");
        }
        console.log("idziesz w dol");
        this.currentStep--;
    }
    this.currentHeight = () => {
        console.log(`jestes na ${this.currentStep} stopniu`);
    }
}

var drabina = new Ladder(4);
drabina.currentHeight();
drabina.goDown();
drabina.goUp();
drabina.goUp();
drabina.goUp();
drabina.currentHeight();
drabina.goDown();
drabina.currentHeight();
drabina.goUp();
drabina.goUp();
drabina.currentHeight();
drabina.goUp();
drabina.currentHeight();
drabina.goUp();