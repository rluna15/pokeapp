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
            labels: ["Hp", "Attack", "Defence", "Sp-Attack", "Sp-Defense", "Speed"],
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
                    borderColor: 'rgba(17,181,19, 1)',
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
                        color: 'rgba(255,255,255, 0.5)'
                    },
                    pointLabels: {
                        color: 'rgba(235, 235, 235, 0.64)',
                        font: {
                            size: 12,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(255,255,255, 0.5)',
                    },
                    ticks: {
                        color: 'rgba(255,255,255, 0.5)',
                        backdropColor: 'rgba(0,0,0,0)',
                    },
                    min: 0
                },
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 10,
                        boxHeight: 10
                    }
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
