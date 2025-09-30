/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
const n1 = 30;
const n2 = 73;
if (n1 > n2) {
  console.log("n1 is greater than n2");
} else {
  console.log("n2 is greater than n1");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

if (n1 !== 5) {
  console.log("not equal");
} else {
  control.log("equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

if (n1 % 5 === 0) {
  console.log("n1 is divisible by 5");
} else {
  console.log("n1 is indivisible by 5");
}

if (n2 % 5 === 0) {
  console.log("n2 is divisible by 5");
} else {
  console.log("n2 is indivisible by 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const n3 = 15;
const n4 = 7;

if ((n3 === 8 || n4 === 8 || n4 + n3 === 8, n3 - n4 === 8)) {
  console.log(true);
} else {
  console.log(false);
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80;
let shippingCost = 10;
let total = totalShoppingCart + shippingCost;

if (totalShoppingCart > 50) {
  console.log(total - shippingCost);
} else {
  console.log(total);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

totalShoppingCartBf = 80 - (80 / 100) * 20;
shippingCost = 10;
total = totalShoppingCartBf + shippingCost;
let discount = 20;

if (totalShoppingCartBf > 50) {
  console.log(total - shippingCost);
} else {
  console.log(total);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const n5 = 19;
const n6 = 9;
const n7 = 45;

let first, second, third;

if (n5 >= n6 && n5 >= n7) {
  first = n5;
  if (n6 >= n7) {
    second = n6;
    third = n7;
  } else {
    second = n7;
    third = n6;
  }
} else if (n6 >= n5 && n6 >= n7) {
  first = n6;
  if (n5 >= n7) {
    second = n5;
    third = n7;
  } else {
    second = n7;
    third = n6;
  }
} else {
  first = n7;
  if (n5 >= n6) {
    second = n5;
    third = n6;
  } else {
    second = n6;
    third = n7;
  }
}
console.log(first, second, third);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const a = "tree";
console.log(typeof a);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let randomNumber = 16;

if (randomNumber % 2 === 0) {
  console.log("Even number"); //PARI
} else {
  console.log("Odd number"); //DISPARI
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 11;

if (val < 5) {
  console.log("Less than 5");
} else if (val === 5) {
  console.log("Equal to 5");
} else if (val < 10) {
  console.log("More than 10 and less than 5");
} else if (val === 10) {
  console.log("Equal to 10");
} else {
  console.log("More than 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.splice(2);
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const variousNumbers = [];

variousNumbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(variousNumbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

variousNumbers.splice(9, 1, 100);

console.log(variousNumbers);
