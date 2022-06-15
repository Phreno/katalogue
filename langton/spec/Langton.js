module.exports = function Langton() {
    let self = {};

    self.grille = [];
    self.historique = [
        { x: -1, y: 0 }
    ];
    self.x = 0;
    self.y = 0;

    self.estSurUneCaseNoire = () => {
        return self.grille.find(cell => cell.x === self.x && cell.y === self.y)
    }

    self.precedent = () => self.historique.slice(-1)[0]

    self.avancer = () => {
        let offset = { ...self.precedent() }
        self.estSurUneCaseNoire() && Object.keys(offset).forEach(key => Math.abs(offset[key]) && (offset[key] *= -1))
        self.historique.push({ x: self.x, y: self.y })
        self.x += offset.y
        self.y += offset.x
    }

    return self;
}