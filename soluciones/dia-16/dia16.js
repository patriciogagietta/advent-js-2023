function transformTree(tree) {
    function createNodos(index) {
        if (tree[index] === null  || index >= tree.length) return null
    
        return {
        'value': tree[index],
        'left': createNodos(2 * index + 1),
        'right': createNodos(2 * index + 2)
        }
    }
    const result = createNodos(0)
    return result
}