//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
//Infine stampa separatamente i 3 array.

const listino = [
    {
        marca: 'ford',
        modello: 'focus',
        alimentazione: 'benzina'
    },
    {
        marca: 'kia',
        modello: 'picanto',
        alimentazione: 'gpl'
    },
    {
        marca: 'dodge',
        modello: 'challenger',
        alimentazione: 'benzina'
    },
    {
        marca: 'tesla',
        modello: 'model x',
        alimentazione: 'elettrica'
    },
    {
        marca: 'toyota ',
        modello: 'prius',
        alimentazione: 'elettrica'
    },
    {
        marca: 'jeep',
        modello: 'renegade',
        alimentazione: 'diesel'
    },
    {
        marca: 'nissan',
        modello: 'gtr',
        alimentazione: 'benzina'
    },
    {
        marca: 'opel',
        modello: 'corsa',
        alimentazione: 'diesel'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'ford',
        modello: 'focus',
        alimentazione: 'gpl'
    }
]


const benzina = listino.filter(car => car.alimentazione === 'benzina')
console.log(benzina);

const diesel = listino.filter(car => car.alimentazione === 'diesel')
console.log(diesel);

const other = listino.filter(car => car.alimentazione !== 'benzina' && car.alimentazione !== 'diesel')
console.log(other);
