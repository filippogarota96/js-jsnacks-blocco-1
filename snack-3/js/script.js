// Il software deve chiedere per 10 volte all’utente di inserire
// un numero. Il programma stampa la somma di tutti i numeri
// inseriti.

// chiedo all'utente di inserire 10 volte un numero

var somma = 0;

for (i = 1; i <= 10; i++ ) {
  var numero = parseInt(prompt('Inserisci un numero'));
  somma = somma + numero;
  console.log(somma);
}

console.log(somma);
