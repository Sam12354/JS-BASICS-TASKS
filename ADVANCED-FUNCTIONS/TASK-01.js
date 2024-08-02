function sortArray (arr, op){
    if(op === 'asc'){
        return arr.sort((a, b) => a - b)
    }else{
        return arr.sort((a, b) => b - a)
    }
}
