function findNaughtyStep(original, modified) {

    if (original === modified) return ''

    const arrayOriginal = original.split("")
    const arrayModified = modified.split("")

    const length = Math.max(arrayOriginal.length, arrayModified.length)

    for (let i = 0; i < length; i++) {
        if (arrayOriginal[i] !== arrayModified[i]) {
            return arrayOriginal.length >= arrayModified.length
                ? arrayOriginal[i]
                : arrayModified[i]
        }
    }
}
