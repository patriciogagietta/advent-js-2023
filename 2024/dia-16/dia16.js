function removeSnow(s) {

    let arrayRemove = []

    for (let i = 0; i < s.length; i++) {
        if (arrayRemove.length > 0 && arrayRemove[arrayRemove.length - 1] === s[i]) {
            arrayRemove.pop()
        } else {
            arrayRemove.push(s[i])
        }
    }

    return arrayRemove.join('')
}