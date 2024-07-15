function izpit(array){
    let row = array.shift();
    let curFood = {};
    let allFood = [];
    let allSold = 0;

    while(row !== 'Complete'){
        let commands = row.split(' ');

        if(commands[0] === 'Receive'){
            let qty = Number(commands[1]);
            let food = commands[2];

            if(qty <= 0){
                row = array.shift()
                continue;
            }

            let findFood = allFood.find(f => f.food === food)
            if(findFood){
                findFood.qty += qty

            }else{
                curFood = { qty, food }
                allFood.push(curFood)

            }

        }else if(commands[0] === 'Sell'){
            let qty = Number(commands[1]);
            let food = commands[2];

            let findFood = allFood.find(f => f.food === food)
            if(findFood){
                if(findFood.qty < qty){
                    let soldFood = findFood.qty 
                    allSold += soldFood

                    let idx = allFood.indexOf(findFood);
                    allFood.splice(idx, 1);

                    console.log(`There aren't enough ${food}. You sold the last ${soldFood} of them.`);

                }else if(findFood.qty >= qty){
                    findFood.qty -= qty
                    allSold += qty

                    if(findFood.qty <= 0){
                        let idx = allFood.indexOf(findFood)
                        allFood.splice(idx, 1)
                        console.log(`You sold ${qty} ${food}.`);
                    }else{
                        console.log(`You sold ${qty} ${food}.`);
                    }

                }

            }else{
                console.log(`You do not have any ${food}.`);
            }

        }

        row = array.shift()
    }

    for(let curFood of allFood){
        console.log(`${curFood.food}: ${curFood.qty}`);
    }

    console.log(`All sold: ${allSold} goods`);
}
 
izpit
([
    "Receive 10 muffins",
"Receive 23 bagels",
"Sell 5 muffins",
"Sell 10 bagels",
"Complete"

])