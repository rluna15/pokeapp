<template>
    <a class="type" :class="type.name" :href="type.url">{{ type.name }}</a>
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
.type {
    display: inline;
    font-size:x-small;
    text-align: center;
    text-transform: uppercase;
    padding: 0 5px;
    margin-top: 5px;
    border: 1px solid;
    border-radius: 5px;
    display: block;
}
.grass {
    color: #78c850
}
.fire {
    color: #f08030
}
.water {
    color: #6890f0
}
.bug {
    color: #a8b820
}
.normal {
    color: #a8a878
}
.poison {
    color: #a040a0
}
.electric {
    color: #f8d030
}
.ground {
    color: #e0c068;
}
.fairy {
    color: #ee99ac;
}
.fighting {
    color: #c03028;
}
.psychic {
    color: #f85888;
}
.rock {
    color: #b8a038;
}
.ghost {
    color: #705898;
}
.ice {
    color: #98d8d8;
}
.dragon {
    color: #7038f8;
}
</style>
