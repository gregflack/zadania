//Zadanie 1
console.log("Zadanie 1");
var car = new Object();
car.mark = "Ford";
car.model = "F150";
car.manufacturer = "USA";
console.log(`${car.mark}, ${car.model} z ${car.manufacturer}`);

//Zadanie 2
console.log("Zadanie 2");
var carTwo = {
    mark: "Ford",
    model: "F150",
    manufacturer: "USA",
    setModel: function (model) {
        this.model = model;
    }
}
console.log(`przed modyfikacja: ${carTwo.mark}, ${carTwo.model} z ${carTwo.manufacturer}`);
carTwo.setModel("Focus");
console.log(`po modyfikacji: ${carTwo.mark}, ${carTwo.model} z ${carTwo.manufacturer}`);

//Zadanie 3
console.log("Zadanie 3");
var summator = {
    sum: 0,
    sumElements: function (table) {
        table.forEach(element => {
            this.sum += element;
        });
    }
}
var table = [1, 2, 3, 4];
summator.sumElements(table);
console.log("suma: " + summator.sum);

//Zadanie 4
console.log("Zadanie 4");
var carBMW = {
    name: "BMW",
    age: 22,
    model: "850cxi"
}
for (const [key, value] of Object.entries(carBMW)) {
    console.log(`${key}: ${value}`);
};

//Zadanie 5
console.log("Zadanie 5");
var car = {
    name: "BMW",
    age: 22,
    model: "850cxi",
    engine: {
        power: 500,
        momentum: 450,
    }
}
console.log(`Silnik moc: ${car.engine.power}HP, moment: ${car.engine.momentum}Nm`);

//Zadanie 6
console.log("Zadanie 6");
car.year = 1999;
car.greet = function () {
    console.log("Hello");
}
car.greet();
