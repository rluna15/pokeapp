import { ref } from 'vue'

export function getPoke(id) {
    const pokeInfo = ref(null)
    const error = ref(null)

    const getPokeInfo = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon/' + id)

            if (!data.ok) {
                throw Error("Could not fetch data")
            }

            pokeInfo.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { pokeInfo, getPokeInfo, error }
}