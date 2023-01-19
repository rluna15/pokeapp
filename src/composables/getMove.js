import { ref } from 'vue'

export function getMove(moveUrl) {
    const moveInfo = ref(null)
    const error = ref(null)

    const getMoveInfo = async () => {
        try {
            let data = await fetch(moveUrl)

            if (!data.ok) {
                throw Error("Could not fetch poke info")
            }

            moveInfo.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }


        
    }

    return { moveInfo, getMoveInfo, error}
}