//Crea un array di oggetti che rappresentano delle persone.
//Ogni persona ha un nome, un cognome e un’età.
//Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

const persone = [
    {
        nome: 'Leonardo',
        cognome: 'Di Caprio',
        eta: 12
    },
    {
        nome: 'Tom',
        cognome: 'Hanks',
        eta: 50
    },
    {
        nome: 'Jemie',
        cognome: 'Foxx',
        eta: 45
    },
    {
        nome: 'Brad',
        cognome: 'Pitt',
        eta: 17
    },
    {
        nome: 'Will',
        cognome: 'Smith',
        eta: 29
    },
    {
        nome: 'Liam',
        cognome: 'Neeson',
        eta: 8
    }
]

const list = [];

persone.forEach((element) => {
    informazioni = `${element.nome} ${element.cognome} ${element.eta}`
    if (element.eta < 18){
        list.push(`${element.nome} ${element.cognome} ${element.eta} non può guidare`)
    }else {
        list.push(`${element.nome} ${element.cognome} ${element.eta} può guidare`)
    }
}) 
console.log(list);



// const maggiorenne = 'è maggiorenne, può guidare'

// const chi = persone.filter(element =>{
//     if (element.eta < 18){
//        return true
//     } else {
//         return false
//     }
// })

// console.log(chi);
