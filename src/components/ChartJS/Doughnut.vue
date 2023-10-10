<template>
    <Doughnut
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Doughnut } from 'vue-chartjs'
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'Doughnut',
    components: { Doughnut },
    data() {
      return {
        chartData: {
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
          datasets: [
            {
              data: [40, 20, 80, 10],
              backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            },
          ],
        },
        chartOptions: {
          responsive: true,
        },
      };
    },
  };
  </script>
  