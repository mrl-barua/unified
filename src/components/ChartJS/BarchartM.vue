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
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChartM",
  components: { Bar },
  props: {
    data: {
      type: Object,
      required: true,
    },
    aspectRatio: {
      type: Number,
      default: 30 / 10, // You can set a default value or leave it empty
    },
  },
  data() {
    return {
      chartData: this.prepareChartData(this.data),
      chartOptions: {
        responsive: true,
        aspectRatio: this.aspectRatio, // Use the aspectRatio prop here
      },
    };
  },
  methods: {
    prepareChartData(data) {
      return {
        labels: data.labels,
        datasets: data.datasets.map((dataset) => {
          return {
            label: dataset.label,
            data: dataset.values,
            backgroundColor: dataset.backgroundColor,
          };
        }),
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
}
</style>
