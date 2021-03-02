// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var firstNumber = prompt('Inserisci il primo numero');
var secondNumber = prompt('Inserisci il secondo numero');

if (firstNumber > secondNumber) {
  console.log(firstNumber)
}

if (secondNumber > firstNumber) {
  console.log(secondNumber);
}
