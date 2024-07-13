function counterStrike(array) {
    let initialEnergy = Number(array.shift());
    let row = array.shift();
    let wonBattle = 0;

    while (row !== 'End of battle') {
        let energy = Number(row);

        if (initialEnergy < energy) {
            console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${initialEnergy} energy`);
            return;
        }
        
        initialEnergy -= energy;
        wonBattle++;
        
        if (wonBattle % 3 === 0) {
            initialEnergy += wonBattle;
        }

        row = array.shift();
    }

    console.log(`Won battles: ${wonBattle}. Energy left: ${initialEnergy}`);
}
counterStrike
(["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
