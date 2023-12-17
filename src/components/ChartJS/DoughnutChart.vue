<template>
  <div class="chart-container">
    <Doughnut :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
  name: "DoughnutChart",
  components: { Doughnut },
  props: {
    data: {
      type: Object,
      required: true,
    },
    legendOptions: {
      type: Object, // Define a prop for legend options
      default: () => ({
        position: "bottom", // Change legend position to bottom
      }),
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
        plugins: {
          legend: this.legendOptions, // Use the prop for legend options
        },
        hover: {
          onHover: function (event, chartElement) {
            event.target.style.cursor = chartElement[0] ? "pointer" : "default";
          },
        },
        animation: {
          duration: 1000, // general animation time
          easing: "easeOutSine", // an animation easing
        },
      };
    },
  },
  methods: {
    prepareChartData(data) {
      // You can modify this function to format the data as needed for the chart.
      return {
        labels: data.labels,
        datasets: [
          {
            label: data.label,
            data: data.values,
            backgroundColor: data.backgroundColor,
            borderColor: "#000", // Add border color
            borderWidth: 0, // Add border width
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
