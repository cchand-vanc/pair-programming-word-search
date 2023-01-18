const wordSearch = (letters, word) => {
    if (letters.length < 1 || word.length < 1) {
        return "Please check your conditions";
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    let verticalJoin = "";
    for (let i = 0; i < letters.length - 1; i++) {
        for (let j = 0; j < letters.length; j++) {
            verticalJoin += letters[j][i];
        }
    }
    for (let char of verticalJoin) {
        if (char.includes(word)) {
            return true;
        }
    }
    return false;
}

wordSearch([[1, 2, 3, 4, 5]], "STRING")

module.exports = wordSearch