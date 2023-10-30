<template>
    <Sidebar :iconText="PageTitle" />

    <br><br><br><br>

    
  
    <div class="col-12 col-md-12">
      <div class="shadow2">
<br>
       <div class="d-flex justify-content-around"
        style=" margin-left: 40px; margin-right: 40px; margin-bottom: 40px; background-color: #133F5C; color: white; padding: 8px; text-align: center; border-radius: 5px;">


          <h5 class="fw-bold">MODALITY</h5>
          <h5 class="fw-bold">TOTAL PROJECT COST FROM DSWD</h5>
          <h5 class="fw-bold">TOTAL</h5>
      </div>


        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>1.Seed Capital Fund Regular Target</p>
         <p>P26,000,000.00 </p>
         <p>178 </p>
        </div>
        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>2. Lorem Ipsum</p>
         <p>P26,000,000.00</p>
         <p>178</p>
        </div>
        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>3. Lorem Ipsum</p>
         <p>P26,000,000.00</p>
         <p>178</p>
        </div> 
      </div>
    </div>

    <div class="col-12 col-md-12">
        <div class="shadow2 forbarchart">
          <h5 class="fw-bold">COST FROM DSWD BY BARANGAY</h5>
          <div class="Barchart1"><BarChart :data="CostData" /></div>
        </div>
    </div>


    

    <!-- <Footer /> -->
</template>

<script>
import axios from 'axios';
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer';
import BarChart from '@/components/ChartJS/Barchart';
import PieChart from '@/components/ChartJS/PieChart';
import DoughnutChart from '@/components/ChartJS/DoughnutChart';


export default {
    name: 'SLPPA',
    components: {
        Sidebar,
        Footer,
        BarChart,
        PieChart,
        DoughnutChart
    
    },

    data() {
      return {
        PageTitle: "SLP - Physical Accomplishment by Portfolio",

        CostData: {
          labels: ['Sumimao', 'Malabog', 'Langub', 'Calinan Poblacion', '8A, Poblacion A', 'Lasang', 'Bunawan', 'Buhangin Proper', 'Kilate', 'Calinan Proper'],
          label: ['ASSOCIATION-MANAGED'],
          values: [450000, 450000, 450000, 450000, 450000, 420000, 360000, 15000, 15000, 15000],
          backgroundColor: [
          '#292D96'
        ],
        },    

      };
    },

 methods:{
  // inserted data for month 
  

 },



  mounted() {
    
  },

    
}
</script>

<style scoped>

.shadow2{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 350px;
  border-radius: 20px;
  margin:10px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
}

.forbarchart{
  height: 250px;
  @media only screen and (min-width: 500px) {
    height: 350px;
  }
  @media only screen and (min-width: 720px) {
    height: 600px;
  }
}


.Barchart1{
  height: 480px; 

}


</style>