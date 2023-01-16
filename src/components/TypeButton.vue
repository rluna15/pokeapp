<template>
    <a class="type" :href="type.url">{{ type.name }}</a>
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
</style>
