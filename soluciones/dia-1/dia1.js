function findFirstRepeated(gifts) {
    const gifRepetido = gifts.find((gif, index) => gifts.indexOf(gif) !== index);

    if (gifRepetido !== undefined) return gifRepetido;

    return -1;
}