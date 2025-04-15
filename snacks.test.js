const { getInitials, createSlug, average } = require("./snacks.js")

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
})