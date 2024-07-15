function plantDiscovery (array){
    let iterate = Number(array.shift());
    let curPlant = {};
    let plants = [];
    let row = array.shift();

    for(let i = 0; i < iterate; i++){
        let commands = row.split('<->');
        let plant = commands[0]
        let rarity = Number(commands[1])

        let finndPlant = plants.find(p => p.plant === plant)
        if(finndPlant){
            finndPlant.rarity = rarity
        }else{
            curPlant = { plant, rarity, rating:[] };
            plants.push(curPlant)
        }  

        row = array.shift();

    }

    while(row !== 'Exhibition'){
        let commands = row.split(': ')

        if(commands[0] === 'Rate'){
            let curCommands = commands[1].split(' - ')
            let plant = curCommands[0];
            let rating = Number(curCommands[1]);

            let findPlant = plants.find(p => p.plant === plant)
            if(findPlant){
                findPlant.rating.push(rating)
            }else{
                console.log('error');
            }

        }else if(commands[0] === 'Update'){
            let curCommands = commands[1].split(' - ')
            let plant = curCommands[0];
            let newRarity = Number(curCommands[1]);

            let findPlant = plants.find(p => p.plant === plant)
            if(findPlant){
                findPlant.rarity = newRarity
            }else{
                console.log('error');
            }

        }else if(commands[0] === 'Reset'){
            let plant = commands[1];

            let findPlant = plants.find(p => p.plant === plant)
            if(findPlant){
                findPlant.rating = []
            }else{
                console.log('error');
            }

        }

        row = array.shift();
    }

    console.log("Plants for the exhibition:");
    for(let plant of plants){

        if(plant.rating < 2){
            let rating = Number(plant.rating)
            console.log(`- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${(rating).toFixed(2)}`);
        }else{
            let sum = 0;
            for(let rating of plant.rating){
                sum += rating
            }

            console.log(`- ${plant.plant}; Rarity: ${plant.rarity}; Rating: ${(sum / plant.rating.length).toFixed(2)}`);
        }
    }
}
plantDiscovery 
(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

// (["2",
// "Candelabra<->10",
// "Oahu<->10",
// "Rate: Oahu - 7",
// "Rate: Candelabra - 6",
// "Exhibition"])
