<template>
  <Bar :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
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
      },
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
};
</script>
