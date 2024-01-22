const caesar = function(str,num) {
    let ans = '';
    if(!str)
        return '';

    for(let c of str)
    {
        if (!c.match(/[a-z]/i)) {
            ans+=c;
            continue;
        }
        
        let charCode = c.charCodeAt(0);
        let base = c === c.toUpperCase() ? 65 : 97;
        let shiftedCharCode = ((charCode - base + num) % 26 + 26) % 26 + base;
        ans += String.fromCharCode(shiftedCharCode);
    }
    return ans;
};

// Do not edit below this line
module.exports = caesar;
