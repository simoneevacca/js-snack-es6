// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: 'Casati',
        peso: 14
    },
    {
        nome: 'Colnago',
        peso: 1
    },
    {
        nome: 'Bottecchia',
        peso: 9
    },
    {
        nome: 'Bianchi',
        peso: 12
    },
    {
        nome: 'Atala',
        peso: 7
    },
    {
        nome: 'Olmo',
        peso: 10
    },
]

let bikeName = bikes.peso;
let bikeWeight = 100; 


bikes.forEach ((bike) => {
    const{nome, peso} = bike
    if (peso < bikeWeight) {
        bikeWeight = peso
        bikeName = nome
    }
})

console.log(`la bicicletta che pesa di meno è la ${bikeName} che pesa ${bikeWeight}Kg`);
