<template>
  <div>
    <Sidebar />

    <br /><br /><br /><br />

    <div class="col-12 col-md-6">
      <div class="dashboard-box">
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

    <div class="col-12 col-md-6">
      <div class="dashboard-box">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          DIVISION
        </div>
        <div style="background-color: ; color: black; padding: 10px; text-align: center;">
          RECORD COUNT
        </div>
        <div style="text-align: center;">
          <div>
            Division #1
          </div>
          <div>
            Division #2
          </div>
          <div>
            Division #3
          </div>
          <div>
            Division #4
          </div>
        </div>
        <div style="background-color: ; color: black; padding: 10px; text-align: center;">
          STATUS FILLED/UNFILLED
        </div>
        <div style="text-align: center;">
          <span style="font-size: 20px; font-weight: bold;">0</span>
        </div>
      </div>
    </div>

    
  </div>
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
