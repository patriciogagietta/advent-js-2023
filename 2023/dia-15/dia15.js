function autonomousDrive(store, movements) {

    let row = 0
    for (let i = 0; i < store.length; i++) {
        if (store[i].includes('!')) {
            row = i
            break
        }
    }

    let col = store[row].indexOf('!')

    for (const mov of movements) {
        if (mov === 'R' && store[row][col + 1] === '.') {
            store[row] = store[row].substring(0, col) + '.' + '!' + store[row].substring(col + 2)
            col++
        } else if (mov === 'L' && store[row][col - 1] === '.') {
            store[row] = store[row].substring(0, col - 1) + '!' + '.' + store[row].substring(col + 1)
            col--
        } else if (mov === 'U' && store[row - 1] && store[row - 1][col] === '.') {
            store[row] = store[row].substring(0, col) + '.' + store[row].substring(col + 1)
            store[row - 1] = store[row - 1].substring(0, col) + '!' + store[row - 1].substring(col + 1)
            row--
        } else if (mov === 'D' && store[row + 1] && store[row + 1][col] === '.') {
            store[row] = store[row].substring(0, col) + '.' + store[row].substring(col + 1)
            store[row + 1] = store[row + 1].substring(0, col) + '!' + store[row + 1].substring(col + 1)
            row++
        }
    }
    return store
}