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
  name: "HStackBarChart", // Renamed to HStackBarChart
  components: { Bar },
  props: {
    data: {
      type: Object,
      required: true,
    },
    aspectRatio: {
      type: Number,
      default: 30 / 10,
    },
  },
  data() {
    return {
      chartData: this.prepareChartData(this.data),
      chartOptions: {
        responsive: true,
        aspectRatio: this.aspectRatio,
        indexAxis: "y",
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  },
  methods: {
    prepareChartData(data) {
      return {
        labels: data.labels,
        datasets: data.datasets.map((dataset) => ({
          label: dataset.label,
          data: dataset.values,
          backgroundColor: dataset.backgroundColor,
        })),
      };
    },
  },
};
</script>

<style scoped>
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
