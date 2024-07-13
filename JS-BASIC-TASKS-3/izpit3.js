function shootForTheWin(input){
    let targets = input.shift().split(' ').map(Number);
    let row = input.shift();
    let count = 0;
    
    while(row !== 'End'){
        let index = Number(row);
        if(index >= 0 && index <= targets.length - 1){

            for(let i = 0; i < targets.length; i++){
                if(targets[i] !== -1 && i !== index){
                    if(targets[i] > targets[index]){
                        targets[i] -= targets[index];
                    }else if(targets[i] <= targets[index]){
                        targets[i] += targets[index];
                    }
                }
            }
            targets[index] = -1;
            count++;
        }

        row = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);

}
shootForTheWin
(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])