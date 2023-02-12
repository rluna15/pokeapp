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
    name: "StatsChart",
    components: { Radar },
    props: ['stats', 'name'],
    setup(props) {
        const pokeName = props.name.charAt(0).toUpperCase() + props.name.slice(1)
        const stats = props.stats.map(stat => {
            return stat.base_stat
        })

        const chartData = {
            labels: ["Hp", "Attack", "Defense", "Sp-Attack", "Sp-Defense", "Speed"],
            datasets: [
                { 
                    label: pokeName,
                    data: stats,
                    borderColor: 'rgba(179,181,198, 1)',
                    backgroundColor: 'rgba(179,181,198, 0.5)'
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
