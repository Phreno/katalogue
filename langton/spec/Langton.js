

module.exports = function Langton() {
    let self = {
        x: 0,
        y: 0,
        grille: [],
        precedent: { x: -1, y: 0 }
    }
    let sauvegarde = () => self.precedent = {
        x: self.x,
        y: self.y,
        precedent: self.precedent
    }
    let estSurUneCaseNoire = () => self.grille.find(cell => cell.x === self.x && cell.y === self.y)
    let offset = () => {
        let offset = {
            x: self.precedent.x - -self.precedent.precedent.x,
            y: self.precedent.y - -self.precedent.precedent.y
        }
        estSurUneCaseNoire() && Object.keys(offset).forEach(key => Math.abs(offset[key]) && (offset[key] *= -1))
        return offset
    }
    let turn = (offset) => {
        self.x += offset.y
        self.y += offset.x
    }
    self.avancer = () => {
        sauvegarde()
        turn(offset())
    }
    return self
}
