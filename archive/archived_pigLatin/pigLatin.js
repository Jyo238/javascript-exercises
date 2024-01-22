function pigLatin(string) {
    const words = string.split(' ');
    return words.map(word => translateWord(word)).join(' ');
}

function translateWord(word) {
    const vowelRegex = /^[aeiou]/i;
    const consonantClusterRegex = /^(.*qu|[^aeiou]+)(.*)$/i;
    
    if (vowelRegex.test(word)) {
        return word + 'ay';
    }

    const match = consonantClusterRegex.exec(word);
    if (match) {
        return match[2] + match[1] + 'ay';
    }

    return word;
}

// Do not edit below this line
module.exports = pigLatin;
