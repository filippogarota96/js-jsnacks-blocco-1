/* crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

// creo l'array di numeri
var numeri = [ 20, 3, 12, 20, 2, 3 ];

var somma = 0;

for (var i = 0; i < numeri.length; i++) {
  if (i % 2 == 1) {
    somma += numeri[i];
  }
}
console.log( 'la somma dei numeri dispari è' + ' ' + somma);
