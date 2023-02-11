<template>
    <a class="move-container">
        <span class="move-name">{{move.version_group_details[move.version_group_details.length -1 ].level_learned_at}} - {{ move.move.name }}</span>
        <span v-if="moveInfo"><type-button :type="moveInfo.type"/></span>
        <span v-if="moveInfo">{{ moveInfo.damage_class.name }}</span>
        <span v-if="moveInfo">Power: {{ moveInfo.power }}</span>
        <span v-if="moveInfo">PP: {{ moveInfo.pp }}</span>
        <span v-if="moveInfo">Accuracy: {{ moveInfo.accuracy }}</span>
    </a>
</template>

<script>
import { ref } from '@vue/reactivity';
import { getMove } from '../composables/getMove.js'

import TypeButton from './TypeButton.vue';

export default {
    name: "MoveButton",
    props: ['move'],
    components: { TypeButton },
    setup(props) {
        const { moveInfo, getMoveInfo, error } = getMove(props.move.move.url);

        getMoveInfo();

        return { moveInfo, error };
    },
};
</script>

<style scoped>
.move-name {
    text-transform: capitalize;
}
.move-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
}

.move-container > span:not(:first-child) {
    text-align: center;
}
</style>
