// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

const zucchine = [
    {
        varieta: 'nera',
        peso: 1,
        lunghezza: 12
    },
    {
        varieta: 'romanesca',
        peso:2,
        lunghezza: 7
    },
    {
        varieta: 'fiorentino',
        peso: 1,
        lunghezza: 9
    },
    {
        varieta: 'napoletana',
        peso: 2,
        lunghezza: 5
    },
    {
        varieta: 'tonda',
        peso: 1,
        lunghezza: 20
    },
    {
        varieta: 'trombetta',
        peso: 2,
        lunghezza: 19
    },
    {
        varieta: 'gialla',
        peso: 1,
        lunghezza: 11 
    },
    {
        varieta: 'siciliana',
        peso: 2,
        lunghezza: 14
    },
    {
        varieta: 'verde',
        peso: 1,
        lunghezza: 7
    },
    {
        varieta: 'bianca',
        peso: 2,
        lunghezza: 16
    },
]


totalWeight = 0;
zucchine.forEach((zucchina) => {
    const {varieta, peso, lunghezza} = zucchina 
    totalWeight += peso;
})

console.log(totalWeight);