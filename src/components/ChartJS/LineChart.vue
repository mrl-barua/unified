<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default {
  name: "App",
  components: { Line },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      chartData: this.prepareChartData(this.data),
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  methods: {
    prepareChartData(data) {
      if (data.datasets) {
        // If data has a datasets property, use it directly
        return {
          labels: data.labels,
          datasets: data.datasets,
        };
      } else {
        // Otherwise, create a single dataset from the label, values, and backgroundColor properties
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
      }
    },
  },
};
</script>
