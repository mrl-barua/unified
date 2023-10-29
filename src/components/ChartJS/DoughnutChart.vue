<template>
  <div class="chart-container">
    <Doughnut
      :options="chartOptions"
      :data="chartData"
    />
  </div>
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement)
  
  export default {
    name: 'DoughnutChart',
    components: { Doughnut },
    props: {
      data: {
        type: Object,
        required: true
      }, 
      legendOptions: {
      type: Object, // Define a prop for legend options
      default: () => ({
        position: 'top', // Default legend position

      }),
    },
    },
    data() {
      return {
        chartData: this.prepareChartData(this.data),
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
          legend: this.legendOptions, // Use the prop for legend options
        },
        },
      };
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
  width: 90%;
}
</style>