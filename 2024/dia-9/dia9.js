function moveTrain(board, mov) {
    let word = null
    let positionLocomotoraRow = null
    let positionLocomotoraCol = null
    const movs = {
        'L': [0, -1], 'R': [0, 1], 'U': [-1, 0], 'D': [1, 0]
    }
    const options = {
        'o': 'crash', '*': 'eat', '·': 'none', 'undefined': 'crash'
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '@') {
                positionLocomotoraRow = i
                positionLocomotoraCol = j
                break
            }
        }
    }

    let [row, col] = movs[mov]
    positionLocomotoraRow += row
    positionLocomotoraCol += col

    word = options[board[positionLocomotoraRow]?.[positionLocomotoraCol]]

    return word
}

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica