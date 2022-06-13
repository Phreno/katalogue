let Langton = require('./Langton');

describe("init", ()=>{
    it("doit lancer les tests", function(){
        expect(true).toBe(true);
    });
})

describe("Langton", function(){
    var langton;

    beforeEach(()=>{
        langton = new Langton();
    })

    it("doit avoir une propriété de configuration", ()=>{
        expect(langton.config).toBeDefined();
    })

    it("doit avoir une hauteur de 10 par défault", ()=>{
        expect(langton.config.hauteur).toBe(10);
    });

    it("doit avoir une largeur de 10 par défault", ()=>{
        expect(langton.config.largeur).toBe(10);
    })
});