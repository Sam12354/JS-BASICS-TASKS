function guineaPigTask(array) {
    let quantityFoodKG = Number(array[0]);
    let hayKg = Number(array[1]);
    let coverKG = Number(array[2]);
    let guineaWeightKG = Number(array[3]);
    let days = 1;

    let foodInGrams = quantityFoodKG * 1000;
    let hayGrams = hayKg * 1000;
    let coverGrams = coverKG * 1000;

    while (days <= 30) {
        foodInGrams -= 300;
        
        if (foodInGrams < 0 || hayGrams < 0 || coverGrams < 0) {
            console.log("Merry must go to the pet store!");
            return;
        }

        if (days % 2 === 0) {
            let neededHay = foodInGrams * 0.05;
            hayGrams -= neededHay;
        }

        if (days % 3 === 0) {
            let coverNeeded = guineaWeightKG / 3;
            coverGrams -= coverNeeded * 1000;
        }

        days++;
    }

    let excessFood = (foodInGrams / 1000).toFixed(2);
    let excessHay = (hayGrams / 1000).toFixed(2);
    let excessCover = (coverGrams / 1000).toFixed(2);

    if (foodInGrams >= 0 && hayGrams >= 0 && coverGrams >= 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood}, Hay: ${excessHay}, Cover: ${excessCover}.`);
    }
}
guineaPigTask
(["10", 
"5", 
"5.2", 
"1"])
