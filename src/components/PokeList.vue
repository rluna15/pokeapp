<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="pokeList" class="list-container">
        <div v-for="(poke, index) in pokeList.pokemon_entries" :key="index">
            <div v-if="index < 905">
                <poke-card :poke="poke"/>
            </div>
        </div>
    </div>
    <div v-else>
        <spinner/>
    </div>
</template>

<script>
import { getPokeList } from "../composables/getPokeList";

import Spinner from "./Spinner.vue";
import PokeCard from "./PokeCard.vue";

export default {
    name: "PokeList",
    components: { Spinner, PokeCard },
    setup() {
        const { pokeList, getList, error } = getPokeList()

        getList()

        return { pokeList, error }
    },
};
</script>

<style>
.list-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
