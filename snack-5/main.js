// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
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

let bikeName = 0;
let bikeWeight = 100; 

const [bici1, bici2, bici3] = bikes



bikes.forEach ((bike) => {
    const{nome, peso} = bike
    if (peso < bikeWeight) {
        bikeWeight = peso
        bikeName = nome
    }
})

console.log(bikeName, bikeWeight);
