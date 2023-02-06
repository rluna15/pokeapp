import { ref } from 'vue'

export function getPokeSpecies() {
    const pokeSpeciesInfo = ref(null)
    const error = ref(null)

    const getSpecies = async () => {
        try {
            let data = await fetch('')

            if (!data.ok) {
                throw Error('Could not fetch data')
            }

            pokeSpeciesInfo.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { pokeSpeciesInfo, getSpecies, error }
}