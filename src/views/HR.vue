<template>
    <Sidebar />

    <br><br><br>

    <h1>HR DASHBOARD</h1>

    <div class="col-12 col-md-6">
        <PieChart :data="NameData"/>
    </div>

    <div class="col-12 col-md-6">
        <PieChart :data="MonthData"/>
    </div>

    <Footer />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer';

  import BarChart from '@/components/ChartJS/Barchart';
  import PieChart from '@/components/ChartJS/PieChart';
  import LineChart from '@/components/ChartJS/LineChart';
  import DougnutChart from '@/components/ChartJS/DoughnutChart';
  import PolarAreaChart from '@/components/ChartJS/PolarArea';
  import RadarChart from '@/components/ChartJS/Radar';

export default {
    name: 'HR',
    components: {
        Sidebar,
        Footer,
        BarChart,
        PieChart,
        LineChart,
        DougnutChart,
        PolarAreaChart,
        RadarChart,
    },

    data() {
      return {
        MonthData: {
          labels: ['WEDC', 'OTHERS', 'FHONA', 'PWD', 'OLDER PERSONS', 'OFW'],
          label: ['CHART1'],
          values: [39, 18, 13, 4, 3, 1],
          backgroundColor: [
          'rgba(25, 82, 105, 0.6',  
          'rgba(85, 25, 44, 0.6',  
          'rgba(135, 146, 56, 0.6',
          'rgba(25, 61, 95, 0.6', 
          'rgba(105, 82, 105, 0.6', 
        ],
        },
        
        NameData: {
          labels: ['CNSP', 'EMOTIONALLY/PSYCHO DISTRESS', 'OFW'],
          label: ['CHART2'],
          values: [42, 23, 12, 2],
          backgroundColor: [
          'rgba(75, 192, 192, 0.2',
          'rgba(255, 99, 132, 0.2',
          'rgba(255, 206, 86, 0.2',
          'rgba(54, 162, 235, 0.2',
          'rgba(153, 102, 255, 0.2',
          'rgba(255, 159, 64, 0.2',
        ],
        },

      };
    },

    
}
</script>