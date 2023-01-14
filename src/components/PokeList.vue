<template>
    <div v-if="error">{{ error }}</div>
    <div class="list-container" v-if="pokeList.length">
        <div v-for="(poke, index) in pokeList" :key="index">
            <poke-card :poke="poke" />
        </div>
    </div>
    <div v-else>
        <spinner />
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
        const { getList, pokeList, error } = getPokeList(1);

        getList();

        return { pokeList, error };
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
