// Write a function that displays numbers from given start to given end and their sum. 
// The input comes as two number parameters

function printSum(num, num2){
    
    let emptyArr = []
    let sum = 0;
    for(let i = num; i <= num2; i++){
        let curNum = i;
        emptyArr.push(curNum)
        sum += curNum
    }
    console.log(emptyArr.join(' '));
    console.log(`Sum: ${sum}`);
    
}
printSum
(5, 10)
// (0, 26)
// (50, 60)