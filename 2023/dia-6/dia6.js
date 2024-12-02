function maxDistance(movements) {
    let contDerecha = 0
    let contIzquierda = 0
    let contAsterisco = 0

    for (let i = 0; i < movements.length; i++){

        if (movements[i] === '>'){
            contDerecha++
        } else if (movements[i] === '<'){
            contIzquierda++
        } else {
            contAsterisco++
        }
    }
    return contDerecha >= contIzquierda
    ? contDerecha - contIzquierda + contAsterisco
    : contIzquierda - contDerecha + contAsterisco
}