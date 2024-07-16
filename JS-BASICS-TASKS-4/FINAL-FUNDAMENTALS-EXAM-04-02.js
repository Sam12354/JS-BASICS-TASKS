function shoppingList(array){
    let shoppingList = array.shift().split('!');
    let row = array.shift();

    while(row !== 'Go Shopping!'){
        let commands = row.split(' ');
        if(commands[0] === 'Unnecessary'){
            let item = commands[1];
            if(shoppingList.includes(item)){

                let itemToRemove = shoppingList.indexOf(item);
                shoppingList.splice(itemToRemove, 1);
            }
        }else if(commands[0] === 'Urgent'){
            let item = commands[1];

            if(!shoppingList.includes(item)){
                shoppingList.unshift(item)
            }
        }else if(commands[0] === 'Correct'){
            let oldItem = commands[1];
            let newItem = commands[2];

            if(shoppingList.includes(oldItem)){
                let changeOldWithNew = shoppingList.indexOf(oldItem);
                shoppingList.splice(changeOldWithNew, 1, newItem);
            }
        }else if(commands[0] === 'Rearrange'){
            let item = commands[1];

            if(shoppingList.includes(item)){
                let removeItem = shoppingList.indexOf(item);
                shoppingList.splice(removeItem, 1);
                shoppingList.push(item)
            }
        }

        row = array.shift();
    }
    console.log(shoppingList.join(', '));
}
shoppingList
(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Salt",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
