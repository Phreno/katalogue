module.exports = function () {
    const self = {
        carte: []
    }

    let range = [...Array(10).keys()]
    range.forEach((el, i, ar) => self.carte.push(ar.map(e => 0)))

    self.dessine = () => {
        self.carte.forEach(ligne => {
            console.log(ligne.map(e => e ? "*" : " ").join(""))
        })
    }

    self.tick = (ticks) => {
        tick = (coord) => self.carte[coord.x][coord.y] = self.carte[coord.x][coord.y] ? 0 : 1
        ticks.forEach
            ? ticks.forEach(tick)
            : tick(ticks)
    }

    return self
}