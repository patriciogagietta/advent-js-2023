function distributeGifts(weights) {

    const numRows = weights.length
    const numCols = weights[0].length

    let juguetesDistribuidos = new Array(numRows)
    for (let i = 0; i < numRows; i++) {
        juguetesDistribuidos[i] = new Array(numCols)
    }
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            let countDividir = +(weights[row][col] != null)
            let acumuladorRegalos = weights[row][col]

            const arriba = weights[row - 1]?.[col]
            const abajo = weights[row + 1]?.[col]
            const der = weights[row][col + 1]
            const izq = weights[row][col - 1]

            const pos = [arriba, abajo, der, izq].filter((a) => {
                return a !== undefined && a !== null
            })

            for (const adyasente of pos) {
                acumuladorRegalos += adyasente
                countDividir++
            }

            const promedio = Math.round(acumuladorRegalos / countDividir)
            juguetesDistribuidos[row][col] = promedio
        }
    }
    return juguetesDistribuidos
}