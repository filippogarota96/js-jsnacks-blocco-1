  /*Crea due array che hanno un numero di elementi diversi.
  Aggiungi elementi casuali all’array che ha meno elementi,
  fino a quando ne avrà tanti quanti l’altro.*/

  /*creo i due array*/

  var firstArray = [3, 5, 6, 5];
  var secondArray = [12, 43, 16, 67, 32, 30, 54, 12];

  while (firstArray.length < secondArray.length) {

    firstArray.push(Math.floor(Math.random() * 10));
    firstArray.length == secondArray.length;
  }

  while (secondArray.length < firstArray.length) {

    secondArray.push(Math.floor(Math.random() * 10));
    firstArray.length == secondArray.length;
  }

  console.log(firstArray);
  console.log(secondArray);
