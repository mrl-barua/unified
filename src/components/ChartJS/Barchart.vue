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
  name: "BarChart",
  components: { Bar },
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
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
