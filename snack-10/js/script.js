/*Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo*/


var numero = parseInt(prompt('Inserisci un numero'));

if (isNaN(numero)) {
  console.log('Attento! Inserisci un numero');
}

if (numero % 2 == 0) {
  console.log(numero);
}

if (numero % 2 == 1) {
  console.log(numero % 2 == 0);
}
