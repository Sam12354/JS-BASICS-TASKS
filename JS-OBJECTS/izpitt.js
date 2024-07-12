function izpit(array) {

    let arrayToManipulate = array.shift().split(', ');
    
    let row = array.shift()
    
    while(row !== 'Craft!'){
        let token = row.split(' - ')
        let command = token.shift()
        let item = token.shift()
        
        if(command === "Collect"){
            if(!arrayToManipulate.includes(item)){
                arrayToManipulate.push(item)
            }
        }else if(command === "Drop"){
            if(arrayToManipulate.includes(item)){
                let idx = arrayToManipulate.indexOf(item)
                arrayToManipulate.splice(idx, 1)
            }
        }else if(command === "Combine Items"){
            let items = item.split(':')
            let oldItem = items.shift();
            let newItem = items.shift();
                if (arrayToManipulate.includes(oldItem)) {
                    let idx = arrayToManipulate.indexOf(oldItem);
                    arrayToManipulate.splice(idx + 1, 0, newItem);
                }
            
        }else if (command === 'Renew') {
            if (arrayToManipulate.includes(item)) {
                let tmp = item;
                let idx = arrayToManipulate.indexOf(item);
                arrayToManipulate.splice(idx, 1);
                arrayToManipulate.push(tmp);
            }
        }
        row = array.shift()
    }
    console.log(arrayToManipulate.join(', '));
}

izpit
// ([
//     'Iron, Wood, Sword',
//     'Collect - Gold',
//     'Drop - Wood',
//     'Craft!'
// ]);
([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'  
])