<template>
  <div>
    <Sidebar />

    <br><br><br><br>

    <div class="col-12 col-md-6">
      <div class="dashboard-box">
        <div style="background-color: red; color: white; padding: 10px;">
          EMPLOYMENT
        </div>
        <div style="display: flex;">
          <div style="background-color: ; color: black; flex: 1; padding: 10px;">
            IP GROUP
          </div>
          <div style="background-color: ; color: black; flex: 1; padding: 10px;">
            PWD
          </div>
          <div style="background-color: ; color: black; flex: 1; padding: 10px;">
            SOLO PARENT
          </div>
        </div>
        <div>
          0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0
        </div>
        <!-- More content here -->
      </div>
    </div>

    <div class="col-12 col-md-6">
      <div class="dashboard-box">
        <div style="background-color: red; color: white; padding: 10px;">
          DIVISION
        </div>
        <div style="background-color: ; color: black; padding: 10px;">
          RECORD COUNT
        </div>
        <div>
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
      </div>
    </div>

    <div class="col-12 col-md-6">
      <DougnutChart :data="NameData" />
    </div>

    <div class="col-12 col-md-6">
      <DougnutChart :data="MonthData" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; 
import Footer from '@/components/Footer';

import DougnutChart from '@/components/ChartJS/DoughnutChart';

export default {
  name: 'OSP',
  components: {
    Sidebar,
    Footer,
    DougnutChart,
  },

  data() {
    return {
      MonthData: {
        labels: ['WEDC', 'OTHERS', 'FHONA', 'PWD', 'OLDER PERSONS', 'OFW'],
        label: ['CHART1'],
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
