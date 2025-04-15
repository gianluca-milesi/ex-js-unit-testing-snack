function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ").filter(str => str !== "")
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(str) {
    if (!str) throw new Error("Titolo non valido")
    return str.toLowerCase().replaceAll(" ", "-")
}

function average(numbers) {
    numbers.forEach(num => {
        if (isNaN(num)) throw new Error("Accetta solo numeri")
    })
    let sum = 0
    numbers.forEach(num => sum += num)
    return sum / numbers.length
}

function isPalindrome(str) {
    const reversedStr = str.trim().split("").reverse().join("")
    return reversedStr === str.trim()
}


module.exports = { getInitials, createSlug, average, isPalindrome }