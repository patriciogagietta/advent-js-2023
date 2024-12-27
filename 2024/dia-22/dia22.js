function generateGiftSets(gifts) {
    if (gifts.length < 1) return []

    let result = []

    for (let gift of gifts) {
        result.push([gift])
    }

    const generate = (actual, index) => {
        if (actual.length > 1) {
            result.push(actual)
        }

        for (let i = index; i < gifts.length; i++) {
            generate([...actual, gifts[i]], i + 1)
        }
    }

    generate([], 0)

    result.sort((a, b) => a.length - b.length)

    return result
}