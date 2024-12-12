function calculatePrice(ornaments) {
    const priceOrnaments = {
        '*': 1,
        'o': 5,
        '^': 10,
        '#': 50,
        '@': 100
    }

    let priceTree = 0
    const arrayOrnaments = ornaments.split('')

    for (let i = 0; i < arrayOrnaments.length; i++) {
        if (priceOrnaments[arrayOrnaments[i]] < priceOrnaments[arrayOrnaments[i + 1]]) {
            priceTree -= priceOrnaments[arrayOrnaments[i]]
        } else {
            priceTree += priceOrnaments[arrayOrnaments[i]]
        }
    }

    return priceTree ? priceTree : undefined
}