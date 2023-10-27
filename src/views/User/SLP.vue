<template>
    
    <Sidebar />

    <br><br><br><br>
   
    <h1><b> SUSTAINABLE LIVELIHOOD PROGRAM (SLP)</b></h1>

<!-- 1 -->
    <div class="col-12 col-md-6">
        <div class="shadow2 forbarchart">
          <p><b>TOTAL ACCOMPLISHMENT VS PHYSICAL TARGET</b></p>
          <div class="Barchart1"><HBarChart :data="SLPData" /></div>
        </div>
    </div>
<!-- 2 -->
    <div class="col-12 col-md-6">
        <div class="shadow2 forbarchart">
           <p><b>REFERRALS</b></p>
          <div class="Barchart1"><HBarChart :data="SLPData" /></div>
        </div>
    </div>

<!-- 3 -->
    <div class="col-12 col-md-6">
      <div class="shadow2">
           <p><b>SECTORAL ACCOMPLISHMENT</b></p>
          <div class="Piechart1">
            <DoughnutChart v-if="EmploymentData" :data="EmploymentData" />
          </div>
        </div>
    </div>

<!-- 4 -->
    <div class="col-12 col-md-6">
        <div class="shadow2 forbarchart">
           <p><b>BREAKDOWN OF REGIONAL ACCOMPLISHMENT</b></p>
          <div class="Barchart1"><HBarChart :data="SLPData" /></div>
        </div>
    </div>

 <!-- Can be use as reference for piechart -->
   




    

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
    name: 'HR',
    components: {
        Sidebar,
        Footer,
        BarChart,
        PieChart,
        DoughnutChart
    
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

        SLPData: {
          labels: ['Jan', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' , 'December'],
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


        EmploymentData: null,
      };
    },

 methods:{
  EmploymentFetchData() {
      return axios
        .get('http://127.0.0.1:8000/api/employmentStatus')
        .then(response => {
          // Initialize data arrays
          const moa = [];
          const permanent = [];
          const contractual = [];
          const coterminos = [];
          const casual = [];
         

          response.data.forEach(item => {
            const employmentstatus = item.EMPLOYMENT_STATUS;

            switch (employmentstatus) {
              case 'MOA':
                  moa.push(item);
                break;
              case 'PERMANENT':
                  permanent.push(item);
                break;
              case 'CONTRACTUAL':
                 contractual.push(item);
                break; 
              case 'COTERMINOS':
                coterminos.push(item);
                break; 
              case 'CASUAL':
                casual.push(item);
                break; 
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const moaLength = moa.length;
          const permanentLength = permanent.length;
          const contractualLength = contractual.length;
          const coterminosLength = coterminos.length;
          const casualLength = casual.length;
          // Prepare and return data
          const employmentdata = {
            labels: ['MOA', 'PERMANENT', 'CONTRACTUAL', 'COTERMINOS', 'CASUAL'],
            label: ['Employment Data'],
            values: [moaLength, permanentLength, contractualLength, coterminosLength, casualLength],
            backgroundColor: ['rgba(19, 63, 92, 1)',
                              'rgba(243, 165, 51, 1)',
                              'rgba(235, 95, 94, 1)',
                              'rgba(0, 255, 0, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                            
          ],
          };
          // Set barChartData to the computed data
          this.EmploymentData = employmentdata;
        })
        .catch(error => {
          console.error('Error fetching data:', error);


          const employmentdata = {
            labels: ['MOA', 'PERMANENT', 'CONTRACTUAL', 'COTERMINOS', 'CASUAL'],
            label: ['Employment Data'],
            values: [1, 1, 1, 1, 1],
            backgroundColor: ['rgba(25, 82, 105, 0.6)',
                              'rgba(0, 255, 0, 0.6)',
                              'rgba(0, 0, 255, 0.6)',
                            
          ],
          };
          // Set barChartData to the computed data
          this.EmploymentData = employmentdata;

        });
    },

 },



  mounted() {
    // Automatically fetch data when the component is mounted
    this.EmploymentFetchData();
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
  
  
  
  @media only screen and (min-width: 1110px) {
    margin-left: 10px;
  }

  @media only screen and (min-width: 1280px) {
    margin-left: 16%;
    /* margin-right: 50; */
    height: 340px; 
  }
}

</style>