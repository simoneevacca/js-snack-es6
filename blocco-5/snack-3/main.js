// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)



const insertWord = prompt ('scrivi una parola');
alert (`la parola al contrario è: ${invert(insertWord)}`)



/**
 * 
 * @param {string} word 
 */
function invert(word) {
return word.split('').reverse().join('')
}

