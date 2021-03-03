// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.


// creo un array

var numeri = [];

for (i = 0; i <= 6 ; i++) {
  var numeroUtente = parseInt(prompt('Inserisci numero'));
  if (numeroUtente % 2 == 1) {
    numeri.push(numeroUtente);
  }
}

console.log(numeri);
