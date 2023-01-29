export function useSortMoves(moves, learnMethod) {
    return moves.filter((move) => {
        let name = move.version_group_details[move.version_group_details.length - 1].move_learn_method.name

        if (name == learnMethod) {
            return move
        }
    })
}