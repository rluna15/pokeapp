<template>
    <a href="">{{ move.move.name }}</a>
</template>

<script>
import getMove from './MoveButton.vue'; 

export default {
    name: "MoveButton",
    props: ['move'],
    setup() {
        // const { move, getMoveInfo, error } = getMoveInfo()

        return {};
    },
};
</script>

<style lang="scss" scoped></style>
