function movingTarget(array){
    let targets = array.shift().split(' ').map(Number);
    let row = array.shift();

    while(row !== 'End'){
        let commands = row.split(' ');

        if(commands[0] === 'Shoot'){
            let index = Number(commands[1]);
            let power = Number(commands[2]);

            if(index >= 0 && index <= targets.length -1){
        
                if(targets[index] - power <= 0){
                    targets.splice(index, 1)
                }else{
                    targets[index] -= power;
                }
            }
        }else if(commands[0] === 'Add'){
            let index = Number(commands[1]);
            let value = Number(commands[2]);
            if(index >= 0 && index <= targets.length - 1){
                targets.splice(index, 0, value);
            }else{
                console.log("Invalid placement!");
            }
        }else if(commands[0] === 'Strike'){
            let index = Number(commands[1]);
            let radius = Number(commands[2]);

            if((index >= 0 && index <= targets.length) && (index - radius >= 0 && index + radius <= targets.length -1)){

                targets.splice(index - radius, radius * 2 + 1);
            }else{
                console.log("Strike missed!");
            }

        }

        row = array.shift();
    }
    console.log(targets.join('|'));

}
movingTarget
(["1 2 3 4 5",
"Strike 0 1",
"End"])
