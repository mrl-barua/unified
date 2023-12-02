<template>
  <div>
    <Sidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="col-12 wrapper container-fluid col-12">
      <section class="dashboard-summary">
        <div class="dashboard-container">
          <h1>DASHBOARD SUMMARY</h1>
          <div class="col-12">
            <div class="col-4">
              <p class="dashboard-text">Total Number of Clients Served</p>
              <p class="dashboard-value">0</p>
              <br />
              <p class="dashboard-text">Financial Assistance Amount Given</p>
              <p class="dashboard-value">000</p>
            </div>
            <div class="col-4">
              <p class="dashboard-subtext">Gender of Clients Served</p>
              <div class="col-6">
                <p class="dashboard-center text-center">FEMALE</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">0</p>
              </div>

              <div class="col-6">
                <p class="dashboard-center text-center">MALE</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">0</p>
              </div>
              <br />
              <br />
              <br />
              <p class="dashboard-subtext">Mode of Admissions</p>
              <div class="col-6">
                <p class="dashboard-center text-center">WALK-IN</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">0</p>
              </div>

              <div class="col-6">
                <p class="dashboard-center text-center">DSW D...</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">0</p>
              </div>
            </div>
            <div class="col-4">
              <p class="dashboard-text">Number of Case Categories</p>
              <p class="dashboard-value">0</p>
              <br />
              <p class="dashboard-text">Number of Non- Monetary Services</p>
              <p class="dashboard-value">0</p>
            </div>
          </div>
        </div>
      </section>

      <section class="barchart-section col-12">
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Clients Served per Quarter</p>
              <div class="chart-container lineChart">
                <LineChart :data="ClientData" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Clients Served per Age and Sex</p>
              <div class="chart-container lineChart">
                <LineChart :data="sexData" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Case Categories Served</p>
              <div class="chart-container"><BarChart :data="ClientData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="dataTable-container">
                <DataTable
                  style="width: 90%"
                  class="display stripe order-column hover compact"
                  id="hrTable"
                  :options="{
                    lengthChange: false,
                    searching: false,
                    // pageLength: 5,
                    scrollY: '200px',
                    info: false,
                    paging: false,
                  }"
                >
                  <thead style="background: #133f5c" class="text-white">
                    <tr>
                      <th>CATEGORY NAME</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Sub - Categories Served</p>
              <div class="chart-container"><BarChart :data="CaseData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="dataTable-container">
                <DataTable
                  style="width: 90%"
                  class="display stripe order-column hover compact"
                  id="hrTable"
                  :options="{
                    lengthChange: false,
                    searching: false,
                    // pageLength: 5,
                    scrollY: '200px',
                    info: false,
                    paging: false,
                  }"
                >
                  <thead style="background: #133f5c" class="text-white">
                    <tr>
                      <th>CATEGORY NAME</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                    <tr>
                      <td>TEST</td>
                      <td>TEST</td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="col-12">
        <div class="col-4">
          <div class="shadow-container2">
            <p class="section2-header">Non-Monetary Services Served</p>
            <div class="dataTable-container">
              <DataTable
                style="width: 90%"
                class="display stripe order-column hover compact"
                id="hrTable"
                :options="{
                  lengthChange: false,
                  searching: false,
                  // pageLength: 5,
                  scrollY: '200px',
                  info: false,
                  paging: false,
                }"
              >
                <thead style="background: #133f5c" class="text-white">
                  <tr>
                    <th>Service Name</th>
                    <th>Number of Person Served</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                  <tr>
                    <td>TEST</td>
                    <td>TEST</td>
                  </tr>
                </tbody>
              </DataTable>
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="shadow-container">
            <p class="section2-header">CBSS Staff Monitoring</p>
            <div class="col-12">
              <div class="col-6">
                <div class="dataTable-container">
                  <DataTable
                    style="width: 90%"
                    class="display stripe order-column hover compact"
                    id="hrTable"
                    :options="{
                      lengthChange: false,
                      searching: false,
                      // pageLength: 5,
                      scrollY: '200px',
                      info: false,
                      paging: false,
                    }"
                  >
                    <thead style="background: #133f5c" class="text-white">
                      <tr>
                        <th>Responsible Person</th>
                        <th>Total Number of Client Served</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                    </tbody>
                  </DataTable>
                </div>
              </div>
              <div class="col-6">
                <div class="dataTable-container">
                  <DataTable
                    style="width: 90%"
                    class="display stripe order-column hover compact"
                    id="hrTable"
                    :options="{
                      lengthChange: false,
                      searching: false,
                      // pageLength: 5,
                      scrollY: '200px',
                      info: false,
                      paging: false,
                    }"
                  >
                    <thead style="background: #133f5c" class="text-white">
                      <tr>
                        <th>Responsible Person</th>
                        <th>Total Number of Client Served</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      <tr>
                        <td>TEST</td>
                        <td>TEST</td>
                      </tr>
                      v
                    </tbody>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { backendURL } from "@/config.js";
import axios from "axios";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer";
import BarChart from "@/components/ChartJS/Barchart";
import PieChart from "@/components/ChartJS/PieChart";
import DoughnutChart from "@/components/ChartJS/DoughnutChart";
import HBarChart from "@/components/ChartJS/HBarchart";
import StackBarChart from "@/components/ChartJS/StackBarchart";
import HStackBarChart from "@/components/ChartJS/HStackBarchart";
import BarChartM from "@/components/ChartJS/BarchartM.vue";
import LineChart from "@/components/ChartJS/LineChart.vue";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);
export default {
  name: "CBSS",
  components: {
    Sidebar,
    LineChart,
    Footer,
    BarChart,
    PieChart,
    HBarChart,
    DoughnutChart,
    StackBarChart,
    HStackBarChart,
    BarChartM,
    DataTable,
  },

  data() {
    return {
      PageTitle: "CBSS",

      ClientData: {
        labels: ["1", "2", "3", "4", "5", "6"],
        label: ["Client"],
        values: [50, 75, 225, 100, 200, 40],
        backgroundColor: [
          "rgba(150, 9, 9, 1)",
          "rgba(198, 54, 55, 1)",
          "rgba(226, 80, 76, 1)",
          "rgba(255, 105, 97, 1)",
          "rgba(255, 150, 136, 1)",
          "rgba(255, 191, 176, 1)",
        ],
      },

      CaseData: {
        labels: ["1", "2", "3", "4"],
        label: ["Client"],
        values: [50, 75, 225, 100],
        backgroundColor: [
          "rgba(183, 154, 0, 1)",
          "rgba(210, 178, 2, 1)",
          "rgba(238, 202, 6, 1)",
          "rgba(248, 228, 75, 1)",
        ],
      },

      sexData: {
        labels: ["0", "5-17", "18-28", "29-39", "40-50", "51-61", "62 & above"],
        datasets: [
          {
            label: "Female",
            data: [23, 75, 25, 21, 54, 52, 12, 66],
            backgroundColor: "red",
            fill: false, // for line chart
            borderColor: "red", // for line chart
          },
          {
            label: "Male",
            data: [13, 25, 35, 11, 44, 52, 22, 76],
            backgroundColor: "blue",
            fill: false, // for line chart
            borderColor: "blue", // for line chart
          },
        ],
      },

      BarData: {
        labels: ["1st", "2nd", "3rd", "4th"],
        label: ["Quarter"],
        values: [0, 25, 75, 100],
        backgroundColor: ["#C8C375"],
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";

h1 {
  font-family: Inter;
  font-size: 43px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 20px;
}

.dashboard-text {
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-subtext {
  font-family: Arial;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 40px;
}

.dashboard-value {
  font-family: Inter;
  font-size: 70px;
  font-weight: 600;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-center {
  font-family: Inter;
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.section2-header {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 20px;
}

.chart-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.dashboard-container {
  width: 100%;
  height: 500px;
  margin: 10px auto;
  padding: 5px 5px 5px 5px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.shadow-container {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  padding: 5px 5px 5px 5px;
  width: 98%;
  height: 400px;
  border-radius: 3px;
  margin-bottom: 10px;
}

.lineChart {
  padding-bottom: 100px;
}

.dataTable-container {
  padding: 0px 20px 10px 20px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
