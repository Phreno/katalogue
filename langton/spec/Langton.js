module.exports = function Langton({ hauteur, largeur }) {
    (!hauteur) && (hauteur = 10);
    (!largeur) && (largeur = 10);

    let self = {};
    self.config = {
        hauteur,
        largeur
    }

    self.GAUCHE = 0
    self.HAUT = 1
    self.DROITE = 2
    self.BAS = 3


    self.grille = [];
    self.historique = [
        { x: 0, y: 0, direction: self.HAUT }
    ];
    self.fourmi = {
        position: {
            x: 0,
            y: 0,
        },
        direction: () => self.estSurUneCaseNoire() ? 'droite' : 'gauche'
    }

    self.estSurUneCaseNoire = () => {
        return self.grille.find(cell => cell.x === self.fourmi.position.x && cell.y === self.fourmi.position.y)
    }

    self.voisinage = () => [
        { x: self.fourmi.position.x - 1, y: self.fourmi.position.y }, // gauche
        { x: self.fourmi.position.x, y: self.fourmi.position.y - 1 }, // haut
        { x: self.fourmi.position.x + 1, y: self.fourmi.position.y }, // droite
        { x: self.fourmi.position.x, y: self.fourmi.position.y + 1 } // bas
    ]

    return self;
}