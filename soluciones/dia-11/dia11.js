function getIndexsForPalindrome(word) {

    if (word.split("").reverse().join("") === word) return []

    const wordLength = word.length
    const midLength = Math.floor(wordLength / 2)
    const wordArray = [...word]

    for (let i = 0; i <= midLength; i++) {
        for (let j = i + 1; j < wordLength; j++) {
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]

            if (wordArray.join("") === wordArray.slice("").reverse().join("")) {
                return [i, j]
            }
            [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]
        }
    }
    return null
}

getIndexsForPalindrome('aaababa')