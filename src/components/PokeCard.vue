<template>
    <img class="card-img" :src="poke.sprites.front_default" :alt="poke.name">
</template>

<script>
export default {
    props: ['poke'],
    setup(props) {
        console.log(props.poke.name)
        return {  }
    },
};
</script>

<style scoped>
.card-img:hover{
    outline: 1px solid white;
    border-radius: 10px;
    cursor: pointer;
}
</style>
