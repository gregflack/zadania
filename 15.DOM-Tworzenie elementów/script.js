//Zadadnie 1
var newElement = document.createElement("div");
newElement.appendChild(document.createTextNode("To jest nowy element"));
var root = document.getElementById("root");
root.appendChild(newElement);
//Zadadnie 2
var owoce = ["banan", "pomaranca", "cytryna", "limonka"];
function arrayToElement(array) {
    let list = document.createElement("ul");
    array.forEach(element => {
        let el = document.createElement("li");
        el.appendChild(document.createTextNode(element));
        list.appendChild(el);
    });
    return list;
}
root.appendChild(arrayToElement(owoce));
//Zadanie3
var elementToDelete = document.querySelector("ul > li:nth-child(2)");
elementToDelete.remove();
//Zadanie4
function addButton() {
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Remove itself"));
    button.setAttribute("onclick", "this.remove();");
    return button;
}
root.appendChild(addButton());

