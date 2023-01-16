import { ref } from 'vue'

export function getMove(moveUrl) {
    const moveList = ref([])
    const error = ref(null)

    const getMoveInfo = async() => {
        let data = await fetch();

        if (!data.ok){
            throw Error("Could not fetch data")
        }

        
    }

    return { moveList, getMoveInfo, error}
}