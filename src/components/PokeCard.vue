<template>
    <router-link :to="{ name: 'pokedetails', params: { id: poke.entry_number } }">
        <img :title="poke.pokemon_species.name" class="card-img" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.entry_number}.png`">
    </router-link>
</template>

<script>
export default {
    props: ['poke'],
    setup(props) {
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
