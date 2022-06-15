let Langton = require('./Langton');

describe("init", () => {
    it("doit lancer les tests", function () {
        expect(true).toBe(true);
    });
})

describe("Langton", function () {
    var langton;

    beforeEach(() => {
        langton = new Langton();

    })

    it("doit avoir une  grille contenant les cases noires de la fourmi", () => {
        expect(langton.grille).toBeDefined();
    })

    it("doit connaitre la position et la direction de la fourmi", () => {
        expect(langton.x).toBe(0);
        expect(langton.y).toBe(0);
        expect(langton.direction).toBeDefined();
    })

    it("doit pouvoir dire si la fourmi est sur une case noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
    })

    it("doit tourner à gauche si la case est blanche", () => {
        langton.grille = [];
        expect(langton.estSurUneCaseNoire()).toBeFalsy();
        expect(langton.direction()).toBe('gauche');
    })

    it("doit tourner à droite si la case est noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
        expect(langton.direction()).toBe('droite');
    })



    describe("pour tourner", () => {
        // Exemple avec les coordonnées (x, y).
        // Fourmi sur la case (0, 0)
        // ------------------------
        // -1, -1   | 0, -1 | 1, -1
        // -1, 0    |[0, 0] | 1, 0
        // -1, 1    | 0, 1  | 1, 1
        // ========================
        it("doit pouvoir localiser les cases voisines", () => {
            expect(langton.voisinage).toEqual([
                { x: -1, y: 0 },
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: 0, y: 1 }
            ]);

        })

        it("doit historiser les positions de la fourmi", () =>
            expect(langton.historique)
                .toEqual([{ x:-1, y: 0 }])
        )

        describe("en venant de la gauche (-1, 0)", () => {
            // ------------------------
            // -1, -1   | 0, -1 | 1, -1
            // -1, 0    |[0, 0] | 1, 0
            // -1, 1    | 0, 1  | 1, 1
            // ========================

            it("doit retourner l'offset de la case précédente", () => {
                expect(langton.precedent()).toEqual({ x: -1, y: 0 });
            })

            it("doit tourner à droite si la case est noire (0, 1)", ()=>{
                langton.grille = [{ x: 0, y: 0 }];
                langton.avancer();
                expect(langton.x).toBe(0);
                expect(langton.y).toBe(1);
            })

            it("doit tourner à gauche si la case est blanche (0, -1)", ()=>{
                langton.grille = [];
                langton.avancer();
                expect(langton.x).toBe(0);
                expect(langton.y).toBe(-1);
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

    });

});