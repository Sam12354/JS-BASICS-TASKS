function zad1(input){

    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/g
    let destinations = []

    let exec = pattern.exec(input)

    while(exec !== null){

        let destination = exec[0]

        destination = destination.split(/[=/]/g).join('')
        destinations.push(destination)


        exec = pattern.exec(input)
    }

    console.log(`Destinations: ${destinations.join(', ')}`);

    let travelPoints = 0
    for(let i = 0; i < destinations.length; i++){
        let curDestination = destinations[i]
        for(let letter of curDestination){
            travelPoints += 1
        }
    }
    console.log(`Travel Points: ${travelPoints}`);

}
zad1
("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")