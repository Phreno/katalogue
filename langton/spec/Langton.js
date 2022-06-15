module.exports = function Langton() {
    let self = {};


    self.GAUCHE = 0
    self.HAUT = 1
    self.DROITE = 2
    self.BAS = 3


    self.grille = [];
    self.historique = [
        { x: 0, y: 0, direction: self.HAUT }
    ];
    self.x = 0;
    self.y = 0;
    self.direction = () => self.estSurUneCaseNoire() ? 'droite' : 'gauche'

    self.estSurUneCaseNoire = () => {
        return self.grille.find(cell => cell.x === self.x && cell.y === self.y)
    }

    self.voisinage = () => [
        { x: self.x - 1, y: self.y }, // gauche
        { x: self.x, y: self.y - 1 }, // haut
        { x: self.x + 1, y: self.y }, // droite
        { x: self.x, y: self.y + 1 } // bas
    ]

    return self;
}