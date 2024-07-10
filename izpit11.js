function izpit(array) {
    let curCity = {};
    let allCities = [];
    let row = array.shift()

    while(row !== 'Sail'){
        let commands = row.split('||');
        let city = commands[0];
        let population = Number(commands[1]);
        let gold = Number(commands[2]);

        let findCity = allCities.find(c => c.city === city)
        if(findCity){
            findCity.population += population;
            findCity.gold += gold;
        }else{
            curCity = { city, population, gold };
            allCities.push(curCity)
        }

        row = array.shift()
    }

    while(row !== 'End'){
        let commands = row.split('=>');

        if(commands[0] === 'Plunder'){
            let town = commands[1];
            let people = Number(commands[2]) 
            let gold = Number(commands[3])

            let findCity = allCities.find(c => c.city === town)
            if(findCity){
                findCity.population -= people
                findCity.gold -= gold
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if(findCity.population <= 0|| findCity.gold <= 0){
                    let idx = allCities.indexOf(findCity)
                    allCities.splice(idx, 1)

                    console.log(`${town} has been wiped off the map!`);
                }
            }

        }else if(commands[0] === 'Prosper'){
            let town = commands[1];
            let gold = Number(commands[2]);

            let findCity = allCities.find(c => c.city === town)
            if(findCity){
                if(gold < 0){
                    console.log("Gold added cannot be a negative number!");
                }else{
                    findCity.gold += gold; 
                    console.log(`${gold} gold added to the city treasury. ${town} now has ${findCity.gold} gold.`);
                }
            }
        }

        row = array.shift()
    }
    if(allCities.length === 0){
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }else{
        console.log(`Ahoy, Captain! There are ${allCities.length} wealthy settlements to go to:`);
        for(let city of allCities){
            console.log(`${city.city} -> Population: ${city.population} citizens, Gold: ${city.gold} kg`);
        }
    }
}
izpit
(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
