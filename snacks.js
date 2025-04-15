function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(str) {
    return str.toLowerCase()
}

function average(numbers) {
    let sum = 0
    numbers.forEach(num => sum += num)
    return sum / numbers.length
}

module.exports = { getInitials, createSlug, average }