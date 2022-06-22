let GameOfLife = require('./GameOfLife')

describe("init", ()=>{
    it("doit lancer les tests", ()=>{
        expect(true).toBe(true)
    })
})

describe("gameOfLife", ()=>{
    let gameOfLife
    beforeEach(()=>{
        gameOfLife= new GameOfLife()
    })
    it("doit avoir une carte", ()=>{
        expect(gameOfLife.carte).toBeDefined()
    })
    describe("carte", ()=>{
        it("doit faire 10x10 par default", ()=>{
            expect(gameOfLife.carte.length).toBe(10)
            gameOfLife.carte.forEach(element => {
                expect(element.length).toBe(10)
            });
        })
    })
    it("doit pouvoir afficher la carte", ()=>{
        expect(gameOfLife.dessine).toBeDefined()
    })
    it("doit pouvoir cocher une case", ()=>{
        expect(gameOfLife.tick).toBeDefined()
    })
    describe("tick", ()=>{
        it("doit pouvoir cocher une case (1x1)", ()=>{
            gameOfLife.tick({x:1, y:1})
            expect(gameOfLife.carte[1][1]).toBe(1)
        })
        it("doit pouvoir cocher plusieurs case [(0x0), (1x1), (2x2)]", ()=>{
            gameOfLife.tick([
                {x: 0, y: 0},
                {x: 1, y: 1},
                {x: 2, y: 2}
            ])
            expect(gameOfLife.carte[0][0]).toBe(1)
            expect(gameOfLife.carte[1][1]).toBe(1)
            expect(gameOfLife.carte[2][2]).toBe(1)
        })
        it("doit pouvoir décocher une case (1x1", ()=>{
            gameOfLife.tick({x: 1, y: 1})
            gameOfLife.tick({x: 1, y: 1})
            expect(gameOfLife.carte[1][1]).toBe(0)

        })
    })
})