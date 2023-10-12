<template>
  <div>
      <Sidebar />
      <br><br><br>
      <div class="container-fluid wrapper">
        <!-- INSERT CODE HERE -->
        <h1>CBSS DASHBOARD</h1>
        
        <!-- Insert the BarChart component here -->
        <div class="graphs col-12 col-md-6">
          <BarChart :data="MonthData" />
        </div>

        <div class="graphs col-12 col-md-6">
          <BarChart :data="NameData" />
        </div>

      
        
        <!-- Rest of your chart components -->
        <!-- <div class="col-12 col-md-6"><LineChart /></div> -->
        <!-- <div class="col-12 col-md-6"><PieChart /></div> -->
        <!-- <div class="col-12 col-md-6"><DougnutChart /></div> -->
        <!-- <div class="col-12 col-md-6"><PolarAreaChart /></div> -->
        <!-- <div class="col-12 col-md-6"><RadarChart /></div> -->
      </div>
  </div>
  <Footer />
  </template>
  
  <script>
  import Footer from '@/components/Footer'; 
  import Sidebar from '@/components/Sidebar'; 
  import BarChart from '@/components/ChartJS/Barchart';
  import PieChart from '@/components/ChartJS/PieChart';
  import LineChart from '@/components/ChartJS/LineChart';
  import DougnutChart from '@/components/ChartJS/DoughnutChart';
  import PolarAreaChart from '@/components/ChartJS/PolarArea';
  import RadarChart from '@/components/ChartJS/Radar';
  
  export default {
    name: 'Dashboard',
    components: {
      Footer,
      Sidebar, 
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
  };
  </script>
  
  <style scoped> 
 .graphs {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-right: 0px;
  padding-left: 0px;
}

@media only screen and (min-width: 1024px) {
  .graphs {
    padding-right: 80px;
    padding-left: 80px;
  }
}

  </style>
  