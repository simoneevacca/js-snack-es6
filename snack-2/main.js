//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
//  [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const words = ['pippo', 'PLUTO', 'Paperino'];

const lowerWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
    
    
    
})
console.log(lowerWords);

