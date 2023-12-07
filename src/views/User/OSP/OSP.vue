<template>
  <div>
    <Sidebar :iconText="PageTitle" />

    <br /><br /><br /><br />

    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 630px">
        <p class="employmentdata-header">EMPLOYMENT DATA</p>

        <div class="col-12" style="display: flex">
          <div class="col-2">
            <p class="employmentdata-text">IP GROUP</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-text">PWD</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-text">SOLO PARENT</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-text">COTERMINOUS</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-text">CASUAL</p>
          </div>
        </div>
        <div class="col-12">
          <div class="col-2">
            <p class="employmentdata-content">0</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-content">0</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-content">0</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-content">0</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-content">0</p>
          </div>
        </div>
        <!-- Gray line to separate sections -->
        <hr style="border: 2px solid #a9a9a9" />

        <div style="text-align: center">
          <p class="employmentdata-header">EMPLOYMENT STATUS</p>
        </div>

        <!-- Container for PieChart and Employment choices -->
        <div class="chart-container">
          <PieChart :data="EmploymentData" />
        </div>
      </div>
    </div>

    <!-- DIVISION section -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box">
        <div
          style="
            background-color: ;
            color: black;
            padding: 10px;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
          "
        >
          <span>DIVISION</span>
        </div>
        <div class="shadow3">
          <div class="inside">
            <DataTable
              id="table"
              :paging="true"
              :searching="true"
              :info="true"
              :responsive="true"
              :length-change="true"
              :length-menu="[10, 25, 50, 100]"
              :language="{
                paginate: {
                  previous: '<i class=\'fas fa-angle-left\'></i>',
                  next: '<i class=\'fas fa-angle-right\'></i>',
                },
              }"
            >
              <thead style="background: #133f5c" class="text-white">
                <tr>
                  <th>DIVISION</th>
                  <th>RECORD COUNT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No Data Available</td>
                  <td>No Data Available</td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <!-- Status -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 254px">
        <div
          style="
            background-color: ;
            color: black;
            padding: 10px;
            font-weight: bold;
            font-size: 20px;
            text-align: center;
          "
        >
          STATUS
        </div>

        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 20px; font-weight: bold; color: black"
              >FILLED</span
            >
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 20px; font-weight: bold; color: black"
              >UNFILLED</span
            >
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; text-align: center">
            <span style="font-size: 60px; font-weight: bold; color: red"
              >0</span
            >
          </div>
          <div style="flex: 1; text-align: center">
            <span style="font-size: 60px; font-weight: bold; color: #292d96"
              >0</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Gender and Age Box -->
    <div class="col-12 col-md-9">
      <div class="dashboard-box" style="height: 350px">
        <br />
        <h5 class="fw-bold">GENDER AND AGE</h5>
        <br />
        <div class="Barchart1"><StackBarChart :data="GenageData" /></div>
      </div>
    </div>

    <div class="col-12 col-md-3">
      <div class="dashboard-box" style="height: 350px">
        <br />
        <h5 class="fw-bold">EMPLOYMENT TYPE</h5>
        <br />
        <div class="Barchart1">
          <PieChart :data="employmentType" style="height: 200px" />
        </div>
      </div>
    </div>

    <!-- Employment Type and Gender Box -->
    <!-- <div class="col-12 col-md-6" style="justify-content: space-between">
      <div class="col-6">
        <div class="dashboard-box" style="height: 300px">
          <div
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: bold;
              font-size: 20px;
              text-align: center;
            "
          >
            EMPLOYMENT TYPE
          </div>

          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <PieChart :data="employmentType" style="height: 200px" />
            <div></div>
          </div>
        </div>
      </div>
    </div> -->
  </div>

  <div class="col-12 col-md-12">
    <div class="h2">
      <h2>ELIGIBILITY</h2>
    </div>
  </div>

  <div class="col-12 col-md-6">
    <div class="shadow2">
      <div class="inside">
        <DataTable
          id="table"
          :paging="true"
          :searching="true"
          :info="true"
          :responsive="true"
          :length-change="true"
          :length-menu="[10, 25, 50, 100]"
          :language="{
            paginate: {
              previous: '<i class=\'fas fa-angle-left\'></i>',
              next: '<i class=\'fas fa-angle-right\'></i>',
            },
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>CSC and Others</th>
              <th>Record Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
              <td>No Data Available</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="shadow2">
      <div class="inside">
        <DataTable
          id="table"
          :paging="true"
          :searching="true"
          :info="true"
          :responsive="true"
          :length-change="true"
          :length-menu="[10, 25, 50, 100]"
          :language="{
            paginate: {
              previous: '<i class=\'fas fa-angle-left\'></i>',
              next: '<i class=\'fas fa-angle-right\'></i>',
            },
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>Licensed</th>
              <th>Record Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
              <td>No Data Available</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="shadow2">
      <div class="inside">
        <DataTable
          id="table"
          :paging="true"
          :searching="true"
          :info="true"
          :responsive="true"
          :length-change="true"
          :length-menu="[10, 25, 50, 100]"
          :language="{
            paginate: {
              previous: '<i class=\'fas fa-angle-left\'></i>',
              next: '<i class=\'fas fa-angle-right\'></i>',
            },
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>Highest Level of Eligibility (1st Level / 2nd Level)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>

  <!-- W/WO ELIGIBILITY -->
  <div class="col-12 col-md-6">
    <div class="dashboard-box" style="height: 300px">
      <div style="display: flex; justify-content: space-between">
        <div style="flex: 1; padding: 10px; text-align: center">
          <br />
          <br />
          <span style="font-size: 20px; font-weight: bold; color: black"
            >WITH ELIGIBILITY</span
          >
        </div>
        <div style="flex: 1; padding: 10px; text-align: center">
          <br />
          <br />
          <span style="font-size: 20px; font-weight: bold; color: black"
            >WITHOUT ELIGIBILITY</span
          >
        </div>
      </div>
      <div style="display: flex; justify-content: space-between">
        <div style="flex: 1; padding: 10px; text-align: center">
          <span style="font-size: 60px; font-weight: bold; color: red">0</span>
        </div>
        <div style="flex: 1; padding: 10px; text-align: center">
          <span style="font-size: 60px; font-weight: bold; color: #292d96"
            >0</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { backendURL } from "@/config.js";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer";
import BarChart from "@/components/ChartJS/Barchart";
import PieChart from "@/components/ChartJS/PieChart";
import DoughnutChart from "@/components/ChartJS/DoughnutChart";
import StackBarChart from "@/components/ChartJS/StackBarChart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "OSP",
  components: {
    Sidebar,
    Footer,
    BarChart,
    PieChart,
    DoughnutChart,
    DataTable,
    StackBarChart,
  },
  data() {
    return {
      PageTitle: "OPERATIONAL STAFF DATABASE",

      EmploymentData: {
        labels: ["MOA", "Permanent", "Contractual", "Coterminous", "Casual"],
        values: [25, 25, 25, 25, 25], //  values
        backgroundColor: [
          "#E2504C",
          "#6A9EDA",
          "#EECA06",
          "#FF6961",
          "#84B6F4",
        ],
      },

      employmentType: {
        labels: ["Senior Citizen", "Indigenous People", "Solo Parents", "PWD"],
        values: [25, 25, 25, 25, 25], //  values
        backgroundColor: ["#6A9EDA", "#F8DA45", "#FF7676", "#BAC2FF"], // Add colors for each gender
      },

      GenageData: {
        labels: [
          "22-24",
          "25-27",
          "28-30",
          "31-33",
          "34-36",
          "37-39",
          "40-42",
          "43-45",
          "46-48",
          "49-51",
          "52-54",
          "55-57",
          "58-60",
          "61-63",
          "64",
          "65",
        ],
        datasets: [
          {
            label: "Male",
            values: [
              89, 56, 12, 45, 90, 34, 67, 90, 23, 87, 54, 10, 89, 23, 56, 63,
            ],
            backgroundColor: ["#BAC2FF"],
          },
          {
            label: "Female",
            values: [45, 78, 10, 0, 89, 23, 90, 12, 34, 56, 78, 90, 54, 32, 67],
            backgroundColor: ["#FF7676"],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.dashboard-box {
  padding: 20px;
  margin: 5px 5px 5px 5px;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
}

.shadow3 {
  height: 275px;
  /* border-radius: 20px; */
}
.shadow2 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 300px;
  margin: 5px 5px 5px 5px;
  padding: 10px;
}

.Barchart1 {
  height: 250px;
}

.h2 {
  font-family: Arial, Helvetica, sans-serif;
  margin: 15px 5px;
  background-color: #133f5c;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 2px;
}
.employmentdata-header {
  color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
.employmentdata-text {
  color: black;
  flex: 1;
  padding: 10px;
  text-align: center;
}

.employmentdata-content {
  font-size: 40px;
  font-weight: bold;
}

.chart-container {
  /* padding-bottom: 20px; */
  width: 100%;
}
</style>
