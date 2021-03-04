  /*Crea due array che hanno un numero di elementi diversi.
  Aggiungi elementi casuali all’array che ha meno elementi,
  fino a quando ne avrà tanti quanti l’altro.*/

  /*creo i due array*/

  var firstArray = [3, 5, 6, 8];
  var secondArray = [12, 43, 16, 67, 32];

  do {
    firstArray.push(Math.floor(Math.random() * 10));
  } while (firstArray.length == secondArray.length);

  console.log(firstArray);
