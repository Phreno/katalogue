let Langton = require('./Langton');

describe("init", () => {
    it("doit lancer les tests", function () {
        expect(true).toBe(true);
    });
})

describe("Langton", function () {
    var langton;

    beforeEach(() => {
        langton = new Langton({});
    })

    it("doit avoir une propriété de configuration", () => {
        expect(langton.config).toBeDefined();
    })

    it("doit avoir une hauteur de 10 par défault", () => {
        expect(langton.config.hauteur).toBe(10);
    });

    it("doit avoir une largeur de 10 par défault", () => {
        expect(langton.config.largeur).toBe(10);
    });

    it("doit pouvoir surcharger la configuration lors de l'initialisation", () => {
        langton = new Langton({ hauteur: 20, largeur: 20 });
        expect(langton.config.hauteur).toBe(20);
        expect(langton.config.largeur).toBe(20);
    })

    it("doit avoir une  grille contenant les cases noires de la fourmi", () => {
        expect(langton.grille).toBeDefined();
    })

    it("doit connaitre la position et la direction de la fourmi", () => {
        expect(langton.fourmi.position.x).toBeDefined();
        expect(langton.fourmi.position.y).toBeDefined();
        expect(langton.fourmi.direction).toBeDefined();
    })

    it("doit pouvoir dire si la fourmi est sur une case noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        langton.fourmi.position.x = 0;
        langton.fourmi.position.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
    })

    it("doit tourner à gauche si la case est blanche", () => {
        langton.grille = [];
        langton.fourmi.position.x = 0;
        langton.fourmi.position.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeFalsy();
        expect(langton.fourmi.direction()).toBe('gauche');
    })

    it("doit tourner à droite si la case est noire", () => {
        langton.grille = [{ x: 0, y: 0 }];
        langton.fourmi.position.x = 0;
        langton.fourmi.position.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
        expect(langton.fourmi.direction()).toBe('droite');
    })



    describe("pour tourner", () => {
        beforeEach(()=>{
            langton.fourmi.position.x = 0;
            langton.fourmi.position.y = 0;
        })
        // Exemple avec les coordonnées (x, y).
        // Fourmi sur la case (0, 0)
        // ------------------------
        // -1, -1   | 0, -1 | 1, -1
        // -1, 0    |[0, 0] | 1, 0
        // -1, 1    | 0, 1  | 1, 1
        // ========================
        it("doit pouvoir localiser les cases voisines",()=>{
            expect(langton.voisinage()).toEqual([
                { x: -1, y: 0 },
                { x: 0, y: -1 },
                { x: 1, y: 0 },
                { x: 0, y: 1 }
            ]);

        })

        it("doit historiser les positions de la fourmi", () => {
            expect(langton.historique).toEqual([]);
        })

        // venant de la gauche (-1, 0)
        // - si elle tourne à gauche, elle doit se trouver sur la case (-1, 0)
        // - si elle tourne à droite, elle doit se trouver sur la case (1, 0)
        // venant de la droite (5,6)
        // - si elle tourne à gauche, elle doit se trouver sur la case (6,5): (1, 0)
        // - si elle tourne à droite, elle doit se trouver sur la case (4,5): (-1, 0)
        // venant du haut (4,5)
        // - si elle tourne à gauche, elle doit se trouver sur la case (5,6): (0, 1)
        // - si elle tourne à droite, elle doit se trouver sur la case (5,4): (0, -1)
        // venant du bas (6,5)
        // - si elle tourne à gauche, elle doit se trouver sur la case (5,4): (0, -1)
        // - si elle tourne à droite, elle doit se trouver sur la case (5,6): (0, 1)

    });

});