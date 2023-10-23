<template>
    <Sidebar />

    <br><br><br><br>

    <div class="col-12 col-md-7">
        <div class="shadow2">
          <p>NUMBER OF RECORDS PER MONTH</p>
          <div class="Barchart1"><BarChart :data="MonthData" /></div>
        </div>
    </div>
    <div class="col-12 col-md-5">
      <div class="shadow2">
        text
      </div>
    </div>

    <div class="col-12 col-md-6">
        <div class="shadow2">
          <p>TOTAL NUMBER OF CATEGORIES REQUEST</p>
          <div class="Piechart1"><PieChart :data="NameData" /></div>
        </div>
    </div>
    <div class="col-12 col-md-6">
      <div class="shadow2">
          <p>PERCENTAGE OF REQUESTING EMPLOYEES STATUS</p>
          <div class="Piechart1"><PieChart :data="NameData" /></div>
        </div>
    </div>

    <div class="col-12">
      <div class="shadow2">
        <h3>DETAILS OF REQUESTING EMPLOYEE</h3>

        <div class="d-flex justify-content-around">
         <h4>NAME</h4>
         <h4>OFFICE / UNIT</h4>
         <h4>RECORD COUNT</h4>
        </div>
        <hr class="hr" />
        <div class="d-flex justify-content-around">
         <p>text</p>
         <p>text</p>
         <p>text</p>
        </div>
        <hr class="hr" />
        <div class="d-flex justify-content-around">
         <p>text</p>
         <p>text</p>
         <p>text</p>
        </div>
        <hr class="hr" />
        <div class="d-flex justify-content-around">
         <p>text</p>
         <p>text</p>
         <p>text</p>
        </div>
        <hr class="hr" />
        <div class="d-flex justify-content-around">
         <p>text</p>
         <p>text</p>
         <p>text</p>
        </div>
      </div>
    </div>


    

    <!-- <Footer /> -->
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
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'],
          label: ['Months'],
          values: [39, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
          backgroundColor: [
          'rgba(19, 63, 92, 1)'
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

<style scoped>

.shadow2{
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
  height: 400px;
  border-radius: 20px;
  margin:10px 15px 10px 20px;
  padding: 10px 0px 10px 0px;
  
}

.Barchart1{
  
  height: 340px;
  margin: auto;
  margin:0px;  
  
  @media only screen and (min-width: 1110px) {
    margin-left: 10px;
  }

  @media only screen and (min-width: 1280px) {
    margin-left: 240px;
  }
}
</style>

