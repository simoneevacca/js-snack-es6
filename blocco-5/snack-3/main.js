// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
/**
 * 
 * @param {string} word 
 */
function invert(word) {
    
return word.split('').reverse().join('')
}

console.log(invert("ciao"));