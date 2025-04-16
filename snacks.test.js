const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./snacks.js")


describe("Manipolazione di Stringhe", () => {
    //Snack 1
    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials("Gianluca Milesi")).toBe("G.M.")
        expect(getInitials("gianluca milesi")).toBe("G.M.")
        expect(getInitials("Gianluca  Milesi")).toBe("G.M.")
    })

    //Snack 5
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome("anna")).toBeTruthy()
        expect(isPalindrome("anna ")).toBeTruthy()
        expect(isPalindrome("ciao")).toBeFalsy()
    })
})


describe("Operazioni su Array", () => {
    //Snack 3
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([10, 20, 30])).toBe(20)
        expect(() => average([10, "prova"])).toThrow()
    })

    //Snack 7
    let posts
    beforeEach(() => {
        posts = [
            {
                id: 1,
                title: "Jest",
                slug: "testing"
            },
            {
                id: 2,
                title: "Javascript",
                slug: "arrays"
            }
        ]
    })

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Javascript", slug: "arrays" })
        expect(findPostById(posts, 10)).toBe(null)
        expect(() => findPostById(posts, "ciao")).toThrow("ciao non è un id")
        expect(() => findPostById([1, 2], 2)).toThrow("Il formato non è valido")
    })

    //Snack 8 (Bonus)
    test("Dopo aver aggiunto un post con la funzione addPost, l'array posts deve contenere un elemento in più.", () => {
        addPost(posts, { id: 3, title: "Typescript", slug: "introduction" })
        expect(posts).toHaveLength(3)
    })
    test("Dopo aver rimosso un post con la funzione removePost, l'array posts deve contenere un elemento in meno.", () => {
        removePost(posts, 2)
        expect(posts).toHaveLength(1)
    })
})


describe("Generazione di Slug", () => {
    //Snack 2
    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("Ciao")).toBe("ciao")
    })

    //Snack 4
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
    })

    //Snack 6
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug("")).toThrow("Titolo non valido")
        expect(() => createSlug(null)).toThrow("Titolo non valido")
    })
})