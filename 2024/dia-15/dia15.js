function drawTable(data) {
    let draw = ''
    let line = ''
    let body = ''
    let columns = ''
    let lengthColumn1 = 0
    let lengthColumn2 = 0
    
    const keys = Object.keys(data[0])    
    const column1 = keys[0]
    const column2 = keys[1] || null

    for (let i = 0; i < data.length; i++) {
        lengthColumn1 = Math.max(lengthColumn1, column1.length, data[i][column1].toString().length)
        if (column2) {
            lengthColumn2 = Math.max(lengthColumn2, column2.length, data[i][column2].toString().length)
        }
    }

    const column1Upper = column1.charAt(0).toUpperCase() + column1.slice(1)

    columns = '| ' + column1Upper.padEnd(lengthColumn1) + ' |'
    line = '+' + '-'.repeat(lengthColumn1 + 2) + '+'

    if (column2) {
        const column2Upper = column2.charAt(0).toUpperCase() + column2.slice(1)
        columns += ' ' + column2Upper.padEnd(lengthColumn2) + ' |'
        line += '-'.repeat(lengthColumn2 + 2) + '+'
    }
    

    for (let i = 0; i < data.length; i++) {
        body += '\n' + '| ' + data[i][column1].toString().padEnd(lengthColumn1) + ' |'
        if (column2) {
            body += ' ' + data[i][column2].toString().padEnd(lengthColumn2) + ' |'
        }
    }

    draw = line + '\n' + columns + '\n' + line + body + '\n' + line 

    return draw
}