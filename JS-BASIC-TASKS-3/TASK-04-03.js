function heartDelivery(array){
    let neighbourhood = array.shift().split('@').map(Number);
    let row = array.shift();
    let lastPosition = 0;

    while(row !== 'Love!'){
        
        let commands = row.split(' ');
        let jump = Number(commands[1]);
        lastPosition += jump

            if(lastPosition > neighbourhood.length - 1){
                lastPosition = 0
            }

            if(neighbourhood[lastPosition] === 0){
                console.log(`Place ${lastPosition} already had Valentine's day.`);
                
            }else{
                neighbourhood[lastPosition] -= 2;
                if(neighbourhood[lastPosition] === 0){
                    console.log(`Place ${lastPosition} has Valentine's day.`);
                }
                
            }
        row = array.shift()
            
    }
    if(row === 'Love!'){
        console.log(`Cupid's last position was ${lastPosition}.`);
    }
    
    let checkIfEachHouseHadValentinesDay = 0;
    for(let number of neighbourhood){
        if(number > 0){
            checkIfEachHouseHadValentinesDay++
        }
    }
    if(checkIfEachHouseHadValentinesDay <= 0){
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid has failed ${checkIfEachHouseHadValentinesDay} places.`);
    }
}
heartDelivery
(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
