// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// Oggetto che descrive studente
var studente = {
  nome: 'Giulio',
  cognome: 'Tavoni',
  eta: 31
};

// stampa proprietà oggetto studente
for (var k in studente) {
  console.log('stampa proprietà oggetto studente: ', studente[k]);
}

// array di oggetti di studenti
var arrayStudenti = [
  {
    nome: 'Alessandro',
    cognome: 'Del Piero',
    eta: 46
  },
  {
    nome: 'Francesco',
    cognome: 'Totti',
    eta: 44
  },
  {
    nome: 'Paolo',
    cognome: 'Maldini',
    eta: 52
  },
  {
    nome: 'Filippo',
    cognome: 'Inzaghi',
    eta: 47
  },
  {
    nome: 'Vincenzo',
    cognome: 'Montella',
    eta: 46
  }
];

// stampare nome e cognome di ciascuno studente
for (var i = 0; i < arrayStudenti.length; i++) {
    console.log('stampa nomi arrayStudenti', arrayStudenti[i].nome);
    console.log('stampa cognomi arrayStudenti', arrayStudenti[i].cognome);
}

// Richiesta dati a nuovo studente
var nome, cognome, eta;

for (var i = 0; i < 3; i++) {
  if (i == 0) {
    nome = prompt('Indica il tuo nome');
  }
  if (i == 1) {
    cognome = prompt('Indica il tuo cognome');
  }
  if (i == 2) {
    eta = parseInt(prompt('Indica la tua età'));
  }
}

// creazione nuovo oggetto studente
var nuovoStudente = {
  nome: nome,
  cognome: cognome,
  eta: eta
}

// aggiunta nuovo oggetto studente ad array già creato
arrayStudenti.push(nuovoStudente);
console.log('stampa arrayStudenti con aggiunta nuovo studente', arrayStudenti);
