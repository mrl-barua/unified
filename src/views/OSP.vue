<template>
  <div>
    <Sidebar />

    <br /><br /><br /><br />

    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 580px; width: 650px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          EMPLOYMENT DATA
        </div>

        <div style="display: flex;">
          <div style="background-color: ; color: black; flex: 1; padding: 10px; text-align: center;">
            IP GROUP
          </div>

          <div style="background-color: ; color: black; flex: 1; padding: 10px; text-align: center;">
            PWD
          </div>
          <div style="background-color: ; color: black; flex: 1; padding: 10px; text-align: center;">
            SOLO PARENT
          </div>
        </div>
        <div style="display: flex;">
          <div style="flex: 1; padding: 10px; text-align: center;">
            <span style="font-size: 40px; font-weight: bold;">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center;">
            <span style="font-size: 40px; font-weight: bold;">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center;">
            <span style="font-size: 40px; font-weight: bold;">0</span>
          </div>
        </div>
        <!-- Gray line to separate sections -->
        <hr style="border: 2px solid #a9a9a9;">

        <div style="text-align: center;">
          <span style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">EMPLOYMENT STATUS</span>
        </div>
        
      
        
        <!-- Container for PieChart and Employment choices -->
        <div style="display: flex; align-items: center; justify-content: center;">
          <PieChart :data="MonthData" />
          <div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modified "DIVISION" section -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          <span>DIVISION</span>
        </div>
        <hr style="border: 2px solid #a9a9a9;">
        <div style="background-color: ; color: black; padding: 10px;">
          <div style="display: flex; justify-content: space-between;">
            <div><b>DIVISION</b></div>
            <div><b>RECORD COUNT</b></div>
          </div>
        </div>

        <!-- Division records with bar graphs -->
        <div v-for="division in divisions" :key="division" style="background-color: ; color: black; padding: 10px; display: flex; align-items: center; justify-content: space-between;">
          <span>{{ division }}</span>
          <div style="background-color: #808080; width: 100px; height: 20px; margin: 0 10px;">
            <div style="background-color: orange; width: 50%; height: 100%;"></div>
          </div>
         <span style="margin-right: 50px;">0</span>
        </div>
      </div>
    </div>
  </div><!-- New box for Status -->
<div class="col-12 col-md-6">
  <div class="dashboard-box" style="height: 193px; width: 633px;">
    <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
      STATUS (FILLED/UNFILLED)
    </div>
    <div style="flex: 1; padding: 10px; text-align: center;">
            <span style="font-size: 40px; font-weight: bold;">0</span>
          </div>
          
  </div>
</div>
<!-- New box below Employment Data -->
    <div class="col-12 col-md-6">
     <div class="dashboard-box" style="height: 300px; width: 633px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          GENDER AND AGE
        </div>
        <!-- Content for the new box here -->
      </div>
    </div>
    <!-- New layout for boxes 2 and 3 -->
    <div class="col-12 col-md-6" style="display: flex; justify-content: space-between;">
      <div class="dashboard-box" style="height: 300px; width: 310px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
         EMPLOYMENT TYPE
        </div>
        <!-- Content for the new box here -->
      </div>

      <div class="dashboard-box" style="height: 300px; width: 310px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          GENDER
        </div>
        <!-- Content for the new box here -->
      </div>
    </div>
    <!-- End of new layout -->
    
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer';
import PieChart from '@/components/ChartJS/PieChart'; //Import the PieChart component


export default {
  name: 'OSP',
  components: {
    Sidebar,
    Footer,
    PieChart, //PieChart to the components
  },
  data() {
    return {
      divisions: ['Division #1', 'Division #2', 'Division #3', 'Division #4'], // Add the division data here
      MonthData: {
        labels: ['Permanent', 'MOA', 'Contractual'], //choices
        values: [80, 15, 20], //values 
        backgroundColor: [
          'rgba(19, 63, 92, 1)',
          'rgba(89, 80, 141, 1)',
          'rgba(243, 165, 51, 1)',
        ],
      },
    };
  },
};
</script>

<style>
.dashboard-box {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
