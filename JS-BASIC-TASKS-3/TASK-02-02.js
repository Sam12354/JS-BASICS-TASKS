function arrayModifier(array){
    let arrayToModify = array.shift().split(' ').map(Number);

    let row = array.shift();
    while(row !== 'end'){

        if(row.includes('swap')){
            let commands = row.split(' ');
            let index1 = Number(commands[1]);
            let index2 = Number(commands[2]);

            let tmp = arrayToModify[index1];
            arrayToModify[index1] = arrayToModify[index2];
            arrayToModify[index2] = tmp;

        }else if(row.includes('multiply')){
            let commands = row.split(' ');
            let index1 = Number(commands[1]);
            let index2 = Number(commands[2]);

            arrayToModify[index1] = arrayToModify[index1] * arrayToModify[index2];

        }else if(row.includes('decrease')){

            arrayToModify = arrayToModify.map(element => element - 1);

        }

        row = array.shift();
    }
    console.log(arrayToModify.join(', '));
}
arrayModifier
([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])
