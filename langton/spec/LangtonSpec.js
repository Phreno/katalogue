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
        expect(langton.x).toBeDefined();
        expect(langton.y).toBeDefined();
        expect(langton.direction).toBeDefined();
    })

    it("doit pouvoir dire si la fourmi est sur une case noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        langton.x = 0;
        langton.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
    })

    it("doit tourner à gauche si la case est blanche", () => {
        langton.grille = [];
        langton.x = 0;
        langton.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeFalsy();
        expect(langton.direction()).toBe('gauche');
    })

    it("doit tourner à droite si la case est noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        langton.x = 0;
        langton.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
        expect(langton.direction()).toBe('droite');
    })



    describe("pour tourner", () => {
        beforeEach(() => {
            langton.x = 0;
            langton.y = 0;
        })
        // Exemple avec les coordonnées (x, y).
        // Fourmi sur la case (0, 0)
        // ------------------------
        // -1, -1   | 0, -1 | 1, -1
        // -1, 0    |[0, 0] | 1, 0
        // -1, 1    | 0, 1  | 1, 1
        // ========================
        it("doit pouvoir localiser les cases voisines", () => {
            expect(langton.voisinage()).toEqual([
                { x: -1, y: 0 },
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: 0, y: 1 }
            ]);

        })

        it("doit historiser les positions de la fourmi", () => {
            expect(langton.historique).toEqual([{x: 0, y: 0, direction: langton.HAUT}]);
        })


        // venant de la gauche (-1, 0)
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