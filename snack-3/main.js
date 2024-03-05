//Crea un array di oggetti che rappresentano degli animali.
//Ogni animale ha un nome, una famiglia e una classe.
//Crea un nuovo array con la lista dei mammiferi.

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]


const mammiferi = animals.filter(animal => animal.classe === 'mammiferi');
//log in console la stringa con tutte le informazioni disponibili solo dei mammiferi
console.log(mammiferi);

mammiferi.forEach((element) => {

    // log in console solo i nomi dei mammiferi
    console.log(element.nome);
})