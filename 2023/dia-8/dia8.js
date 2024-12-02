function organizeGifts(gifts) {

    let giftsFormateados = ''
    const giftsNumber = gifts.match(/[0-9]+/g)
    const giftsLetter = gifts.match(/[a-z]/gi)
    
    for (let i = 0; i < giftsNumber.length; i++){
        let gifNumber = giftsNumber[i]
        let gifLetter = giftsLetter[i]

        let pale = Math.floor(gifNumber / 50)
        gifNumber %= 50  

        let caja = Math.floor(gifNumber / 10)
        gifNumber %= 10

        giftsFormateados += `[${gifLetter}]`.repeat(pale) + `{${gifLetter}}`.repeat(caja)

        if (gifNumber > 0) giftsFormateados += `(${gifLetter.repeat(gifNumber)})`
    }
    return giftsFormateados
}