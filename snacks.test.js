const { getInitials, createSlug, average, isPalindrome } = require("./snacks.js")

//Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Gianluca Milesi")).toBe("G.M.")
    expect(getInitials("gianluca milesi")).toBe("G.M.")
    expect(getInitials("Gianluca  Milesi")).toBe("G.M.")
})

//Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Ciao")).toBe("ciao")
})

//Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([10, 20, 30])).toBe(20)
    expect(() => average([10, "prova"])).toThrow()
})

//Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})

//Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("anna ")).toBeTruthy()
    expect(isPalindrome("ciao")).toBeFalsy()
})

//Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido")
    expect(() => createSlug(null)).toThrow("Titolo non valido")
})