function findMissingNumbers(nums) {
    const numsUnique = [...new Set(nums)]
    const numMax = Math.max(numsUnique.length, ...numsUnique)
    const missingNumbers = []

    for (let i = 1; i <= numMax; i++) {
        if (!numsUnique.includes(i)) {
            missingNumbers.push(i)
        }
    }

    return missingNumbers
}

