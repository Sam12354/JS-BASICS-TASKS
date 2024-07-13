function numbers(input){
    let array = input.split(' ').map(Number);
    
    let count = 0;
    let sum = 0;
    for(let num of array){
        count++;
        sum += num
    }

    let avgNum = sum / count;
    
    let newArr = [];
    for(let num of array){
        if(num > avgNum){
            newArr.push(num)
        }
    }
     
    let sortedArr = newArr.sort((a, b) => b - a)
    
    if(sortedArr.length > 5){
        sortedArr.length = 5
    }

    if(sortedArr.length <= 0){
        console.log('No');
    }else{
        console.log(sortedArr.join(' '));
    }
}
numbers
('5 2 3 4 -10 30 40 50 20 50 60 60 51')
