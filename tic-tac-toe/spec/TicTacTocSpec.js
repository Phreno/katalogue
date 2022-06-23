let TicTacToe = require("./TicTacToe")

describe("init", () => {
    it("doit lancer les tests", () => {
        expect(true).toBe(true)
    })
})

describe("TicTacToe", () => {
    let game
    beforeEach(() => game = new TicTacToe())
    it("doit avoir une fonction dessine()", () => expect(game.dessine).toBeDefined())
    describe("dessine", () => {
        it("doit retourner une grille affichable", () => {
            expect(game.dessine()).toBe(
                [
                    "   |   |   ",
                    "-----------",
                    "   |   |   ",
                    "-----------",
                    "   |   |   "
                ].join("\n")
            )
        })
    })
    it("doit avoir une grille", () => expect(game.grille).toBeDefined())
    describe("grille", () => {
        it("doit faire 3x3", () => {
            expect(game.grille.length).toBe(3)
            game.grille.forEach(el => expect(el.length).toBe(3))
        })
    })
    it("doit avoir une fonction pour cocher", () => expect(game.tick).toBeDefined())
    describe("tick", () => {
        it("doit pouvoir cocher une case pour le joueur un (0, 0)", () => {
            game.tick("X", { x: 0, y: 0 })
            expect(game.dessine()).toBe(
                [
                    " X |   |   ",
                    "-----------",
                    "   |   |   ",
                    "-----------",
                    "   |   |   "
                ].join("\n")
            )
        })
    })
    it("doit pouvoir dire si le jeu est terminé", () => expect(game.estTerminé).toBeDefined())
    describe("estTerminé", () => {
        it("doit etre terminé si toutes les cases sont remplies", () => {
            game.tick("x", { x: 0, y: 0 })
            game.tick("x", { x: 1, y: 0 })
            game.tick("x", { x: 2, y: 0 })

            game.tick("x", { x: 0, y: 1 })
            game.tick("x", { x: 1, y: 1 })
            game.tick("x", { x: 2, y: 1 })

            game.tick("x", { x: 0, y: 2 })
            game.tick("x", { x: 1, y: 2 })
            game.tick("x", { x: 2, y: 2 })

            expect(game.estTerminé()).toBeTrue()
        })
    })
    it("doit pouvoir récupérer le contenu d’une colonne", () => expect(game.colonne).toBeDefined())
    describe("colonne", () => {
        it("doit pouvoir retourner la première colonne", () => {
            game.tick("x", { x: 0, y: 0 })
            game.tick("y", { x: 0, y: 1 })
            game.tick("z", { x: 0, y: 2 })
            expect(game.colonne(0)).toEqual(["x", "y", "z"])
        })
    })
    it("doit déterminer si un joueur à colonisé une colonne", () => expect(game.colonisateur).toBeDefined())
    describe("colonisateur", () => {
        it("doit nommer le joueur qui a rempli toutes les cases", () => {
            game.tick("x", { x: 0, y: 0 })
            game.tick("x", { x: 0, y: 1 })
            game.tick("x", { x: 0, y: 2 })
            expect(game.colonisateur(game.colonne(0))).toBe("x")
        })
        it("doit retourner false si toutes les cases sont vides", () => expect(game.colonisateur(game.colonne(0))).toBeFalsy())
    })
    it("doit pouvoir récupérer un tableau qui contient les colonnes", ()=>expect(game.colonnes).toBeDefined())
    it("doit pouvoir récupérer un tableau qui contient les diagonales", ()=> expect(game.diagonales).toBeDefined())
    describe("diagonales", ()=>{
        it("doit contenir les diagonales", ()=>{
            game.tick("00", {x:0, y:0})
            game.tick("11", {x:1, y:1})
            game.tick("22", {x:2, y:2})
            game.tick("20", {x:2, y:0})
            game.tick("02", {x:0, y:2})
            expect(game.diagonales()).toEqual([
                ["00", "11", "22"],
                ["02", "11", "20"]
            ])
        })
    })
})