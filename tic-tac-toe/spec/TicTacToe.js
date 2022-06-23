module.exports = function TicTacToe() {
    const EMPTY = " "
    const HORIZONTAL_SEP = "|"
    const LINE_SEP = "\n-----------\n"
    let grille = []
    let range = [...Array(3).keys()]
    range.forEach(_ => grille.push(range.map(_ => 0)))
    let dessine = () => grille.map(ligne => ligne.map(cellule => ` ${!cellule ? EMPTY : cellule} `).join(HORIZONTAL_SEP)).join(LINE_SEP)
    let tick = (player, coord) => grille[coord.y][coord.x] = player
    let estTerminé = () => grille.every(el => el)
    let colonne = (index) => grille.map(el => el[index])
    let colonnes = () => range.map(i => colonne(i))
    let lignes = () => grille
    let diagonales = () => [
        [grille[0][0], grille[1][1], grille[2][2]],
        [grille[2][0], grille[1][1], grille[0][2]]
    ]

    let colonisateur = (segment) => segment.reduce((acc, cur) => acc === cur && cur)
    return {
        grille,
        dessine,
        tick,
        estTerminé,
        colonne,
        colonisateur,
        lignes,
        colonnes,
        diagonales
    }
}