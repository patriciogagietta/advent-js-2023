function decode(message) {

    let mensajeFormateado = ""
    const mensajeArray = []

    for (let i = 0; i < message.length; i++) {
        let letra = message[i]
        
        if (letra === "(") {
            mensajeArray.push(mensajeFormateado)
            mensajeFormateado = ""
        } else if (letra === ")") {
            let x = mensajeFormateado.split("").reverse().join("")
            mensajeFormateado = mensajeArray.pop() + x
        } else {
            mensajeFormateado += letra
        }
    }
    return mensajeFormateado
}