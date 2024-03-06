//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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

const long = zucchine.filter ((zucchina) => {
    return zucchina.lunghezza >= 15
})
const short = zucchine.filter ((zucchina) => {
    return zucchina.lunghezza < 15
})

console.log(long);
console.log(short);
