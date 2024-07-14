function manOWar (array){
    let pirateShipStatus = array.shift().split('>').map(Number);
    let warShipStatus = array.shift().split('>').map(Number);
    let maxhealth = Number(array.shift());
    
    let row = array.shift();
    while(row !== "Retire"){

        if(row.includes('Fire')){
            let commands = row.split(' ');
            let index = Number(commands[1]);
            let dmg = Number(commands[2]);

            if(index >= 0 && index <= warShipStatus.length - 1){
                warShipStatus[index] -= dmg
                if(warShipStatus[index] <= 0){
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            }
        }else if(row.includes('Defend')){
            let commands = row.split(' ');
            let startIndex = Number(commands[1])
            let endIndex = Number(commands[2])
            let dmg = Number(commands[3])

            if((startIndex >= 0 && startIndex <= pirateShipStatus.length -1) && (endIndex >= 0 && endIndex <= pirateShipStatus.length -1)){

                for(let i = startIndex; i <= endIndex; i++){
                    pirateShipStatus[i] -= dmg
                    if(pirateShipStatus[i] <= 0){
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
   
        }else if(row.includes('Repair')){
            let commands = row.split(' ');
            let index = Number(commands[1])
            let health = Number(commands[2])

            if(index >= 0 && index <= pirateShipStatus.length - 1){

                pirateShipStatus[index] += health
                if(pirateShipStatus[index] > maxhealth){
                    pirateShipStatus[index] = maxhealth
                }
            }
        }else if(row.includes('Status')){
            let count = 0;
            for(let i = 0; i < pirateShipStatus.length; i++){
                let sectionsNeedsRepair = maxhealth * 0.2
                if(pirateShipStatus[i] < sectionsNeedsRepair){
                    count++
                }
            }
            console.log(`${count} sections need repair.`);
        }

        row = array.shift();
    }

    let statusWarShip = 0
    let statusPirateShip = 0

    for(let number of pirateShipStatus){
        statusPirateShip += number
    }
    for(let number of warShipStatus){
        statusWarShip += number
    }

    console.log(`Pirate ship status: ${statusPirateShip}`);
    console.log(`Warship status: ${statusWarShip}`);

}
manOWar
(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
