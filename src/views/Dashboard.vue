<template>
<div>
    <Sidebar />
    <br><br><br>
    <div class="container-fluid wrapper">
      <!-- INSERT CODE HERE -->
      <h1 > CBSS DASHBOARD</h1>
      <div class="col-12 col-md-6"><BarChart /></div>
      <div class="col-12 col-md-6"><BarChart /></div>
      <div class="graphs col-12 col-md-6"><LineChart /></div>
      <div class="graphs col-12 col-md-6"><LineChart /></div>
      <div class="graphs col-12 col-md-6"><PieChart /></div>
      <div class="graphs col-12 col-md-6"><PieChart /></div>
      <div class="graphs col-12 col-md-6"><DougnutChart /></div>
      <div class="graphs col-12 col-md-6"><DougnutChart /></div>
      <div class="graphs col-12 col-md-6"><PolarAreaChart /></div>
      <div class="graphs col-12 col-md-6"><PolarAreaChart /></div>
      <div class="graphs col-12 col-md-6"><RadarChart /></div>
      <div class="graphs col-12 col-md-6"><RadarChart /></div>
    </div>
    
</div>
<Footer />
</template>

<script>
import Footer from '@/components/Footer'; 
import Header from '@/components/Header';

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
    Header,
    Sidebar, 
    BarChart,
    PieChart,
    LineChart,
    DougnutChart,
    PolarAreaChart,
    RadarChart,
  },
};
</script>


<style scoped> 
.graphs{
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>