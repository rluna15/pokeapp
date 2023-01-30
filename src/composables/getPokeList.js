import { ref } from 'vue'

export function getPokeList() {
    const pokeList = ref(null)
    const error = ref(null)

    const getList = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokedex/1')

            if (!data.ok) {
                throw Error("Could not fetch data")
            }

            pokeList.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { pokeList, getList, error }
}