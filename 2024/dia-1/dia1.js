function prepareGifts(gifts) {
    const set = new Set(gifts)
    return [...set].sort((a, b) => a - b)
}