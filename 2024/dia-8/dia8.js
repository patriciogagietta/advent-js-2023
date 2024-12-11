function drawRace(indices, length) {
    let string = []

    for (let i = 0; i < indices.length; i++) {
        let displacement = " ".repeat(indices.length - i - 1)
        let line = `${"~".repeat(length)} /${i + 1}`
        let lineArray = line.split("")
        let position = null

        if (indices[i] > 0) {
            position = indices[i]
        } else if (indices[i] < 0) {
            position = length + indices[i]
        }

        if (position > 0 && position < length) {
            lineArray[position] = 'r'
        }

        string.push(displacement + lineArray.join(""))
        
    }

    return string.join('\n')
}