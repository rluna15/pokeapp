<template>
    <table>
        <tbody>
            <tr v-for="(stat, index) in stats" :key="index">
                <td class="stat">{{ stat.stat.name }}</td>
                <td class="stat-value">{{ stat.base_stat }}</td>
            </tr>
            <tr>
                <td>Total</td>
                <td class="stat-value">{{ statTotal }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { ref } from 'vue';

export default {
    props: ["stats"],
    setup(props) {
        const statTotal = ref(null);

        console.log(props.stats)

        props.stats.map((stat) => {
            statTotal.value += stat.base_stat;
        });

        return { statTotal };
    },
};
</script>

<style scoped>
.stat {
    text-transform: capitalize;
}
.stat-value {
    font-weight: bold;
    padding-left: 1rem;
    text-align: right;
}
</style>
