function isTreesSynchronized(tree1, tree2) {

    if (tree1.value !== tree2.value) return [false, tree1.value]

    const treeLeft = tree1.left && tree2.right ? isTreesSynchronized(tree1.left, tree2.right) : [true, tree1.value]
    const treeRigth = tree1.right && tree2.left ? isTreesSynchronized(tree1.right, tree2.left) : [true, tree1.value]

    if (!treeLeft[0] || !treeRigth[0]) return [false, tree1.value]

    return [true, tree1.value]
}