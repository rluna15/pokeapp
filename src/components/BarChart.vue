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
                },
                { 
                    label: 'Charmander',
                    data: [39, 52, 43, 60, 50, 65],
                    borderColor: 'rgba(179,181,198, 1)',
                    backgroundColor: 'rgba(17,181,19, 0.5)'
                }
            ],
        }

        const chartOptions = {
            responsive: true,
            elements: {
                line: {
                    borderWidth: 1
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'white'
                    },
                    pointLabels: {
                        color: 'white'
                    },
                    grid: {
                        color: 'white',
                    },
                    ticks: {
                        color: 'white',
                        backdropColor: 'rgba(0,0,0,0)',
                    },
                    min: 0
                }
            }
        }

        return { chartData, chartOptions};
    },
};
</script>

<style scoped>
#my-chart-id {
    height: 100% !important;
    width: 100% !important;
}
</style>
