function groupWordsByLength(words) {
    const groupedWords = {};

    words.forEach(word => {
        const length = word.length;
        if (!groupedWords[length]) {
            groupedWords[length] = [word];
        } else {
            groupedWords[length].push(word);
        }
    });

    return groupedWords;
}

const words = ['apple', 'banana', 'pear', 'kiwi', 'orange'];
const output = groupWordsByLength(words);
console.log(output);
