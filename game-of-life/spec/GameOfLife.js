module.exports = function () {
    const self = {
        carte: [],
        voisins: []
    }
    const initArray = (array, size=10)=>{
        let range = [...Array(size).keys()]
        range.forEach((el, i, ar) => array.push(ar.map(e => 0)))
    }

    initArray(self.carte)

    self.dessine = () => {
        self.voisins.forEach(ligne => {
            // console.log(ligne.map(e => e ? "*" : " ").join(""))
            console.log(ligne.join(""))
        })
    }

    self.tick = (ticks) => {
        tick = (coord) => self.carte[coord.y][coord.x] = self.carte[coord.y][coord.x] ? 0 : 1
        ticks.forEach
            ? ticks.forEach(tick)
            : tick(ticks)
    }

    self.denombreVoisins = ()=>{
        lire = (coord) => {
            let resultat = 0
            try { resultat = (self.carte[coord.y][coord.x] && 1) || 0  } catch(e){/* nope */}
            return resultat
        }
        initArray(self.voisins)
        self.carte.forEach((ligne, ligneIndex) => {
            ligne.forEach((col, colIndex)=>{
                let voisins = []
                for (let y = ligneIndex - 1; y <= ligneIndex + 1; y++){
                    for (let x = colIndex - 1; x <= colIndex +1; x++){
                            if(ligneIndex !== y || colIndex !== x)
                                voisins.push(lire({x, y}))
                    }
                }
                const compte = voisins.reduce((acc, cur)=>acc+cur, 0)
                try{
                    self.voisins[ligneIndex][colIndex] = compte
                }catch( e){
                    console.error(e)
                }
            })
        })
    }

    return self
}