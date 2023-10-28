<template>
     <div class="chart-container">
    <Bar :options="chartOptions" :data="chartData" />
  </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, CategoryScale, LinearScale)
  
  export default {
    name: 'HorizontalBarChart',
    components: { Bar },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        chartData: this.prepareChartData(this.data),
        chartOptions: {
          responsive: true,
          indexAxis: 'y', // Set to 'y' for horizontal bar chart
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        },
      }
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
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100%; /* Optional: Set a height for the container */
}
</style>