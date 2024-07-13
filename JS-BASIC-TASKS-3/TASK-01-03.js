function memoryGame(array){
    let sequence = array.shift().split(' ');
    let row = array.shift();
    let moves = 1;

    while(row !== 'end'){
        let commands = row.split(' ')
        let index1 = commands[0];
        let index2 = commands[1];

        if((index1 === index2) || (index1 < 0 || index1 > sequence.length - 1) || (index2 < 0 || index2 > sequence.length - 1)){
            let middleSequence = sequence.length / 2

            sequence.splice(middleSequence, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        }else if(sequence[index1] === sequence[index2]){
            let element = sequence[index1];

            sequence = sequence.filter(e => e !== element);
            console.log(`Congrats! You have found matching elements - ${element}!`);

            if(sequence.length === 0){
                console.log(`You have won in ${moves} turns!`);
                return;
            }

        }else if(sequence[index1] !== sequence[index2]){
            console.log("Try again!");

        }

        moves++;
        row = array.shift();
    }
    console.log('Sorry you lose :(');
    console.log(sequence.join(' '));
}
memoryGame
([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
])
