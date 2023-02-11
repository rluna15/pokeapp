<template>
    <div v-if="error">{{ error }}</div>
    <div class="details-container" v-if="pokeInfo">
        <div class="title">
            <h1 class="name">
                <img
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                    alt=""
                />
                {{ pokeInfo.name }}
                <code>#{{ pokeInfo.id }}</code>
            </h1>
        </div>
        <div class="info">
            <img :src="pokeInfo.sprites.front_default" :alt="pokeInfo.name" />
            <dl class="types">
                <dt v-if="pokeInfo.types.length > 1" class="heading">Types:</dt>
                <dt v-else class="heading">Type:</dt>
                <dd v-for="(type, index) in pokeInfo.types" :key="index">
                    <type-button :type="type.type" />
                </dd>
            </dl>
            <dl class="size">
                <dt class="heading">Size:</dt>
                <dd>{{ pokeHeight }} m, {{ pokeWeight }} kg</dd>
            </dl>
            <dl class="abilities">
                <dt class="heading">Abilities:</dt>
                <dd v-for="(ability, index) in pokeInfo.abilities" :key="index">
                    <a href="">{{ ability.ability.name }}</a>
                </dd>
            </dl>
            <dl class="stats">
                <dt class="heading">Base Stats:</dt>
                <dd>
                    <stats-table :stats="pokeInfo.stats"/>
                </dd>
                <dd>
                    <stats-chart :stats="pokeInfo.stats" :name="pokeInfo.name"/>
                </dd>
            </dl>
            <dl class="moves">
                <dt class="heading">Moves:</dt>
                <dd>
                    <ul>
                        Level-Up Moves:
                        <li
                            v-for="(move, index) in levelUpMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul>
                        Machine Moves:
                        <li
                            v-for="(move, index) in machineMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul>
                        Egg Moves:
                        <li
                            v-for="(move, index) in eggMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul>
                        Tutor Moves:
                        <li
                            v-for="(move, index) in tutorMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
    </div>
    <div v-else>
        <spinner />
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

import { getPoke } from "../composables/getPoke";
import { useSortMoves } from "../composables/useFilterMoves";

import Spinner from "./Spinner.vue";
import TypeButton from "./TypeButton.vue";
import MoveButton from "./MoveButton.vue";
import StatsChart from "./StatsChart.vue";
import StatsTable from "./StatsTable.vue";

export default {
    components: { Spinner, TypeButton, MoveButton, StatsChart, StatsTable },
    name: "PokeDetails",
    props: ["poke"],
    setup() {
        const route = useRoute()
        
        const { pokeInfo, getPokeInfo, error  } = getPoke(route.params.id)
        
        getPokeInfo()
        
        const eggMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "egg")
        })

        const machineMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "machine")
        })

        const levelUpMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "level-up")
        })

        const tutorMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "tutor")
        })

        // levelUpMoves.sort((a, b) => {
        //     return a.version_group_details[a.version_group_details.length - 1].level_learned_at - b.version_group_details[b.version_group_details.length - 1].level_learned_at 
        // })

        const pokeHeight = computed(() => {
            return pokeInfo.value.height = (pokeInfo.value.height / 10)
        })

        const pokeWeight = computed(() => {
            return pokeInfo.value.weight = (pokeInfo.value.weight / 10)
        })

        return { 
            pokeInfo,
            error,
            eggMoves, 
            machineMoves, 
            levelUpMoves, 
            tutorMoves ,
            pokeHeight,
            pokeWeight
        };
    },
};
</script>

<style scoped>
.info img {
    width: fit-content;
    height: fit-content;
}
.name img, .info img {
    image-rendering: pixelated;
}
.title .name {
    text-transform: capitalize;
    font-weight: bold;
}
dl {
    margin-left: 2em;
}
.heading {
    font-weight: bold;
}
.info {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.abilities > dd {
    display: inline;
}
.moves {
    width: 100%;
}
.moves ul {
    padding: 0;
}
.moves li {
    list-style: none;
}
</style>
