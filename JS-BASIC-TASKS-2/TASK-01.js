function sumDigits(input){
    let sum = 0;
    let numbers = String(input);

    for(let i = 0; i < numbers.length; i++){
        let curNumber = Number(numbers[i]);
        sum += curNumber
    }
    console.log(sum);
}
sumDigits
(245678)
// (97561)
// (543)
