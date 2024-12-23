function findInAgenda(agenda, phone) {
    let dataFinal = { name: '', address: ''}
    const agendaSplit = agenda.split('\n')

    const phoneFind = agendaSplit.filter((a) => a.includes(phone))

    if (phoneFind.length > 1 || phoneFind.length === 0) {
        return null
    }

    const dataMatch = phoneFind.join('').match(/[a-zA-Z\s<>]/g).join('')

    const dataSplit = dataMatch.split('<')

    dataFinal.address = phoneFind[0].replace(/<.*>|\+[\d-]+/g, '').trim()

    if (dataSplit[0].includes('>')) {
        dataFinal.name = dataSplit[0].replace(/>/g, '').trim('')
    } else {
        dataFinal.name = dataSplit[1].replace(/>/g, '').trim('')
    }

    return dataFinal
}