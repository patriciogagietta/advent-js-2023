function isRobotBack(moves) {
    let posEnd = [0, 0]
    let inverted = false
    const executedMoves = []

    for (let i = 0; i < moves.length; i++) {
        const actualMove = moves[i]

        if (actualMove === '*') {
            const nextMove = moves[i + 1]

            if (nextMove === 'L') posEnd[0] -= 2
            else if (nextMove === 'R') posEnd[0] += 2
            else if (nextMove === 'U') posEnd[1] += 2
            else if (nextMove === 'D') posEnd[1] -= 2

            i++
            continue
        }

        if (actualMove === '!') {
            inverted = true
            continue
        }

        if (actualMove === '?') {
            const nextMove = moves[i + 1]
            const verifiExecutedMoves = executedMoves.includes(nextMove)

            if (!verifiExecutedMoves) {
                executedMoves.push(nextMove)
                if (nextMove === 'L') posEnd[0] -= 1
                else if (nextMove === 'R') posEnd[0] += 1
                else if (nextMove === 'U') posEnd[1] += 1
                else if (nextMove === 'D') posEnd[1] -= 1
            }
            i++
            continue
        }

        let move = actualMove

        if (inverted) {
            if (move === 'L') move = 'R'
            else if (move === 'R') move = 'L'
            else if (move === 'U') move = 'D'
            else if (move === 'D') move = 'U'
            inverted = false
        }

        executedMoves.push(move)
        
        if (move === 'L') posEnd[0] -= 1
        else if (move === 'R') posEnd[0] += 1
        else if (move === 'U') posEnd[1] += 1
        else if (move === 'D') posEnd[1] -= 1
    }

    return posEnd[0] === 0 && posEnd[1] === 0 ? true : posEnd
}

console.log(isRobotBack('R?R'))     // [1, 0]