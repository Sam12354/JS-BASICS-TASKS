function zadacha2(input){
    let array = input.split(' ')

    let inventory = { shards: 0, fragments: 0, motes: 0 };
    let junkedItems = {}

    for(let i = 0; i < array.length; i += 2){
        let count = Number(array[i])
        let items = array[i + 1].toLowerCase()
        
        if(items in inventory){
            inventory[items] += count
            if(inventory[items] + count >= 250){
                inventory[items] -= 250
                switch(items){
                    case "shards":
                        console.log(`${"Shadowmourne"} obtained!`);
    
                            break;
                        case "fragments":
                            console.log(`${"Valanyr"} obtained!`);
                            
                            break;
                        case "motes":
                            console.log(`${"Dragonwrath"} obtained!`);
    
                            break;
                }
            }
        }else{
        if(items in junkedItems){
            junkedItems[items] += count
        }else{
            junkedItems[items] = count
        }
    }

    }
    let keyEntriesSort = Object.entries(inventory).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    let junkMaterialsEntries = Object.entries(junkedItems).sort((a, b) => a[0].localeCompare(b[0]))
    
    for(let [element1, element2] of keyEntriesSort){
        console.log(`${element1}: ${element2}`);
    }
    for(let [element1, element2] of junkMaterialsEntries){
        console.log(`${element1}: ${element2}`);
    }
    
}
zadacha2
('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')