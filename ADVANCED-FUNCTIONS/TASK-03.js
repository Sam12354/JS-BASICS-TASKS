function createFibonacciGenerator() {
    let prev = 0, curr = 1;

    return function() {
        let next = prev;
        prev = curr;
        curr = next + curr;
        return next;
    };
    
}
