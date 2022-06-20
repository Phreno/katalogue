let Langton = require('./Langton')

describe("init", () => {
    it("doit lancer les tests", function () {
        expect(true).toBe(true)
    })
})

describe("Langton", function () {
    var langton

    beforeEach(() => {
        langton = new Langton()

    })

    it("doit avoir une  grille contenant les cases noires de la fourmi", () => {
        expect(langton.grille).toBeDefined()
    })

    it("doit connaitre la position et la direction de la fourmi", () => {
        expect(langton.x).toBe(0)
        expect(langton.y).toBe(0)
    })

    it("doit alterner la case courante lorsqu'un pas est effectué", ()=>{
        langton.avancer()
        expect(langton.grille).toContain({x:0,y:0})
        langton.avancer()
        expect(langton.grille).toContain({x:0,y:-1})
        langton.avancer()
        expect(langton.grille).toContain({x:-1,y:-1})
        langton.avancer()
        expect(langton.grille).toContain({x:-1,y:0})
    })

    describe("pour tourner", () => {

        it("doit historiser les positions de la fourmi", () => {
            expect(langton.x).toEqual(0)
            expect(langton.y).toEqual(0)
        })

        describe("en venant de la gauche (-1, 0)", () => {


            it("doit retourner l'offset de la case précédente", () => {
                expect(langton.precedent.x).toEqual( -1)
                expect(langton.precedent.y).toEqual( 0)
            })

            it("doit tourner à droite si la case est noire (0, 1)", ()=>{
                langton.grille = [{ x: 0, y: 0 }]
                langton.avancer()
                expect(langton.x).toBe(0)
                expect(langton.y).toBe(1)
            })

            it("doit tourner à gauche si la case est blanche (0, -1)", ()=>{
                langton.avancer()
                expect(langton.x).toBe(0)
                expect(langton.y).toBe(-1)
            })

            it("doit tourner 3 fois à gauche depuis le départ", () => {
                expect(langton.precedent.x).toBe(-1)
                expect(langton.precedent.y).toBe(0)
                expect(langton.x).toBe(0)
                expect(langton.y).toBe(0)
                langton.avancer()
                expect(langton.precedent.x).toBe(0)
                expect(langton.precedent.y).toBe(0)
                expect(langton.x).toBe(0)
                expect(langton.y).toBe(-1)
                langton.avancer()
                expect(langton.precedent.x).toBe(0)
                expect(langton.precedent.y).toBe(-1)
                expect(langton.x).toBe(-1)
                expect(langton.y).toBe(-1)
                langton.avancer()
                expect(langton.precedent.x).toBe(-1)
                expect(langton.precedent.y).toBe(-1)
                expect(langton.x).toBe(-1)
                expect(langton.y).toBe(0)
                langton.avancer()
                expect(langton.precedent.x).toBe(-1)
                expect(langton.precedent.y).toBe(0)
                expect(langton.x).toBe(0)
                expect(langton.y).toBe(0)
            })
        })



        // - si elle tourne à gauche, elle doit se trouver sur la case (-1, 0)
        // - si elle tourne à droite, elle doit se trouver sur la case (1, 0)


        // venant de la droite (1, 0)
        // - si elle tourne à gauche, elle doit se trouver sur la case (1, 0)
        // - si elle tourne à droite, elle doit se trouver sur la case (-1, 0)
        // venant du haut (4,5)
        // - si elle tourne à gauche, elle doit se trouver sur la case (5,6): (0, 1)
        // - si elle tourne à droite, elle doit se trouver sur la case (5,4): (0, -1)
        // venant du bas (6,5)
        // - si elle tourne à gauche, elle doit se trouver sur la case (5,4): (0, -1)
        // - si elle tourne à droite, elle doit se trouver sur la case (5,6): (0, 1)

    })

})