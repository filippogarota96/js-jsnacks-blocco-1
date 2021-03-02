// In un array sono contenuti i nomi degli invitati alla festa del
// grande Inzaghi, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.


var invitati = [ "Paolo", "Luca", "Marta", "Mario", "Linda"];
var nome = prompt('Il tuo nome?');
var nomeValido;

for (i = 0; i < invitati.length; i++) {
  if (nome === invitati[i]) {
    nome = nomeValido
  }
}

if (nomeValido == nome) {
  console.log('Benvenuto!');
} else {
  console.log('Non sei sulla lista!');
}
