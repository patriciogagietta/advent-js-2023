function createFrame(names) {
    let length = 0
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > length) {
            length = names[i].length
        }
    }

    let name = ''
    for (let j = 0; j < names.length; j++) {
        name += '* ' + names[j].padEnd(length) + ' *\n'
    }

    const startFinalLine = '*'.repeat(length + 4)

    const finalName = startFinalLine + '\n' + name + startFinalLine

    return finalName
}
