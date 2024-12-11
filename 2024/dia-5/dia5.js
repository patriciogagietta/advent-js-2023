function organizeShoes(shoes) {
    let zapatillasEmparejadas = []
    let indices = []

    for (let i = 0; i < shoes.length; i++) {
        if (indices.includes(i)) {
            continue
        }

        for (let z = 0; z < shoes.length; z++) {
            if (!indices.includes(z) && i !== z && shoes[i].size === shoes[z].size &&
                ((shoes[i].type === 'I' && shoes[z].type === 'R') ||
                (shoes[i].type === 'R' && shoes[z].type === 'I'))) {

                indices.push(z)
                indices.push(i)
                
                zapatillasEmparejadas.push(shoes[i].size)
                break
            }
        }
  }
    return zapatillasEmparejadas
}