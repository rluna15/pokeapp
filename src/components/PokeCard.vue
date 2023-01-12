<template>
    <div>
        <img :src="poke.sprites.front_default" alt="">
        <span>{{ poke.name }}</span>
    </div>
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

<style scoped></style>
