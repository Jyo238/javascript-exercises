const fibonacci = function(n,memo = []) {
    n = parseInt(n, 10);
    if(n < 0)
        return "OOPS";

    if(memo[n] !== undefined)
        return memo[n];
    if(n <= 1)
        return n;
    memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo);

    return memo[n];
};

// Do not edit below this line
module.exports = fibonacci;
