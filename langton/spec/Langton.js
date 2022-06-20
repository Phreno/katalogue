const VERTICAL_OFFSET_FIX = -1
const STARTING_POSITION_INDEX = 0

module.exports = function Langton() {
    let self = {
        x: STARTING_POSITION_INDEX,
        y: STARTING_POSITION_INDEX,
        grille: [],
        precedent: {
            x: STARTING_POSITION_INDEX - 1,
            y: STARTING_POSITION_INDEX
        }
    }
    let sauvegarde = () => self.precedent = {
        x: self.x,
        y: self.y,
        precedent: self.precedent
    }
    let coordonneesEgales = (cell) => self.x === cell.x && self.y === cell.y
    let estSurUneCaseNoire = () => self.grille.find(coordonneesEgales)
    let offset = () => {
        let offset = {
            x: self.precedent.x - self.precedent.precedent.x,
            y: self.precedent.y - self.precedent.precedent.y
        }
        return offset
    }
    let turn = (offset) => {
        if (estSurUneCaseNoire()) {
            Object.keys(offset).forEach(key => Math.abs(offset[key]) && (offset[key] *= -1))
            self.grille = self.grille.filter(cell => !(cell.x === self.x && cell.y === self.y))
        } else {
            self.grille.push({ x: self.x, y: self.y })
        }
        self.x += offset.y
        self.y += offset.x * VERTICAL_OFFSET_FIX
    }
    self.avancer = () => {
        sauvegarde()
        turn(offset())
    }
    return self
}
