function manufacture(gifts, materials) {
    return gifts.filter((gif) => gif.split("").every((letra) => materials.includes(letra)));
}
