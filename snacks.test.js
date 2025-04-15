const { getInitials } = require("./snacks.js")

//Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Gianluca Milesi")).toBe("G.M.")
})