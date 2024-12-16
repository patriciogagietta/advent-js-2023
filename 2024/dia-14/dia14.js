function minMovesToStables(reindeer, stables) {
    
    const reindeerOrder = reindeer.sort((a,b) => a - b)
    const stablesOrder = stables.sort((a, b) => a - b)
    let totalMoviments = 0

    for (let i = 0; i < reindeer.length; i++) {
        if (reindeerOrder[i] >= stablesOrder[i]) {
            totalMoviments += reindeerOrder[i] - stablesOrder[i]
        } else {
            totalMoviments += stablesOrder[i] - reindeerOrder[i]
        }
    }

    return totalMoviments
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3