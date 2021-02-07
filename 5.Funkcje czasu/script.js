//Zadanie 1
console.log("Zadanie 1");
var counter = 1;
let hiIntervaled = setInterval(() => {
    console.log("Cześć poraz " + counter);
    counter++;
    if (counter === 16) {
        clearInterval(hiIntervaled);
        zadanie2();
    }
}, 3000);

//Zadanie 2
function zadanie2() {
    var array = [3, 4, 5];
    console.log("Zadanie 2");
    setTimeout(() => {
        console.log(array);
    }, 2000);
    counter = 0;
    let arrayInterval = setInterval(() => {
        console.log(array[counter]);
        counter++;
        if (counter == array.length)
        {
            clearInterval(arrayInterval);
        }
    }, 3000)
}
