const repeatString = function(s,r) {
    if(r < 0)
        return 'ERROR';
    let result ='';
    for(let i = 0;i<r;i++)
    {
        result+=s;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
