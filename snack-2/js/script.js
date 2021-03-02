// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// // parola più lunga.

var firstWord = prompt('Inserire prima parola');
var secondWord = prompt('Inserire seconda parola');

if (firstWord.length == secondWord.length) {
  console.log('Le parole hanno la stessa lunghezza');

} else if (firstWord.length > secondWord.length) {

  console.log(secondWord);
  console.log(firstWord);

} else {
  console.log(firstWord);
  console.log(secondWord);
}
