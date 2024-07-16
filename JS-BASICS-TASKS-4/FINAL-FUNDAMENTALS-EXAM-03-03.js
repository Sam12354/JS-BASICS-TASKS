function needForSpeed(array){
    let iterate = Number(array.shift());
    let row = array.shift();
    let curCar = {};
    let allCars = [];

    for(let i = 0; i < iterate; i++){
        let commands = row.split('|');
        let car = commands[0];
        let mileage = Number(commands[1]);
        let fuel = Number(commands[2]);

        curCar = { car, mileage, fuel }
        allCars.push(curCar);


        row = array.shift();
    }

    while(row !== 'Stop'){
        let commands = row.split(' : ');

        if(commands[0] === 'Drive'){
            let car = commands[1];
            let distance = Number(commands[2]);
            let fuel = Number(commands[3]);
            
            let findCar = allCars.find(c => c.car === car);
            if(findCar){
                if(findCar.fuel >= fuel){
                    findCar.mileage += distance;
                    findCar.fuel -= fuel;
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if(findCar.mileage >= 100000){
                        let idx = allCars.indexOf(findCar);
                        allCars.splice(idx, 1);

                        console.log(`Time to sell the ${car}!`);
                    }
                }else{
                    console.log('Not enough fuel to make that ride');
                }
            }

        }else if(commands[0] === 'Refuel'){
            let car = commands[1];
            let fuel = Number(commands[2]);

            let findCar = allCars.find(c => c.car === car);
            if(findCar){
                if((findCar.fuel + fuel) > 75){
                    let filled = 75 - findCar.fuel;
                    findCar.fuel = 75;
                    console.log(`${car} refueled with ${filled} liters`);
                }else{
                    findCar.fuel += fuel
                    console.log(`${car} refueled with ${fuel} liters`);
                }
            }

        }else if(commands[0] === 'Revert'){
            let car = commands[1];
            let km = Number(commands[2]);

            let findCar = allCars.find(c => c.car === car);
            if(findCar){
                findCar.mileage -= km;
                if(findCar.mileage < 10000){
                    findCar.mileage = 10000;
                }else{

                    console.log(`${car} mileage decreased by ${km} kilometers`);
                }

            }
        }
        row = array.shift();
    }

    for(let car of allCars){
        console.log(`${car.car} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }
}
needForSpeed
([
    '4',
  'Lamborghini Veneno|11111|74',
  'Bugatti Veyron|12345|67',
  'Koenigsegg CCXR|67890|12',
  'Aston Martin Valkryie|99900|50',
  'Drive : Koenigsegg CCXR : 382 : 82',
  'Drive : Aston Martin Valkryie : 99 : 23',
  'Drive : Aston Martin Valkryie : 2 : 1',
  'Refuel : Lamborghini Veneno : 40',
  'Revert : Bugatti Veyron : 2000',
  'Stop'

])
