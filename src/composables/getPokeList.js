import { ref } from 'vue'

export function getPokeList(limit) {
    const pokeList = ref([])
    const dataHold = ref(null)
    const error = ref(null)

    const getList = async () => {
        try {
            let data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=' + limit)

            if (!data.ok) {
                throw Error("Could not fetch data")
            }

            dataHold.value = await data.json()

            // console.log(dataHold.value.results[1].url)
            dataHold.value.results.forEach(poke => {
                getInfo(poke)
            });

        } catch (err) {
            error.value = err.message
            console.error(error.value)
        }
    }

    const getInfo = async (poke) => {
        try {
            let data = await fetch(poke.url)

            if (!data.ok) {
                throw Error("Could not fetch data")
            }

            dataHold.value = await data.json()

            pokeList.value.push(dataHold.value)

        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return { pokeList, getList, error }
}
