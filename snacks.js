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

function findPostById(posts, id) {
    if (isNaN(id)) throw new Error(`${id} non è un id`)
    posts.forEach(p => {
        if (p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined) {
            throw new Error("Il formato non è valido")
        }
    })
    return posts.find(p => p.id === id) || null
}


module.exports = { getInitials, createSlug, average, isPalindrome, findPostById }