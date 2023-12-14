function maxGifts(houses) {
    const regalos = houses.slice(0, 2)
    if (regalos[0] > regalos[1]) {
        regalos[1] = regalos[0]
    }

    for (let i = 2; i < houses.length; i++) {
        regalos.push(Math.max(regalos[i - 1], houses[i] + regalos[i - 2]))
    }
    return regalos[houses.length - 1]
}