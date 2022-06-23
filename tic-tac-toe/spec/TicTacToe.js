module.exports = function TicTacToe() {
    const EMPTY = " "
    const PLAYER_A = "X"
    const PLAYER_B = "O"
    const HORIZONTAL_SEP = "|"
    const LINE_SEP = "\n-----------\n"

    let grille = []
    let range = [...Array(3).keys()]
    range.forEach(_ => grille.push(range.map(_ => 0)))

    let dessine = () => {
        return grille
            .map(ligne => ligne
                .map(
                    cellule => ` ${cellule === 0
                        ? EMPTY
                        : cellule === "X"
                            ? PLAYER_A
                            : PLAYER_B
                        } `
                ).join(HORIZONTAL_SEP)
            ).join(LINE_SEP)
    }
    let tick = (player, coord) => grille[coord.y][coord.x] = player
    let estTerminé = () => {
        return grille.every(el => el)
    }
    let colonne = (index) => grille.map(el => el[index])
    let ligne = (index) => grille[0]
    let colonisateur = (segment) => {
        return segment.reduce((acc, cur) => acc === cur && cur)
    }
    return {
        grille,
        dessine,
        tick,
        estTerminé,
        colonne,
        colonisateur,
        ligne
    }
}