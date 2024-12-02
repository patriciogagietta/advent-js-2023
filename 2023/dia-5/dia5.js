function cyberReindeer(road, time) {
    const roadArray = [road]
    let posSig = '.'

    for (let i = 0; i < time - 1; i++) {
        if (i === 4) road = road.replaceAll('|', '*')
        let posTrineo = road.indexOf('S')

        if (road[posTrineo + 1] === '.' || road[posTrineo + 1] === '*') {
            road = road.split("")
            road[posTrineo] = posSig
            posSig = road[posTrineo + 1]
            road[posTrineo + 1] = 'S'
            road = road.join("")
        }
        roadArray.push(road)
    }
    return roadArray
}