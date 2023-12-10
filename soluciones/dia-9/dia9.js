function adjustLights(lights) {
    let cont1 = 0
    let cont2 = 0
    const color = ['🟢', '🔴']

    for (let i = 0; i < lights.length; i++) {
        let indice = i % 2 !== 0 ? 1 : 0

        if (color[indice] !== lights[i]) {
            cont1++
        } else if (color[1 - indice] !== lights[i]) {
            cont2++
        }
    }
    return Math.min(cont1, cont2)
}
