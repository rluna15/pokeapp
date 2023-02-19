import { ref } from "vue";

export function getEvolutionChain(url) {
    const evolutionChainInfo = ref(null)
    const error = ref(null)

    const getChain = async () => {
        try {
            let data = await fetch(url)

            if(!data.ok) {
                throw Error('Could not fetch data')
            }

            evolutionChainInfo.value = await data.json()
        } catch (err) {
            error.value = err
            console.log(error.value)
        }
    }

    return { evolutionChainInfo, getChain, error}
} 