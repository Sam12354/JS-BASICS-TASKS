function primeOrNonPrime(input){
    let command = input[0];
    let index = 1;
    let primeSum = 0;
    let primeNonSum = 0;

    while(command !== "stop"){
        let num = Number(command);
        let isPrime = true;

        if(num < 0){
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }
        
        for(let divisor = 2; divisor < num; divisor++){
            
            if(num % divisor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primeSum += num;
        }else {
            primeNonSum += num;
        }
        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${primeNonSum}`);
}
primeOrNonPrime
(["3", "9", "0", "7", "19", "4", "stop"]);
//(["30", "83", "33", "-1", "20", "stop"]);
