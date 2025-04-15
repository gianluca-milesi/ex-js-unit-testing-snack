const { getInitials, createSlug } = require("./snacks.js")

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