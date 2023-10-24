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
          <div></div>
        </div>
      </div>
    </div>

    <!-- DIVISION section -->
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
        <div
          v-for="division in divisions"
          :key="division"
          style="background-color: ; color: black; padding: 10px; display: flex; align-items: center; justify-content: space-between;"
        >
          <span>{{ division }}</span>
          <div style="background-color: #808080; width: 100px; height: 20px; margin: 0 10px;">
            <div style="background-color: orange; width: 50%; height: 100%;"></div>
          </div>
          <span style="margin-right: 50px;">0</span>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 195px; width: 633px;">
        <div
          style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;"
        >
          STATUS (FILLED/UNFILLED)
        </div>
        <div style="flex: 1; padding: 10px; text-align: center;">
          <span style="font-size: 40px; font-weight: bold;">0</span>
        </div>
      </div>
    </div>

    <!-- Gender and Age Box -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 300px; width: 648px; position:">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          GENDER AND AGE
        </div>
        <!-- SHOULD HAVE STACKED UP BAR CHART HERE -->
      </div>
    </div>

    <!-- Employment Type and Gender Box -->
    <div class="col-12 col-md-6" style="display: flex; justify-content: space-between;">
      <div class="dashboard-box" style="height: 300px; width: 310px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          EMPLOYMENT TYPE
        </div>
        <div style="display: flex; align-items: center; justify-content: center;">
          <PieChart :data="employmentType" style="height: 200px; width: 200px;" />
          <div></div>
        </div>
      </div>

      <div class="dashboard-box" style="height: 300px; width: 310px;">
        <div style="background-color: ; color: black; padding: 10px; font-weight: bold; font-size: 20px; text-align: center;">
          GENDER
        </div>
        <div style="display: flex; align-items: center; justify-content: center;">
          <PieChart :data="genderData" style="height: 200px; width: 200px;" />
          <div></div>
        </div>
      </div>
      </div> </div>

      <!-- ELIGIBILITY header -->

    <div class="col-12">
      <h2 style="margin-left: 60px; margin-right: 60px;background-color: #294D9C; color: white; font-weight: bold; padding: 10px; text-align: center;">
        ELIGIBILITY
      </h2>
    </div>
    

    <!-- CSS and Others -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="dashboard-box" style="width: 648px; height: 220px;">
          <div style="display: flex; justify-content: space-between;padding: 10px;">
            <div><b>CSS AND OTHERS</b></div>
            <div><b>RECORD COUNT</b></div>
          </div>
          <div style="border-bottom: 2px solid #a9a9a9;"></div>
          <div style="background-color: ; color: black; padding: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <div>1. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>2. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>3. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>4. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px;"></div>
          </div>
        </div>
      </div>

     <!-- Licensed -->
      <div class="col-12 col-md-6">
        <div class="dashboard-box" style="width: 620px; height: 220px;">
          <div style="display: flex; justify-content: space-between;padding: 10px;">
            <div><b>LICENSED</b></div>
            <div><b>RECORD COUNT</b></div>
          </div>
          <div style="border-bottom: 2px solid #a9a9a9;"></div>
          <div style="background-color: ; color: black; padding: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <div>1. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>2. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>3. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>4. lorem ipsum</div>
              <div style="display: flex; align-items: center; margin-right: 50px;">0</div>
            </div>
            <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px;"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- HIGHEST LEVEL OF ELIGIBILITY -->
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="dashboard-box" style="width: 648px; height: 220px;">
          <div style="display: flex; justify-content:center;padding: 10px; ">
            <div><b>HIGHEST LEVEL OF ELIGIBILITY</b></div>
          
          </div>
          <div style="border-bottom: 2px solid #a9a9a9;"></div>
          <div style="background-color: ; color: black; padding: 10px;">
            <div style="display: flex; justify-content: space-between;">
              <div>1. lorem ipsum</div>
              
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>2. lorem ipsum</div>
            
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>3. lorem ipsum</div>
              
            </div>
            <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px;"></div>
            <div style="display: flex; justify-content: space-between;">
              <div>4. lorem ipsum</div>
           
            </div>
            <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px;"></div>
          </div>
        </div>
      </div>

     
      <!-- W/WO ELIGIBILITY -->
   <div class="col-12 col-md-6">
  <div class="dashboard-box" style="height: 220px; width: 620px;">
    <div style="display: flex; justify-content: space-between;">
      <div style="flex: 1; padding: 10px; text-align: center;">
        <span style="font-size: 20px; font-weight: bold; color: black;">WITH ELIGIBILITY</span>
      </div>
      <div style="flex: 1; padding: 10px; text-align: center;">
        <span style="font-size: 20px; font-weight: bold; color: black;">WITHOUT ELIGIBILITY</span>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <div style="flex: 1; padding: 10px; text-align: center;">
        <span style="font-size: 60px; font-weight: bold; color: red;">0</span>
      </div>
      <div style="flex: 1; padding: 10px; text-align: center;">
        <span style="font-size: 60px; font-weight: bold; color: #292D96;">0</span>
      </div>
    </div>
  </div></div>
</div>
    
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer';
import PieChart from '@/components/ChartJS/PieChart'; 

export default {
  name: 'OSP',
  components: {
    Sidebar,
    Footer,
    PieChart, 
  },
  data() {
    return {
      divisions: ['Division #1', 'Division #2', 'Division #3', 'Division #4'], //division data 
      MonthData: {
        labels: ['Permanent', 'MOA', 'Contractual'], 
        values: [80, 15, 20, ], //  values 
        backgroundColor: [
          'rgba(19, 63, 92, 1)',
          'rgba(89, 80, 141, 1)',
          'rgba(243, 165, 51, 1)',
          
        ],
      },
      employmentType: {
        labels: [], //  two choices for gender
        values: [30, 10, 20, 40, ], //values 
        backgroundColor: ['rgba(235, 95, 94)', 'rgba(243,165,51)', 'rgba(89,80,141)', 'rgba(188,80,144)'], // Add colors for each gender
      },
      genderData: {
        labels: [], //two choices for gender
        values: [50, 50], //values accordingly
        backgroundColor: ['rgba(235, 95, 94)', 'rgba(89,80,141)'], // colors for each gender
        
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
