function checkIsValidCopy(original, copy) {

    const degradeOrder = "abcdefghijklmnopqrstuvwxyz#+:. "
    let isCopy = true

    for (let i = 0; i < original.length; i++) {
        const originalChar = original[i].toLowerCase()
        const copyChar = copy[i]

        if (originalChar === copyChar) continue

        const indexOriginal = degradeOrder.indexOf(originalChar)
        const indexCopy = degradeOrder.indexOf(copyChar)

        if (indexCopy === -1 || indexCopy <= indexOriginal) {
            isCopy = false
            break
        }
    }
    return isCopy
}