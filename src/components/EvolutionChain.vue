<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="evolutionChainInfo">
        <div v-for="c in chain" :key="c.id">
            <router-link :to="{ name: 'pokedetails', params: { id: c.id }}">
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c.id}.png`" :alt="c.name">
            </router-link>
        </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";

import { getEvolutionChain } from "../composables/getEvolutionChain";

export default {
    name: 'EvolutionChaing',
    props: ['EvChain'],
    setup (props) {
        const { evolutionChainInfo, getChain, error} = getEvolutionChain(props.EvChain);

        getChain()

        const chain = computed(() => {
            let c = []  //main poke array
            let p = {}
            let id

            //first poke info
            id = evolutionChainInfo.value.chain.species.url.split('/')

            p.id = id[id.length - 2]
            p.name = evolutionChainInfo.value.chain.species.name

            c.push(p)
            
            if (evolutionChainInfo.value.chain.evolution_details.length > 0)
            {
                p.details = evolutionChainInfo.value.chain.evolution_details[0]
            }

            //get second evolution
            if (evolutionChainInfo.value.chain.evolves_to.length > 0)
            {
                evolutionChainInfo.value.chain.evolves_to.forEach((ev) => {
                    id = ev.species.url.split('/')

                    p = {}
                    p.id = id[id.length - 2]
                    p.name = ev.species.name
                    p.details = ev.evolution_details[0]

                    c.push(p)

                    //get third evolution
                    if (ev.evolves_to.length > 0)
                    {
                        ev.evolves_to.forEach((ev) => {
                            id = ev.species.url.split('/')

                            p = {}
                            p.id = id[id.length - 2]
                            p.name = ev.species.name
                            p.details = ev.evolution_details[0]
                        })

                        c.push(p)
                    }
                })
            }
            
           return c
        })

        return { evolutionChainInfo, chain, error }
    }
}
</script>

<style scoped>

</style>