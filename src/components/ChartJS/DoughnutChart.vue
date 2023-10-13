<template>
    <Doughnut
      :options="chartOptions"
      :data="chartData"
    />
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
      }
    },
    data() {
      return {
        chartData: this.prepareChartData(this.data),
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
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

