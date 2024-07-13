function softUniReception(array){
    let firstEmployee = Number(array.shift());
    let secondEmployee = Number(array.shift());
    let thirdEmployee = Number(array.shift());

    let studentsAnswerPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let students = Number(array.shift());
    let hours = 0;

    while(students > 0){
        hours++;
        students -= studentsAnswerPerHour;
        if(hours % 4 === 0){
            hours++
        }  
        
    }
    console.log(`Time needed: ${hours}h.`);

}
softUniReception 
(['5','6','4','20']);