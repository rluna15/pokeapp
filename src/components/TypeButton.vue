<template>
    <img v-if="type.name == 'bug'" src="../assets/img/type/bug.png" alt="grass">
    <img v-if="type.name == 'dark'" src="../assets/img/type/dark.png" alt="dark">
    <img v-if="type.name == 'dragon'" src="../assets/img/type/dragon.png" alt="dragon">
    <img v-if="type.name == 'electric'" src="../assets/img/type/electric.png" alt="electric">
    <img v-if="type.name == 'fairy'" src="../assets/img/type/fairy.png" alt="fairy">
    <img v-if="type.name == 'fighting'" src="../assets/img/type/fighting.png" alt="fighting">
    <img v-if="type.name == 'fire'" src="../assets/img/type/fire.png" alt="fire">
    <img v-if="type.name == 'flying'" src="../assets/img/type/flying.png" alt="flying">
    <img v-if="type.name == 'ghost'" src="../assets/img/type/ghost.png" alt="ghost">
    <img v-if="type.name == 'grass'" src="../assets/img/type/grass.png" alt="grass">
    <img v-if="type.name == 'ground'" src="../assets/img/type/ground.png" alt="ground">
    <img v-if="type.name == 'ice'" src="../assets/img/type/ice.png" alt="ice">
    <img v-if="type.name == 'normal'" src="../assets/img/type/normal.png" alt="normal">
    <img v-if="type.name == 'poison'" src="../assets/img/type/poison.png" alt="poison">
    <img v-if="type.name == 'psychic'" src="../assets/img/type/psychic.png" alt="psychic">
    <img v-if="type.name == 'rock'" src="../assets/img/type/rock.png" alt="rock">
    <img v-if="type.name == 'steel'" src="../assets/img/type/steel.png" alt="steel">
    <img v-if="type.name == 'water'" src="../assets/img/type/water.png" alt="water">
</template>

<script>
export default {
    name: 'TypeButton',
    props: ['type'],
    setup(props) {
        return {};
    },
};
</script>

<style scoped>
img {
    image-rendering: pixelated;
}
</style>
