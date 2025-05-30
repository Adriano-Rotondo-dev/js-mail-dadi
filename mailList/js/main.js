// TODO Mail - Crea una lista di email di invitati ad una festa.
// TODO Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// ! Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’.
// !  Non è necessario provvedere alla validazione delle email

// TODO  Creo una lista di email degli invitati

const inviteList = [
  "gianni@boolean.com",
  "franco@boolean.com",
  "peppe@boolean.com",
  "lillo@boolean.com",
  "nanni@boolean.com",
  "gigi@boolean.com",
];

// * creo un boolean per poi verificare la presenza nella lista email

let inList = false;

// * creo un prompt che chieda agli invitati di inserire la propria e-mail

let userMail = prompt("Benvenuto alla Festa! Inserisci la tua e-mail");

// todo: creo un ciclo for che controlli se l'e-mail inserita è presente nella lista da me creata
// * inizializzo il ciclo for per verificare la presenza in inviteList della userMail

for (i = 0; i < inviteList.length; i++) {
  if (userMail === inviteList[i]) {
    // controllo se l'userMail trova riscontro negli elementi dell'inviteList
// todo: se l'email è presente, stampa un messaggio in console e un alert
    inList = true; // se lo trova, inList diventa true
    console.log("Sei in lista!"); // quindi stampa il messaggio di conferma
    break; // chiudo il ciclo
  }
}
// ? se non è presente stampa un messaggio differente
if (inList == false) {
  // se non trova riscontro inList = False
  console.log("Non sei in lista, ci dispiace!"); // stampo il messaggio di failure
}
