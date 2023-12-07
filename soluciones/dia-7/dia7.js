function drawGift(size, symbol) {

    const hastag = "#"
    const salto = "\n"
    const espacio = " "
    
    if (size <= 1) return hastag + salto
    
    // primera linea
    let dibujo = espacio.repeat(size - 1) + hastag.repeat(size) + salto
    
    // parte superior
    for (let i = size - 2; i > 0; i--) {
        dibujo += espacio.repeat(i) + hastag + symbol.repeat(size - 2) + 
        hastag + symbol.repeat(size - 2 - i) + hastag + salto;
    }

    // linea del medio
    dibujo += hastag.repeat(size) + symbol.repeat(size - 2) + hastag + salto
    
    // parte inferior

    let x = 0;
    for (let i = size - 2; i > 0; i--) {
        dibujo += hastag + symbol.repeat(size - 2) + hastag + symbol.repeat(size - 3 - x) + hastag + salto
        x++
    }

    // ultima linea
    dibujo += hastag.repeat(size) + salto
    
    return dibujo
}