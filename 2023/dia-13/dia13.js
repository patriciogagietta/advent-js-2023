function calculateTime(deliveries) {

    const tiempoLimite = 7 * 3600
    let tiempoTotal = 0
    let result = []

    for (let i = 0; i < deliveries.length; i++) {
        const [hora, min, seg] = deliveries[i].split(":").map(Number)

        tiempoTotal += hora * 3600
        tiempoTotal += min * 60
        tiempoTotal += seg
    }

    let tiempoDiferencia = Math.abs(tiempoTotal - tiempoLimite)

    const hora = Math.floor(tiempoDiferencia / 3600).toString()
    tiempoDiferencia = tiempoDiferencia % 3600

    const min = Math.floor(tiempoDiferencia / 60).toString()
    tiempoDiferencia = tiempoDiferencia % 60

    const seg = tiempoDiferencia.toString()

    if (tiempoTotal >= tiempoLimite) {
        result = [hora.padStart(2, "0"), min.padStart(2, "0"), seg.padStart(2, "0")].join(":")
    } else {
        result = "-" + [hora.padStart(2, "0"), min.padStart(2, "0"), seg.padStart(2, "0")].join(":")
    }

    return result
}