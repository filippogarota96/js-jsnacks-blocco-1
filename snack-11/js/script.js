/*Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi e una lista di cognomi, Gatsby vuole generare una
falsa lista di 3 invitati.*/


var nomi = ["Gianni", "Andrea", "Caterina"];
var cognomi = ["Rossi", "Bianchi", "Conti"];

var invitati = [];

for ( i = 1; i <= 3; i++) {
  var randomName= Math.floor(Math.random() * nomi.length);
  var randomSurname= Math.floor(Math.random() * cognomi.length);
  var fakeName = nomi[randomName] + ' ' + cognomi[randomSurname];
  invitati.push(fakeName);
}

console.log(invitati);
