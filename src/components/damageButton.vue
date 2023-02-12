<template>
    <img v-if="damageClass.name == 'status'" class="damage-class" src="../assets/img/damage/status.png" :alt="damageClass.name" :title="damageClass.name">
    <img v-if="damageClass.name == 'special'" class="damage-class" src="../assets/img/damage/special.png" :alt="damageClass.name" :title="damageClass.name">
    <img v-if="damageClass.name == 'physical'" class="damage-class" src="../assets/img/damage/physical.png" :alt="damageClass.name" :title="damageClass.name">
</template>

<script>
export default {
    name: "DamageButton",
    props: ["damageClass"],
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.damage-class {
    image-rendering: pixelated;
}
</style>