function fixGiftList(received, expected) {
    const missing = {}
    const extra = {}

    const expectedArray = [...expected]

    for (const gift of received) {
        const index = expectedArray.indexOf(gift)

        if (index !== -1) {
            expectedArray.splice(index, 1)
        } else {
            extra[gift] = (extra[gift] || 0) + 1
        }
    }

    for (const gift of expectedArray) {
        missing[gift] = (missing[gift] || 0) + 1
    }

    return { missing, extra }
}