const jugadas = ['P1', 'P1', 'P2', 'P2', 'P1', 'P2', 'P1', 'P2', 'P2', 'P1', 'P2', 'P2', 'P1', 'P1', 'P1'];
const jugadas2 = ['P2', 'P2', 'P1', 'P1', 'P2', 'P1', 'P2', 'P1', 'P1', 'P2', 'P1', 'P1', 'P2', 'P2', 'P2'];

const puntuacion = ['Love', 15, 30, 40];

let players = [0,0];

jugadas2.map((jugada) => {
    showResult(jugada);
});

function showResult(jugada){
    const player = jugada === 'P1' ? 0 : 1;
    let rival = jugada === 'P1' ? 1 : 0;

    if(!((players[0] >= (players[1] + 2) || players[1] >= (players[0] + 2) )&& (players[1] > 3 || players[0] > 3))){
        players[player] = players[player] + 1;

        if(players[player] > 3) {
    
            if(players[player] === players[rival]){
                console.log('Deuce');
            }
            if(players[player] === (players[rival] + 1)){
                console.log(`Ventaja P${player+1}`);
            }
            if(players[player] >= (players[rival] + 2)){
                console.log(`Ha ganado el P${player+1}`);
                partido = false;
            }
        } else {
    
            if(players[player] === players[rival] && players[player] === 3) {
                console.log('Deuce');
            }else {
                console.log(`${puntuacion[players[0]]} - ${puntuacion[players[1]]}`);
            }
        }
    }
}