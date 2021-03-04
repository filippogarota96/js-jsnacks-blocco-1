/*Il software deve chiedere per 5 volte all’utente di inserire un
numero. Il programma stampa la somma di tutti i numeri
inseriti. Esegui questo programma in due versioni, con il for
e con il while.*/

var numero;
var somma = 0;

for (var i= 0; i < 5; i++ ) {
  // chiedo il numero all'utente
  numero = parseInt(prompt('Scrivi un numero '));
  if (isNaN(numero)) {
    console.log('Attento! Scrivi un numero')
  } else {
    // sommo i numeri richiesti
    somma += numero;
  }
}
console.log( 'la somma dei numeri è: ' + somma);

// somma con ciclo while

var j = 0;
var secondaSomma = 0;
while (j < 5 ) {
  numero = parseInt(prompt('Scrivi ancora un numero '));
  if (isNaN(numero)) {
    console.log('Attento! Scrivi un numero')
  } else {
    // sommo i numeri richiesti
    secondaSomma += numero;
  }
  j++;
}
console.log( 'la somma della seconda serie di numeri è: ' + secondaSomma);
