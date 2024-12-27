function execute(code) {
    let acc = 0
    let stack = []

    for (let i = 0; i < code.length; i++) {
        let char = code[i]

        if (char === '+') {
            acc++
        } else if (char === '-') {
            acc--
        } else if (char === '>') {
            continue
        } else if (char === '{') {
            if (acc === 0) {
                while (code[i] !== '}') {
                    i++
                }
            }
        } else if (char === '}') {
            continue
        } else if (char === '[') {
            if (acc === 0) {
                let openBrackets = 1

                while (openBrackets > 0) {
                    i++
                    if (code[i] === '[') openBrackets++
                    if (code[i] === ']') openBrackets--
                }
            } else {
                stack.push(i)
            }
        } else if (char === ']') {
            if (acc !== 0) {
                i = stack[stack.length - 1] - 1
            } else {
                stack.pop()
            }
        }
    }

    return acc
}