function fixPackages(packages) {
    let message = ''
    let array = []

    for (const letra of packages) {
        if (letra === '(') {
            array.push(message)
            message = ''
        } else if (letra === ')') {
            let msgReverse = message.split("").reverse().join("")
            message = array.pop() + msgReverse
        } else {
            message += letra
        }
    }
    
    return message
}