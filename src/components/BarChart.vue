<template>
    <div>
        <Radar id="my-chart-id" :options="chartOptions" :data="chartData"/>
    </div>
</template>

<script>
import { Radar } from "vue-chartjs";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from "chart.js";

import { ref } from "@vue/reactivity";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default {
    name: "BarChart",
    components: { Radar },
    setup() {
        const chartData = {
            labels: ["Hp", "Attack", "Defence", "Special-attack", "Special-defense", "Speed"],
            datasets: [
                { 
                    label: 'Bulbasour',
                    data: [45, 49, 49, 65, 65, 45],
                    borderColor: 'rgba(179,181,198, 1)',
                    backgroundColor: 'rgba(179,181,198, 0.5)'
                }
            ],
        }

        const chartOptions = {
            chartOptions: {
                responsive: true,
                scales: {
                    ticks: {
                        beginAtZero: true
                    }
                }
            }
        }

        return { chartData, chartOptions };
    },
};
</script>

<style lang="scss" scoped></style>
