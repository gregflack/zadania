//Zadanie 1
console.log("Zadanie 1");
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;
}
Person.prototype.setAge = function (age) {
    this.age = age;
}
Person.prototype.setCity = function (city) {
    this.city = city;
}
var person = new Person("Greg", "Smith", 25, "Poland", "Krakow", "Polish");
console.log(person);
person.setAge(26);
person.setCity("Wieliczka");
console.log(person);

person = new Person("Pat", "Smith", 33, "USA", "NY", "English");
console.log(person);
person.setAge(45);
person.setCity("Detriot");
console.log(person);

person = new Person("Anna", "Lang", 46, "Poland", "Warszawa", "Polish");
console.log(person);
person.setAge(62);
person.setCity("Katowice");
console.log(person);

person = new Person("Pit", "Carpenter", 43, "Poland", "Gdansk", "Polish");
console.log(person);
person.setAge(77);
person.setCity("Wroclaw");
console.log(person);

person = new Person("Eva", "Young", 28, "UK", "Cardif", "English");
console.log(person);
person.setAge(33);
person.setCity("Londyn");
console.log(person);

//Zadanie 2
console.log("Zadanie 2");

function Calculator() {
    this.memory = [];
    this.add = function (a, b) {
        this.memory.push(`${a} + ${b} = ${a + b}`);
        console.log(a + b);
    }
    this.substract = function (a, b) {
        this.memory.push(`${a} - ${b} = ${a - b}`);
        console.log(a - b);
    }
    this.multiply = function (a, b) {
        this.memory.push(`${a} * ${b} = ${a * b}`);
        console.log(a * b);
    }
    this.divide = function (a, b) {
        this.memory.push(`${a} / ${b} = ${a / b}`);
        console.log(a / b);
    }
    this.printMemory = function () {
        console.log(this.memory.join(", "));
    }
    this.cleanMemory = function () {
        this.memory = [];
    }
}

var cal1 = new Calculator();
var cal2 = new Calculator();
cal1.add(1, 4);
cal1.multiply(3,5);
cal2.divide(4,3);
cal1.substract(5, 3);
cal1.printMemory();
cal2.printMemory();
cal1.cleanMemory();
cal1.printMemory();


//Zadanie 3
console.log("Zadanie 3");
var interval;
var checkInterval;
function Game() {
    this.startGame = function() {
        interval = setInterval(() => {
            commonNum = Math.random() * 9 + 1;
            console.log(commonNum);
        },1000)
    }
    this.stop = function() {
        checkInterval = setInterval(() => {
            if (commonNum > 5) {
                clearInterval(interval);
                clearInterval(checkInterval);
                console.log("Koniec");
            }
        }, 1000)
    }
}
Game.prototype.commonNum = 0;
var game1 = new Game();
var game2 = new Game();
game1.startGame();
game2.stop();

