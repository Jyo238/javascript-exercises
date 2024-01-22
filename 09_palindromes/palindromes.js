const palindromes = function (s) {
    const cleanedString = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    let left = 0,right = cleanedString.length-1;
    while(right > left)
    {
        if(cleanedString[right] !== cleanedString[left])
            return false;
        
        left++;
        right--;
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
