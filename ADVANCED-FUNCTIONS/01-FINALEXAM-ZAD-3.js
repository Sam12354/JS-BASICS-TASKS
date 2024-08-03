function zad1(array){
    let timesIterate = Number(array.shift());

    let curPiece = {};
    let pieces = [];

    for(let i = 0; i < timesIterate; i++){

        let commands = array.shift().split('|');

        let piece = commands.shift();
        let composer = commands.shift();
        let key = commands.shift();

        curPiece = { piece, composer, key};
        pieces.push(curPiece);
    }

    let row = array.shift();
    while(row !== 'Stop'){
        let commands = row.split('|');

        if(commands[0] === 'Add'){
            let piece = commands[1];
            let composer = commands[2];
            let key = commands[3];

            let findPiece = pieces.find(p => p.piece === piece);

            if(findPiece){
                console.log(`${piece} is already in the collection!`);
            }else{
                curPiece = { piece, composer, key };
                pieces.push(curPiece)
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }

        }else if(commands[0] === 'Remove'){
            let piece = commands[1];

            let findPiece = pieces.find(p => p.piece === piece);
            if(findPiece){
                let idx = pieces.indexOf(findPiece);
                pieces.splice(idx, 1);
                console.log(`Successfully removed ${piece}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }else if(commands[0] === 'ChangeKey'){
            let piece = commands[1];
            let newKey = commands[2];

            let findPiece = pieces.find(p => p.piece === piece);
            if(findPiece){
                findPiece.key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            }else{
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        row = array.shift();
    }

    for(let row of pieces){

        console.log(`${row.piece} -> Composer: ${row.composer}, Key: ${row.key}`);
        
    }
}
zad1
([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
])