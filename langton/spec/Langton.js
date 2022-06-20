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
    let appliqueNoir = () => self.grille.push({ x: self.x, y: self.y })
    let appliqueBlanc = () => self.grille = self.grille.filter(cell => !(cell.x === self.x && cell.y === self.y))
    let changeDirection = (offset) => Object.keys(offset).forEach(key => Math.abs(offset[key]) && (offset[key] *= -1))
    let appliqueDirection = (offset) => {
        self.x += offset.y
        self.y += offset.x * VERTICAL_OFFSET_FIX
    }
    /**
     * @param {x: number, y: number} offset correspond à la distance entre la case précédente
     * et la case courante sur les coordonnées x et y
     */
    let turn = (offset) => {
        if (estSurUneCaseNoire()) {
            changeDirection(offset);
            appliqueBlanc()
        } else appliqueNoir()
        appliqueDirection(offset)
    }
    self.avancer = () => {
        sauvegarde()
        turn(offset())
    }
    return self
}
