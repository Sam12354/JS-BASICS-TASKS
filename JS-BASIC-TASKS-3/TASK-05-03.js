function inventory(array){
    let journal = array.shift().split(', ');
    let row = array.shift();

    while(row !== 'Craft!'){
        let commands = row.split(' - ')

        if(commands[0] === 'Collect'){
            let item = commands[1];

            if(!journal.includes(item)){
                journal.push(item)
            }

        }else if(commands[0] === 'Drop'){
            let item = commands[1];

            if(journal.includes(item)){
                let idx = journal.indexOf(item);
                journal.splice(idx, 1);
            }
        }else if(commands[0] === 'Combine Items'){
            let items = commands[1].split(':')
            let oldItem = items[0];
            let newItem = items[1];
            
            if(journal.includes(oldItem)){
                let olditemIndex = journal.indexOf(oldItem);
                journal.splice(olditemIndex + 1, 0, newItem)
            }
        }else if(commands[0] === 'Renew'){
            let item = commands[1];

            if(journal.includes(item)){
                let idxToChange = journal.indexOf(item);
                journal.splice(idxToChange, 1)
                journal.push(item)
            }
        }

        row = array.shift();
    }
    console.log(journal.join(', '));
}
inventory
([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])
