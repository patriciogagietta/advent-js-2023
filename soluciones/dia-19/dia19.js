function revealSabotage(store) {
    for (let row = 0; row < store.length; row++) {
        for (let col = 0; col < store[row].length; col++) {
            if (store[row][col] === '*') {
                continue
            }

            let count = 0

            if (store[row][col + 1] === '*') {
                count++
            }
            if (store[row][col - 1] === '*') {
                count++;
            }
            if (store[row - 1] && store[row - 1][col] === '*') {
                count++
            }
            if (store[row + 1] && store[row + 1][col] === '*') {
                count++
            }
            if (store[row - 1] && store[row - 1][col - 1] === '*') {
                count++
            }
            if (store[row - 1] && store[row - 1][col + 1] === '*') {
                count++
            }
            if (store[row + 1] && store[row + 1][col + 1] === '*') {
                count++
            }
            if (store[row + 1] && store[row + 1][col - 1] === '*') {
                count++
            }
            
            if (parseInt(store[row][col]) > 0) {
                count += parseInt(store[row][col]);
            }

            store[row][col] = count > 0 ? count.toString() : ' '
        }
    }
    
    return store
}

// Larga vida a los if xd