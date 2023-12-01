<template>
  <div>
    <Sidebar :iconText="PageTitle" />

    <br /><br /><br /><br />

    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 580px">
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
          EMPLOYMENT DATA
        </div>

        <div style="display: flex">
          <div
            style="
              background-color: ;
              color: black;
              flex: 1;
              padding: 10px;
              text-align: center;
            "
          >
            IP GROUP
          </div>

          <div
            style="
              background-color: ;
              color: black;
              flex: 1;
              padding: 10px;
              text-align: center;
            "
          >
            PWD
          </div>
          <div
            style="
              background-color: ;
              color: black;
              flex: 1;
              padding: 10px;
              text-align: center;
            "
          >
            SOLO PARENT
          </div>
          <div
            style="
              background-color: ;
              color: black;
              flex: 1;
              padding: 10px;
              text-align: center;
            "
          >
            Coterminous
          </div>

          <div
            style="
              background-color: ;
              color: black;
              flex: 1;
              padding: 10px;
              text-align: center;
            "
          >
            Casual
          </div>
        </div>
        <div style="display: flex">
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 40px; font-weight: bold">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 40px; font-weight: bold">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 40px; font-weight: bold">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 40px; font-weight: bold">0</span>
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 40px; font-weight: bold">0</span>
          </div>
        </div>
        <!-- Gray line to separate sections -->
        <hr style="border: 2px solid #a9a9a9" />

        <div style="text-align: center">
          <span
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: bold;
              font-size: 20px;
              text-align: center;
            "
            >EMPLOYMENT STATUS</span
          >
        </div>

        <!-- Container for PieChart and Employment choices -->
        <div
          style="display: flex; align-items: center; justify-content: center"
        >
          <PieChart :data="EmploymentData" />
          <div></div>
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
      <div class="dashboard-box" style="height: 195px">
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
          STATUS (FILLED/UNFILLED)
        </div>
        <div style="flex: 1; padding: 10px; text-align: center">
          <span style="font-size: 40px; font-weight: bold">0</span>
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

    <!-- Employment Type and Gender Box -->
    <div class="col-12 col-md-6" style="justify-content: space-between">
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
    </div>
  </div>

  <!-- ELIGIBILITY header -->

  <div class="col-12">
    <h2
      style="
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 60px;
        margin-right: 60px;
        background-color: #294d9c;
        color: white;
        font-weight: bold;
        padding: 10px;
        text-align: center;
      "
    >
      ELIGIBILITY
    </h2>
  </div>

  <!-- CSS and Others -->
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 220px">
        <div
          style="display: flex; justify-content: space-between; padding: 10px"
        >
          <div><b>CSS AND OTHERS</b></div>
          <div><b>RECORD COUNT</b></div>
        </div>
        <div style="border-bottom: 2px solid #a9a9a9"></div>
        <div style="background-color: ; color: black; padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div>1. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>2. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>3. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>4. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px"></div>
        </div>
      </div>
    </div>

    <!-- Licensed -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 220px">
        <div
          style="display: flex; justify-content: space-between; padding: 10px"
        >
          <div><b>LICENSED</b></div>
          <div><b>RECORD COUNT</b></div>
        </div>
        <div style="border-bottom: 2px solid #a9a9a9"></div>
        <div style="background-color: ; color: black; padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div>1. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>2. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>3. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>4. lorem ipsum</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- HIGHEST LEVEL OF ELIGIBILITY -->
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 220px">
        <div style="display: flex; justify-content: center; padding: 10px">
          <div><b>HIGHEST LEVEL OF ELIGIBILITY</b></div>
        </div>
        <div style="border-bottom: 2px solid #a9a9a9"></div>
        <div style="background-color: ; color: black; padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div>1. lorem ipsum</div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>2. lorem ipsum</div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>3. lorem ipsum</div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 10px"></div>
          <div style="display: flex; justify-content: space-between">
            <div>4. lorem ipsum</div>
          </div>
          <div style="border-bottom: 2px solid #a9a9a9; margin-top: 10px"></div>
        </div>
      </div>
    </div>

    <!-- W/WO ELIGIBILITY -->
    <div class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 220px">
        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 20px; font-weight: bold; color: black"
              >WITH ELIGIBILITY</span
            >
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 20px; font-weight: bold; color: black"
              >WITHOUT ELIGIBILITY</span
            >
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 60px; font-weight: bold; color: red"
              >0</span
            >
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <span style="font-size: 60px; font-weight: bold; color: #292d96"
              >0</span
            >
          </div>
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

      MonthData: {
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
        labels: [], //  two choices for gender
        values: [30, 10, 20, 40], //values
        backgroundColor: [
          "rgba(235, 95, 94)",
          "rgba(243,165,51)",
          "rgba(89,80,141)",
          "rgba(188,80,144)",
        ], // Add colors for each gender
      },
      genderData: {
        labels: [], //two choices for gender
        values: [50, 50], //values accordingly
        backgroundColor: ["rgba(235, 95, 94)", "rgba(89,80,141)"], // colors for each gender
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

.shadow2 {
  height: 275px;
  /* border-radius: 20px; */
}

.Barchart1 {
  height: 250px;
}
</style>
