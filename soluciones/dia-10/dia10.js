function createChristmasTree(ornaments, height) {
    let arbol = ""
    const espacio = " "

    for (let i = 0; i < height; i++) {
        let filaArbol = ""
        const ornamentIndex = i * (i + 1) / 2

        for (let j = 0; j <= i; j++) {
            filaArbol += ornaments[(ornamentIndex + j) % ornaments.length] + espacio
        }
        arbol += espacio.repeat(height - i - 1) + filaArbol.trim() + '\n'
    }
    arbol += espacio.repeat(height - 1) + "|" + '\n'

    return arbol
}
