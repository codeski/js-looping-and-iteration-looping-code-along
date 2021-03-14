// Code your solutions in this file



function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        names[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return names
}

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}