function blackFlag(array){
    let daysLast = Number(array.shift());
    let dayPludner = Number(array.shift());
    let expectedPlunder = Number(array.shift());
    let day = 1;
    let totalPlunder = 0;
    let additional = 0;

    for(let i = 0; i < daysLast; i++){
        totalPlunder += dayPludner
        if(day % 3 === 0){
            additional = dayPludner * 0.5
            totalPlunder += additional
        }
        if(day % 5 === 0){
            totalPlunder *= 0.7
        }
        day++
    }


    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        let percent = (totalPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }

}
blackFlag
(["10",
"20",
"380"])
