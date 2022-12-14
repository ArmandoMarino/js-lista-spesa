console.log("JS OK");

// TRACCIA
// Data una lista della spesa (inventatela), 
// stampare in pagina gli elementi della lista individualmente
//  con un ciclo while.  (anche brutalmente, basta che si vedano)

// ELEMENTI DAL DOM
let result = document.getElementById ("result");
console.log(result);

const shoppingList = ["Mela", "Arancia", "Uova", "Computer"];
console.log(shoppingList);

// VARIABILE D'APPOGGIO
let myList = "";
// CICLO FINCHE'
let i = 0;
while (i < shoppingList.length){
    console.log(shoppingList[i]);
    myList += `<li>${shoppingList[i]}</li>`;
    i++;
}

result.innerHTML = myList;