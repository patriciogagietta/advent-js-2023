function findBalancedSegment(message) {
    let posiciones = []
    let posFinal = -1

    for (const [i, m] of message.entries()) {
        let count1 = 0
        let count0 = 0
        for (let j = i; j < message.length; j++) {
            const mm = message[j]

            count0 += (mm == 0)
            count1 += (mm == 1)

            if ((count0 === count1) && (j - i > posFinal)) {
                posFinal = j - i
                posiciones = [i, posFinal + i]
            }
        }
    }
    return posiciones
}