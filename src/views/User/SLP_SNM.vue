<template>
    <Sidebar :iconText="PageTitle" />

    <br><br><br><br>

    <div class="stacked-rectangle col-12 col-md-3">
          <div class="shadow3">
            <div class="rectangle" style="background-color: #EB5F5E;">
              <div class="label">POOR</div>
              <div class="number"><b>282</b></div>
            </div>
            <div class="rectangle" style="background-color: #59508D;">
              <div class="label">NON-POOR</div>
              <div class="number"><b>224</b> </div>
            </div>
            <div class="rectangle" style="background-color: #F3A533;">
              <div class="label">NO MATCH</div>
              <div class="number"><b>202</b></div>
            </div>
          </div>

      </div>


  
  <div class="col-12 col-md-9">
      <div class="shadow1">
<br>
       <div class="d-flex justify-content-around"
        style=" margin-left: 40px; margin-right: 40px; margin-bottom: 40px; background-color: #133F5C; color: white; padding: 8px; text-align: center; border-radius: 5px;">


          <h5 class="fw-bold">PROVINCE</h5>
          <h5 class="fw-bold">CITY/MUNICIPALITY</h5>
          <h5 class="fw-bold">BARANGAY</h5>
          <h5 class="fw-bold">RECORD COUNT</h5>
      </div>
      
        <hr class="SLPPA" />
         <div class="d-flex justify-content-around">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
        
        </div>

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
        </div>

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 
        
        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 
     
      </div>
    </div>

    <div class="col-12 col-md-12">
        <div class="shadow2 forbarchart">
          <br>
          <h5 class="fw-bold">COST FROM DSWD BY BARANGAY</h5>
          <br>
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

.shadow1{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 480px;
  border-radius: 20px;
  margin:10px 15px 10px -15px;
  padding: 10px 0px 10px 0px;
}
.shadow2{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 350px;
  border-radius: 20px;
  margin:10px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
}

/* copy */
.shadow3{
  height: 480px;
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

/* CSS FOR DATA SUMMARY */

.row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  width: 200px;
  text-align: right;
  font-weight: bold;
}

.number {
  width: 100px;
  text-align: left;
}

/* css */

.stacked-rectangle {
  display: flex;
  justify-content: space-between;
}

.stacked-rectangle .col-12.col-md-4 {
  width: 20%;
}

.stacked-rectangle .shadow2 {
  background: transparent;
}

.rectangle {
  padding: 10px;
  margin: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30%;
  
}

.rectangle .label {
  
  color: #FFF;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle .number {
  font-size: 40px;
  text-align: center;
}


</style>