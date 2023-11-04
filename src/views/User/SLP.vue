<template>
    
    <Sidebar :iconText="PageTitle" />

    <br><br><br><br>
   
    <h1><b>TOTAL ACCOMPLISHMENT VS PHYSICAL TARGET</b></h1>

<!-- 1 -->
    <div class="row">
  <div class="col-12 col-md-8">
    <div class="shadow2 forbarchart">
      <div class="Barchart1"><HBarChart :data="SLPData" /></div>
    </div>
  </div>
  <div class="col-12 col-md-4">
   <div class="rectangle" style="background-color: #133F5C;">
        <div class="label">PHYSICAL TARGET</div>
        <div class="number"><b>6,521</b></div>
      </div>
      <div class="rectangle" style="background-color: #F11B25;">
        <div class="label">TOTAL</div>
        <div class="number"><b>956</b></div>
      </div>
      <div class="rectangle" style="background-color:#F3A533;">
        <div class="label">REMAINING</div>
        <div class="number"><b>5,565</b></div>
      </div>
  </div>
</div>

    
<!-- 2 -->
<h1><b> REFERRALS</b></h1> 
  <div class="row">
     <div class="col-12 col-md-8">
        <div class="shadow3 forbarchart">
          <div class="Barchart1"><HBarChart :data="RefData" /></div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="rectangle1" style="background-color: #F3A533;">
          <div class="label">PHYSICAL TARGET</div>
          <div class="number"><b>20</b></div>
        </div>
        <div class="rectangle1" style="background-color: #F11B25;">
          <div class="label">YEAR 2022</div>
          <div class="number"><b>13</b></div>
        </div>
         <div class="rectangle1" style="background-color:#133F5C">
          <div class="label">YEAR 2023</div>
          <div class="number"><b>12</b></div>
        </div>
        <div class="rectangle1" style="background-color:#252525;">
          <div class="label">QUALIFIED / SERVED</div>
          <div class="number"><b>13</b></div>
        </div>
        <div class="rectangle1" style="background-color:#252525;">
          <div class="label">FUNDED</div>
          <div class="number"><b>8</b></div>
        </div>
        <div class="rectangle1" style="background-color:#252525;">
          <div class="label">ENDORSED TO PARTNERS</div>
          <div class="number"><b>0</b></div>
        </div>
   </div>
  </div>





<!-- 3 -->
 <br>
 <h1><b>SECTORAL ACCOMPLISHMENT</b></h1>
 <br>
  <div class="row">


    <div class="col-12 col-md-4">
     <div class="rectangle4">
          <div class="label">DISAGGREGATED</div>
          <div class="label1"><b>DATA</b></div>
        </div>  

    <div class="rectangle" style="background-color:#59508D;">
          <div class="label">MALE</div>
          <div class="number"><b>267</b></div>
        </div>
        <div class="rectangle" style="background-color: #BC5090;">
          <div class="label">FEMALE</div>
          <div class="number"><b>589</b></div>
        </div>
        <div class="rectangle" style="background-color:#F3A533;">
          <div class="label">TOTAL</div>
          <div class="number"><b>856</b></div>
        </div>
  </div>

    <div class="col-12 col-md-8">
        <div class="shadow5">
          
          <div class="DoughnutChart" style="    height: 370px;">
            <DoughnutChart :data="SecData" /></div>
        </div>
    </div>
  </div>
<!-- 4 -->

<br>
  <h1><b>BREAKDOWN OF REGIONAL ACCOMPLISHMENT</b></h1>
<br>
    <div class="col-12 col-md-12">
      
        <div class="shadow2 forbarchart">
           
          <div class="Barchart1"><BarChart :data="ProvinceData" /></div>
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
import HBarChart from '@/components/ChartJS/HBarchart';


export default {
    name: 'SLP',
    components: {
        Sidebar,
        Footer,
        BarChart,
        PieChart,
        HBarChart,
        DoughnutChart
    },

    data() {
      return {
        PageTitle: "SLP - General Disaggregated Data",

        SLPData: {
          labels: ['EO 70', 'CVA', 'SLP', 'REGULAR', 'ZERO', 'HUNGER', 'EO 70', 'FRs', 'REFERRAL'],
          label: ['PHYSICAL TARGET']['TOTAL'],
          values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
          backgroundColor: [
          '#133F5C', '#F11B25'
        ],
        },  
        RefData: {
          labels: ['REFERRAL BY PARTNERS', ' ', 'WALK IN', 'OBSUs', ' ', 'THRU EMAIL', ' ', 'NPMO', 'ENDORSEMENT',],
          label: ['YEAR 2022'],
          values: [0,0, 18, 13, 4, 3, 1, 20, 40, 4, 5, 4, 2],
          backgroundColor: [
          '#F11B25', '#133F5C'
        ],
        },    

        SecData: {
          labels: ['IP', 'SENIOR CITIZENS', 'SOLO PARENT', 'PWD', 'LGBTQ', 'YOUTH'],
          label: ['CHART2'],
          values: [10, 23, 15,27,20,24],
          backgroundColor: [
          '#59508D',
          '#BC5090',
          '#EB5F5E',
          '#F3A533',
          '#133F5C',
          '#252525',
        ],
        },

       ProvinceData: {
          labels: ['DAVAO ORIENTAL', 'DAVAO DEL SUR', 'DAVAO CITY', 'DAVAO DE ORO', 'DAVAO DEL NORTE', 'DAVAO OCCIDENTAL'],
          label: ['ACCOMPLISHMENT'],
          values: [120, 100, 400, 150, 250, 200],
          backgroundColor: [
          '#59508D'
        ],
        },    

      };
    },

 methods:{
//   
  },  
}
</script>

<style scoped>

.shadow2{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 400px;
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
    height: 400px;
  }
}

.Barchart1{
  height: 340px; 
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
  height: 20%;
  
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

.shadow3{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 495px;
  border-radius: 20px;
  margin:50px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
}

.shadow4{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 550px;
  border-radius: 20px;
  margin:50px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
}
.shadow5{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 440px;
  border-radius: 20px;
  margin:20px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
}

.rectangle4 {
  padding: 10px;
  margin: 10px;
  color: #133F5C;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  
}

.rectangle4 .label {
  
  color: #133F5C;
  text-align: center;
  font-size: 35px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
}
.label[data-v-c2f0b4a5] {
    width: 304px;
}

.rectangle4 .label1 {
  
  color: #133F5C;
  text-align: center;
  font-size: 35px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
}
.chart-container[data-v-3aa086d9] {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120%;
}

/* referrals */

.stacked-rectangle1 {
  display: flex;
  justify-content: space-between;
}

.stacked-rectangle1 .col-12.col-md-4 {
  width: 20%;
}

.stacked-rectangle1 .shadow2 {
  background: transparent;
}

.rectangle1 {
 padding: 5px;
    margin: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 20%;
}

.rectangle1 .label {
  
  color: #FFF;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle1 .number {
  font-size: 35px;
  text-align: center;
}
</style>

