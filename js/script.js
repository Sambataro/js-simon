// Un alert espone 5 numeri casuali diversi.  FATTO
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta,
 // i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



$(document).ready(
  function() {
    // genero 5 numeri casuali tra 1 e 100 e li salvo in un array
    var arrayNumber = [];
    for (var i = 0; i < 5; i++) {
      var generateNumber = randomNumber(1, 100);
      arrayNumber.push(generateNumber);
    }
    alert(arrayNumber);
  }
  function
);

// Function-----------------------------------------<
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
