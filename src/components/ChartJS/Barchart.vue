<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            data: [40, 20, 12, 100, 60, 45, 30, 70, 90, 80, 55, 65],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',   // January
              'rgba(54, 162, 235, 0.6)',  // February
              'rgba(255, 206, 86, 0.6)',  // March
              'rgba(75, 192, 192, 0.6)',  // April
              'rgba(153, 102, 255, 0.6)', // May
              'rgba(255, 159, 64, 0.6)',  // June
              'rgba(128, 0, 0, 0.6)',     // July
              'rgba(0, 128, 0, 0.6)',     // August
              'rgba(0, 0, 128, 0.6)',     // September
              'rgba(128, 128, 0, 0.6)',   // October
              'rgba(128, 0, 128, 0.6)',   // November
              'rgba(0, 128, 128, 0.6)'    // December
            ],
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
