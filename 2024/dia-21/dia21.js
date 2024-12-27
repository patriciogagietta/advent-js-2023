function treeHeight(tree) {

    if (!tree) {
        return 0
    }

    return Math.max(treeHeight(tree.left) + 1, treeHeight(tree.right) + 1)
}