// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: 'Bianchi',
        peso: 7
    },
    {
        nome: 'Atala',
        peso: 12
    },
    {
        nome: 'Olmo',
        peso: 10
    },
]

const bikeLite = 0;

const [bici1, bici2, bici3] = bikes

console.log(bici1, bici2, bici3);

