function towns(array){
    let cities = {}
    let allCities = []

    for(let city of array){
        let commands = city.split(' | ');
        let curCity = commands[0];
        let latitude = Number(commands[1]).toFixed(2)
        let longitute = Number(commands[2]).toFixed(2)

        cities = { curCity, latitude, longitute }
        allCities.push(cities)
    }

    for(let city of allCities){
        console.log(`{ town: '${city.curCity}', latitude: '${city.latitude}', longitude: '${city.longitute}' }`);
    }
}
towns
(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
