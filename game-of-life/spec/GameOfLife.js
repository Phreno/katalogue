module.exports = function () {
    const self = {
        carte: []
    }

    let range = [...Array(10).keys()]
    range.forEach((el, i, ar) => self.carte.push(ar.map(e=>0)))

    self.dessine = ()=>{
        self.carte.forEach(ligne=>{
            console.log(ligne.map(e=>e?"*":" ").join(""))
        })
    }

    self.tick = (ticks)=>{
        ticks.forEach
            ? ticks.forEach(el=>self.carte[el.x][el.y] = 1)
            : self.carte[ticks.x][ticks.y] = 1
    }

    return self
}