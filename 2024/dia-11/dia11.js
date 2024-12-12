function decodeFilename(filename) {

    let arrayFilename = filename.split('')
    const firstIndex = arrayFilename.findIndex((e) => e === '_')
    const lastIndex = arrayFilename.findLastIndex((e) => e === '.')

    const filenameFormated = arrayFilename.slice(firstIndex + 1, lastIndex).join('')

    return filenameFormated
}
