function zad2(array) {
    let arrayToChange = array.shift().split("|");
 
    let row = array.shift();
    while (row !== "Yohoho!") {
        let commands = row.split(" ");
        let command = commands.shift();
 
        if (command === "Loot") {
            // както вече казах по условие получаваш n на брой елементи и е необходим цикъл:
            let item = '';
            for (let idx = 0; idx < commands.length; idx++) {
                item = commands[idx];
                if (!arrayToChange.includes(item)) {
                    arrayToChange.unshift(item);
                }
            }
            // if (!arrayToChange.includes(item1) && item1 !== undefined) {
            //     arrayToChange.unshift(item1);
            // }
            // if (!arrayToChange.includes(item2) && item2 !== undefined) {
            //     arrayToChange.unshift(item2);
            // }
            // if (!arrayToChange.includes(item3) && item3 !== undefined) {
            //     arrayToChange.unshift(item3);
            // }
        } else if (command === "Drop") {
            let idx = Number(commands[0]); //тук поправих, защото вече ги няма дефинирани твоите item-и
            if (idx >= 0 && idx <= arrayToChange.length - 1) {
                let itemRemove = arrayToChange.splice(idx, 1).join(" ");
 
                arrayToChange.push(itemRemove);
            }
        } else if (command === "Steal") {
            let idx1 = Number(commands[0]);
 
            let itemsSteal = arrayToChange.splice(-idx1);
            // if (itemsSteal.length > 0) {            - тази проверка от къде се взе, не виждам в условието някой да пита дали откраднатите
            //     console.log(itemsSteal.join(", ")); - предмети са повече от 0 и при положение, че печаташ едно и също
            // }                                       - какъв е смисъла, то поне да се печаташе нещо друго!?
            console.log(itemsSteal.join(", "));
        }
 
        row = array.shift();
    }
    let sumAllItems = 0;
    let words = 0;
    for (let i = 0; i < arrayToChange.length; i++) {
        let word = arrayToChange[i];
        for (let j = 0; j < word.length; j++) {
            sumAllItems += 1;
        }
        words++;
    }
    let avgHunt = sumAllItems / words;
    if (arrayToChange.length !== 0) {
        console.log(`Average treasure gain: ${avgHunt.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
    
}
zad2
(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])