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
      <!-- <div class="graphs col-12 col-md-6"><DoughnutChart /></div> -->
      <!-- <div class="graphs col-12 col-md-6"><DoughnutChart /></div> -->
    </div>
    
</div>

</template>

<script>
import Footer from '@/components/Footer'; 
import Header from '@/components/Header'

import Sidebar from '@/components/Sidebar'; 
import BarChart from '@/components/ChartJS/Barchart';
import PieChart from '@/components/ChartJS/PieChart';
import LineChart from '@/components/ChartJS/LineChart';
// import DoughnutChart from '@/components/Doughnut';

export default {
  name: 'Dashboard',
  components: {
    Footer,
    Header,
    Sidebar, 
    BarChart,
    PieChart,
    LineChart,
    // DoughnutChart,
  },
};
</script>


<style scoped> 
.graphs{
  margin-top: 100px;
  margin-bottom: 100px;
}

</style>