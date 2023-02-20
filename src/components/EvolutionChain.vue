<template>
    <div v-if="error">{{ error }}</div>
    <div>
        Evolution chain: {{ evolutionChainInfo }}
    </div>
</template>

<script>
import { getEvolutionChain } from "../composables/getEvolutionChain";

export default {
    name: 'EvolutionChaing',
    props: ['EvChain'],
    setup (props) {
        const { evolutionChainInfo, getChain, error} = getEvolutionChain(props.EvChain);

        getChain()

        console.log(props.EvChain);

        return { evolutionChainInfo, error }
    }
}
</script>

<style scoped>

</style>