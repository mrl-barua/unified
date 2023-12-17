<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default {
  name: "App",
  components: { Line },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartData() {
      return this.prepareChartData(this.data);
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: "nearest",
          intersect: true,
          axis: "x",
          animationDuration: 400,
          onHover: (event, chartElement) => {
            event.target.style.cursor = chartElement[0] ? "pointer" : "default";
          },
        },
        animation: {
          duration: 1000,
          easing: "easeOutQuart",
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || "";
              if (label) {
                label += ": ";
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
            },
          },
        },
      };
    },
  },
  methods: {
    prepareChartData(data) {
      return {
        labels: data.labels,
        datasets: data.datasets
          ? data.datasets
          : [
              {
                label: data.label,
                data: data.values,
                backgroundColor: data.backgroundColor,
              },
            ],
      };
    },
  },
};
</script>
