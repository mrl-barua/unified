<template>
  <div class="chart-container">
    <Bar :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale);

export default {
  name: "HorizontalBarChart",
  components: { Bar },
  props: {
    data: {
      type: Object,
      required: true,
    },
    aspectRatio: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    chartData() {
      return this.prepareChartData(this.data);
    },
    chartOptions() {
      return {
        responsive: true,
        aspectRatio: this.aspectRatio,
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 1, 0.1)", // Set the color of the grid lines
              borderColor: "rgba(0, 0, 0, 0.1)", // Set the color of the border
              borderWidth: 1, // Set the width of the border
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(0, 0, 0, 0.1)", // Set the color of the grid lines
              borderColor: "rgba(0, 0, 0, 0.1)", // Set the color of the border
              borderWidth: 1, // Set the width of the border
            },
          },
        },
        hover: {
          onHover: function (event, chartElement) {
            event.target.style.cursor = chartElement[0] ? "pointer" : "default";
          },
        },
        animation: {
          duration: 2000, // general animation time
          easing: "easeOutQuart", // an animation easing
        },
      };
    },
  },
  methods: {
    prepareChartData(data) {
      return {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.values,
            backgroundColor: data.backgroundColor,
            barThickness: 15, // Set the width of each bar
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100%; /* Optional: Set a height for the container */
  width: 100%;
}
</style>
