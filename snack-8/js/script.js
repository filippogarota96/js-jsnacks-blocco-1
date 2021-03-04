
/*Chiedi un numero di 4 cifre all’utente e calcola la somma
di tutte le cifre che compongono il numero.*/

// chiedo un numero di 4 cifre

var userNumber = prompt('Inserisci un numero di 4 cifre');
var somma = 0;
for (var i = 0; i < userNumber.length; i++) {

  somma += parseInt(userNumber[i]);
}

console.log(somma);
