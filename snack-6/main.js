// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


const squadre = [
    {
        nome: 'roma',
        puntiSubiti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'milan',
        puntiSubiti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'inter',
        puntiSubiti: 0,
        falliSubiti: 0,
    },
]

const result = []

squadre.forEach ((squadra) =>{
    squadra.falliSubiti = Math.floor(Math.random() * 10);
    squadra.puntiSubiti = Math.floor(Math.random() * 10);
    const {nome, puntiSubiti, falliSubiti} = squadre;
    result.push(squadra.nome)
    result.push(squadra.falliSubiti)
})



console.log(result);