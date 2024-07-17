function pirates(array) {
    let curCity = {};
    let allCities = [];
    let row = array.shift();

    while(row !== 'Sail'){
        let commands = row.split('||');
        let city = commands[0];
        let population = Number(commands[1]);
        let gold = Number(commands[2]);

        let findCity = allCities.find(c => c.city === city);
        if(findCity){
            findCity.population += population;
            findCity.gold += gold;
        }else{
            curCity = { city, population, gold };
            allCities.push(curCity);
        }

        row = array.shift();
    }

    while(row !== 'End'){

        if(row.includes('Plunder')){
            let commands = row.split('=>');
            let city = commands[1];
            let people = Number(commands[2]);
            let gold = Number(commands[3]);

            let findCity = allCities.find(c => c.city === city);
            if(findCity){
                findCity.population -= people;
                findCity.gold -= gold;

                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

                if(findCity.population <= 0|| findCity.gold <= 0){
                    let idx = allCities.indexOf(findCity);
                    allCities.splice(idx, 1);
                    console.log(`${city} has been wiped off the map!`);
                }
            }

        }else if(row.includes('Prosper')){
            let commands = row.split('=>');
            let city = commands[1];
            let gold = Number(commands[2]);

            if(gold < 0){
                console.log("Gold added cannot be a negative number!");
            }else{
                let findCity = allCities.find(c => c.city === city);
                if(findCity){

                    findCity.gold += gold;
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${findCity.gold} gold.`);
                }
            }

        }
        row = array.shift();
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
pirates
(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])