let Langton = require('./Langton');

describe("init", ()=>{
    it("doit lancer les tests", function(){
        expect(true).toBe(true);
    });
})

describe("Langton", function(){
    var langton;

    beforeEach(()=>{
        langton = new Langton({});
    })

    it("doit avoir une propriété de configuration", ()=>{
        expect(langton.config).toBeDefined();
    })

    it("doit avoir une hauteur de 10 par défault", ()=>{
        expect(langton.config.hauteur).toBe(10);
    });

    it("doit avoir une largeur de 10 par défault", ()=>{
        expect(langton.config.largeur).toBe(10);
    });

    it("doit pouvoir surcharger la configuration lors de l'initialisation", ()=>{
        langton = new Langton({hauteur: 20, largeur: 20});
        expect(langton.config.hauteur).toBe(20);
        expect(langton.config.largeur).toBe(20);
    })

    it("doit avoir une  grille contenant les cases noires de la fourmi", ()=>{
        expect(langton.grille).toBeDefined();
    })

    it("doit connaitre la position et la direction de la fourmi", ()=>{
        expect(langton.fourmi.position.x).toBeDefined();
        expect(langton.fourmi.position.y).toBeDefined();
        expect(langton.fourmi.direction).toBeDefined();
    })

    it("doit pouvoir dire si la fourmi est sur une case noire", ()=>{
        langton.grille = [{x: 0, y: 0}];
        langton.fourmi.position.x = 0;
        langton.fourmi.position.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeTruthy();
    })

    it("doit tourner à gauche si la case est blanche", ()=>{
        langton.grille = [];
        langton.fourmi.position.x = 0;
        langton.fourmi.position.y = 0;
        expect(langton.estSurUneCaseNoire()).toBeFalsy();
        expect(langton.fourmi.direction()).toBe('gauche');
    })



});