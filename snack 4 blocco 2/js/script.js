/* crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

// creo l'array di numeri
var numeri = [ 20, 2, 12, 10 ];

var somma = 0;

for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] % 2 == 1) {
    console.log(numeri[i]);
  }

}
