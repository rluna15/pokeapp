<template>
    <div>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData"/>
    </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

import { ref } from "@vue/reactivity";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
);

export default {
    name: "BarChart",
    components: { Bar },
    setup() {
        const chartData = {
            labels: ["January", "February", "March"],
            datasets: [{ data: [40, 20, 12] }],
        }

        const chartOptions = {
            chartOptions: {
                responsive: true
            }
        }

        return { chartData, chartOptions };
    },
};
</script>

<style lang="scss" scoped></style>
