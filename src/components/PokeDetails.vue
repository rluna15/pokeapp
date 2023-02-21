<template>
    <div v-if="pError">{{ pError }}</div>
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
            <dl v-if="pokeSpeciesInfo">
                <evolution-chain :EvChain="pokeSpeciesInfo.evolution_chain.url"/>
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
            <dl v-if="false" class="moves">
                <dt class="heading">Moves:</dt>
                <dd>
                    <ul v-if="levelUpMoves.length != 0">
                        Level-Up Moves:
                        <li
                            v-for="(move, index) in levelUpMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul v-if="machineMoves.length != 0">
                        Machine Moves:
                        <li
                            v-for="(move, index) in machineMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul v-if="eggMoves.length != 0">
                        Egg Moves:
                        <li
                            v-for="(move, index) in eggMoves"
                            :key="index"
                        >
                        <move-button :move="move"/>
                        </li>
                    </ul>
                    <ul v-if="tutorMoves.length != 0">
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
import { getPokeSpecies } from "../composables/getPokeSpecies";
import { useSortMoves } from "../composables/useFilterMoves";

import Spinner from "./Spinner.vue";
import TypeButton from "./TypeButton.vue";
import MoveButton from "./MoveButton.vue";
import StatsChart from "./StatsChart.vue";
import StatsTable from "./StatsTable.vue";
import EvolutionChain from "./EvolutionChain.vue";

export default {
    components: { Spinner, TypeButton, MoveButton, StatsChart, StatsTable, EvolutionChain },
    name: "PokeDetails",
    props: ["poke"],
    setup() {
        const route = useRoute()
        
        const { pokeInfo, getPokeInfo, error: pError  } = getPoke(route.params.id)
        
        getPokeInfo()

        const { pokeSpeciesInfo, getSpecies, error: sError} = getPokeSpecies(route.params.id)

        getSpecies()
        
        const eggMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "egg")
        })

        const machineMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "machine")
        })

        const levelUpMoves = computed(() => {
            let moves = useSortMoves(pokeInfo.value.moves, "level-up")

            return moves.sort((a, b) => {
                return a.version_group_details[a.version_group_details.length - 1].level_learned_at - b.version_group_details[b.version_group_details.length - 1].level_learned_at 
            })
        })

        const tutorMoves = computed(() => {
            return useSortMoves(pokeInfo.value.moves, "tutor")
        })

        const pokeHeight = computed(() => {
            return pokeInfo.value.height = (pokeInfo.value.height / 10)
        })

        const pokeWeight = computed(() => {
            return pokeInfo.value.weight = (pokeInfo.value.weight / 10)
        })

        return { 
            pokeInfo,
            pError,
            sError,
            eggMoves, 
            machineMoves, 
            levelUpMoves, 
            tutorMoves ,
            pokeHeight,
            pokeWeight,
            pokeSpeciesInfo
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
.abilities dd:last-child {
    margin-left: 10px;
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
