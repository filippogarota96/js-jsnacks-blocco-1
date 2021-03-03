/*Stampa il cubo dei primi N numeri, dove N è un numero
indicato dall’utente.*/

var number = parseInt(prompt("Numero utente:"));

for (var i = 0; i <= number; i++) {
  console.log(Math.pow(i, 3));
}
