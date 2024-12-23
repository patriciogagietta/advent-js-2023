function detectBombs(grid) {
    let array = []

    for (let i = 0; i < grid.length; i++) {
        let c = 0
        let arrayAux = []

        for (let j = 0; j < grid[i].length; j++) {
            if (i - 1 >= 0 && grid[i - 1][j]) c++
            if (i + 1 < grid.length && grid[i + 1][j]) c++
            if (j - 1 >= 0 && grid[i][j - 1]) c++
            if (j + 1 < grid[i].length && grid[i][j + 1]) c++
            if (i - 1 >= 0 && j + 1 < grid[i].length && grid[i - 1][j + 1]) c++
            if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1]) c++
            if (i + 1 < grid.length && j - 1 >= 0 && grid[i + 1][j - 1]) c++
            if (i + 1 < grid.length && j + 1 < grid[i].length && grid[i + 1][j + 1]) c++

            arrayAux.push(c)
            c = 0
        }
        array.push(arrayAux)
    }
    return array
}

console.log(detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]))