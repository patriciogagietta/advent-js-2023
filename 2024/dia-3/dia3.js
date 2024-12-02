function organizeInventory(inventory) {
    let obj = {}

    for (const inv of inventory){
        if (!obj[inv.category]){
            obj[inv.category] = {}
        }

        if (!obj[inv.category][inv.name]) {
            obj[inv.category][inv.name] = inv.quantity
        } else {
            obj[inv.category][inv.name] += inv.quantity
        }
    }
    return obj
}