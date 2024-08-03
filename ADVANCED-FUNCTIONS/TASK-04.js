function breakfastRobot() {
    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    return function manager(command) {
        const parts = command.split(' ');
        const action = parts[0];

        if (action === 'restock') {
            const ingredient = parts[1];
            const quantity = Number(parts[2]);
            stock[ingredient] += quantity;
            return 'Success';
        }

        if (action === 'prepare') {
            const recipe = parts[1];
            const quantity = Number(parts[2]);
            const neededIngredients = recipes[recipe];

            for (let ingredient in neededIngredients) {
                if (stock[ingredient] < neededIngredients[ingredient] * quantity) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for (let ingredient in neededIngredients) {
                stock[ingredient] -= neededIngredients[ingredient] * quantity;
            }
            return 'Success';
        }

        if (action === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
        }
    };
}
