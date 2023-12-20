function revealSabotage(store) {
    for (let row = 0; row < store.length; row++) {
        for (let col = 0; col < store[row].length; col++) {
            if (store[row][col] === '*') {
                continue
            }

            let count = 0

            const der = store[row][col + 1]
            const izq = store[row][col - 1]
            const arriba = store[row - 1]?.[col]
            const abajo = store[row + 1]?.[col]
            const arribaIzq = store[row - 1]?.[col - 1]
            const arribaDer = store[row - 1]?.[col + 1]
            const abajoIzq = store[row + 1]?.[col - 1]
            const abajoDer = store[row + 1]?.[col + 1]

            const pos = [der, izq, arriba, abajo, arribaIzq, arribaDer, abajoIzq, abajoDer]

            for (const adyasente of pos) {
                count += (adyasente == '*')
            }
            
            count += (parseInt(store[row][col]) > 0)

            store[row][col] = count > 0 ? count.toString() : ' '
        }
    }
    
    return store
}