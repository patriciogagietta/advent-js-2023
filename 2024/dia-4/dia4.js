function createXmasTree(height, ornament) {
    let arbol = ''
    let tronco = ''

    for (let i = 1; i <= height; i++) {
        arbol += '_'.repeat(height - i) + ornament.repeat(i * 2 - 1) + '_'.repeat(height - i) + '\n'
    }

    tronco += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n'
    tronco += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)

    return arbol + tronco
}