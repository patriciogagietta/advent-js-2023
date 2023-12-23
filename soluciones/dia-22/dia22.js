function compile(code) {
    let count = 0
    let posRetorno = -1
    let posRetorno2 = -1
    let posFinalBloque = 0

    for (let i = 0; i < code.length; i++) {
        const c = code[i]

        posFinalBloque = (c == '¿' && count <= 0 ? code.indexOf('?', i) : posFinalBloque)

        if (i >= posFinalBloque) {
            if (posRetorno2 === i) {
                continue
            }

            count += (c == '+')
            count -= (c == '-')
            count *= (c == '*' ? 2 : 1)
            posRetorno = (c == '%' ? i : posRetorno)

            if (c === '<' && posRetorno !== -1) {
                posRetorno2 = i
                i = posRetorno
            }
        }
    }

    return count
}