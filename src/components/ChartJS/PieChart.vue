<template>
    <Pie 
    :data="chartData" 
    :options="chartOptions" />
  </template>
  
  <script>
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Pie } from 'vue-chartjs'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: { Pie },
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
        }
      }
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
  }
  </script>
  

