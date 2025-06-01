// TODO Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// ! Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// * creo un alert di benvenuto

alert(
  "Benvenuto! Pronto a giocare? \nTiriamo un D6! 🎲 \nChi ottiene il punteggio più alto vince!"
);

// * creo un let userDiceRoll che parta da 1 fino ad un massimo di 6 che generi solo numeri interi
let userDiceRoll = Math.floor(Math.random() * 6) + 1; // salvo il randomNumberGenerator dell'utente in una variabile
console.log(userDiceRoll); // loggo il risultato del giocatore in console
alert("Il risultato del tuo lancio è  " + userDiceRoll + "🎲"); // avviso il giocatore del suo valore attuale

// * creo un let botDiceRoll alla stessa maniera, comunicando al giocatore la giocata del bot
let botDiceRoll = Math.floor(Math.random() * 6) + 1; // salvo il randomNumberGenerator del computer in una variabile
console.log(botDiceRoll); // loggo il risultato del computer in console
alert("Il tuo avversario ha tirato il suo dado! 🎲"); // tengo nasconsto allo user il tiro dell'avversario

// * paragono i due numeri usciti stabilendo degli esiti con if/else
//  * il più alto "vince"
if (userDiceRoll > botDiceRoll) {
  // se lo user ottiene il numero più alto
  // * se vince il numero generato dal giocatore, stampo il messaggio e l'alert di vittoria dello user
  console.log(userDiceRoll + " è il numero più alto"); // loggo in console il numero dello user
  alert(
    "Hai vinto! \nIl risultato dei tiri è " +
      userDiceRoll +
      "🎲" +
      " contro " +
      botDiceRoll +
      "🎲"
  ); // comunico la vittoria con un alert
} else if (userDiceRoll < botDiceRoll) {
  // se lo user ottiene il numero più basso
  // * se vince il numero generato dal computer, stampo il messaggio e l'alert di sconfitta dello user
  console.log(botDiceRoll + " è il numero più alto"); //  loggo in console il numero dello user
  alert(
    "Hai perso! \nIl risultato dei tiri è " +
      userDiceRoll +
      "🎲" +
      " contro " +
      botDiceRoll +
      "🎲"
  ); // comunico la sconfitta con un alert
}
// ? se dovessero pareggiare?
else {
  console.log(userDiceRoll + " e " + botDiceRoll + " pareggiano "); // loggo in console il pareggio
  alert(
    "🎲 Pareggio! 🎲 \nTu e il tuo avversario avete ottenuto lo stesso risultato!"
  ); // comunico il pareggio con un alert
} 

alert("Vuoi giocare ancora? \nRicarica la pagina! 🎲"); // Want to try again? 🎲
