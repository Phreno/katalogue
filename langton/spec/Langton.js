module.exports = function Langton() {
    let self = {};


    self.GAUCHE = 0
    self.HAUT = 1
    self.DROITE = 2
    self.BAS = 3


    self.grille = [];
    self.historique = [
        { x: -1, y: 0 }
    ];
    self.x = 0;
    self.y = 0;
    self.direction = () => self.estSurUneCaseNoire() ? 'droite' : 'gauche'

    self.estSurUneCaseNoire = () => {
        return self.grille.find(cell => cell.x === self.x && cell.y === self.y)
    }

    self.voisinage = [
        { x: - 1, y: 0 }, // gauche
        { x: 0, y: - 1 }, // haut
        { x: 1, y: 0 }, // droite
        { x: 0, y: 1 } // bas
    ]

    self.offset = () => self.historique.slice(-1)[0]

    self.provenance = () =>
        self.voisinage
            .findIndex(voisin => voisin.x === self.x + self.offset().x && voisin.y === self.y + self.offset().y)

    self.avancer = () => {
        switch(self.provenance()){
            case self.GAUCHE:
                self.y += self.estSurUneCaseNoire() ? 1 : -1
                break;
        }
    }

    return self;


}