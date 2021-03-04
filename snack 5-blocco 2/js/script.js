/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.*/

/*creo i due array*/

var firstArray = [3, 5, 6];
var secondArray = [12, 43, 16, 67, 93];

do {
  if (firstArray.length < secondArray.length) {
    fisrtArray.push(Math.floor(Math.random() * 100));
  }
} while(firstArray.length == secondArray.length);

console.log(fisrtArray);
