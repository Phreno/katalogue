module.exports = function Langton({hauteur, largeur}){
    (!hauteur) && (hauteur = 10);
    (!largeur) && (largeur = 10);

    let self = {};
    self.config = {
        hauteur,
        largeur
    }

    self.grille = [];

    self.fourmi = {
        position: {
            x: 0,
            y: 0,
        },
        direction: 'droite'
    }

    self.estSurUneCaseNoire = ()=>{
        return self.grille.find(cell => cell.x === self.fourmi.position.x && cell.y === self.fourmi.position.y)
    }
    return self;
}