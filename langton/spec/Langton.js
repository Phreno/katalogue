// ------------------------
// -1, -1   | 0, -1 | 1, -1
// -1, 0    |[0, 0] | 1, 0
// -1, 1    | 0, 1  | 1, 1
// ========================
module.exports = function Langton() {
    let self = {};
    self.grille = [];
    self.precedent = { x: -1, y: 0 }
    self.x = 0
    self.y = 0
    self.estSurUneCaseNoire = () => self.grille.find(cell => cell.x === self.x && cell.y === self.y)
    self.avancer = () => {
        console.log("\nDEBUG: avancer")
        console.log("\n------------------------------------------------------")
        let offset = { ...self.precedent }
        self.estSurUneCaseNoire() && Object.keys(offset).forEach(key => Math.abs(offset[key]) && (offset[key] *= -1))
        self.precedent = { x: self.x, y: self.y, precedent: self.precedent }
        self.x += offset.y
        self.y += offset.x
        console.debug(self)
        console.log("\n======================================================")
    }
    return self
}