function activationKeys (array){
    let activationKey = array.shift()

    let row = array.shift()

    while(row !== "Generate"){

        if(row.includes('Slice')){
            let commands = row.split('>');

            let startIndex = Number(commands[3]);
            let endIndex = Number(commands[6]);

            activationKey = activationKey.slice(0, startIndex) + activationKey.slice(endIndex)
            console.log(activationKey);
        }else if(row.includes('Flip')){
            let commands = row.split('>');
            let upperOrLower = commands[3];
            let startIndex = Number(commands[6]);
            let endIndex = Number(commands[9]);

            if(upperOrLower === 'Upper'){
                let changedString = ''
                changedString = activationKey.slice(startIndex, endIndex).toUpperCase();
                
                activationKey = activationKey.slice(0, startIndex) + changedString + activationKey.slice(endIndex);
                console.log(activationKey);
            }else{
                let changedString = ''
                changedString = activationKey.slice(startIndex, endIndex).toLowerCase();
                
                activationKey = activationKey.slice(0, startIndex) + changedString + activationKey.slice(endIndex);
                console.log(activationKey);
            }
        }else if(row.includes('Contains')){
            let commands = row.split('>');
            let substring = commands[3];

            if(activationKey.includes(substring)){
                console.log(`${activationKey} contains ${substring}`);
            }else{
                console.log("Substring not found!");
            }
        }

        row = array.shift()
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys
([
    "abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"
])