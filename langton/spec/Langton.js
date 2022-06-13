module.exports = function Langton({hauteur, largeur}){
    (!hauteur) && (hauteur = 10);
    (!largeur) && (largeur = 10);

    let self = {};
    self.config = {
        hauteur,
        largeur
    }
    return self;
}