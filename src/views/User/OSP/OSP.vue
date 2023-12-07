<template>
  <div>
    <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />

    <br /><br /><br /><br />

    <!-- EMPLOYMENT STATUS AND TYPE -->
    <section class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 630px">
        <p class="employmentdata-header">EMPLOYMENT STATUS</p>

        <div class="col-12" style="display: flex">
          <div class="col-2">
            <p class="employmentdata-text">MOA</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-text">PERMANENT</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-text">CASUAL</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-text">CONTRACTUAL</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-text">COTERMINOUS</p>
          </div>
        </div>
        <div class="col-12">
          <div class="col-2">
            <p class="employmentdata-content">{{ MOA }}</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-content">{{ PERMANENT }}</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-content">{{ CASUAL }}</p>
          </div>
          <div class="col-3">
            <p class="employmentdata-content">{{ CONTRACTUAL }}</p>
          </div>
          <div class="col-2">
            <p class="employmentdata-content">{{ COTERMINOS }}</p>
          </div>
        </div>
        <!-- Gray line to separate sections -->
        <hr style="border: 2px solid #a9a9a9" />

        <div style="text-align: center">
          <p class="employmentdata-header">EMPLOYMENT TYPE</p>
        </div>

        <!-- Container for PieChart and Employment choices -->
        <div class="chart-container">
          <PieChart
            :data="countOfRequestingEmployee"
            v-if="countOfRequestingEmployee"
          />
        </div>
      </div>
    </section>

    <!-- DIVISION DATATABLES -->
    <section class="col-12 col-md-6">
      <div class="dashboard-box">
        <h5>
          <span>DIVISION</span>
        </h5>
        <div class="shadow3">
          <div class="inside">
            <DataTable
              id="table"
              class="display stripe order-column hover compact text-start"
              :data="DetailsOfRequestingEmployee"
              :columns="columns"
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
                  <th>DIVISION</th>
                  <th>RECORD COUNT</th>
                </tr>
              </thead>
            </DataTable>
          </div>
        </div>
      </div>
    </section>

    <!-- STATUS FILLED AND UNFILLED -->
    <section class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 275px">
        <h5>STATUS</h5>

        <div style="display: flex; justify-content: space-between">
          <p style="flex: 1; padding: 10px; text-align: center">
            <span style="font-family: Inter; font-size: 22px; font-weight: 500"
              >FILLED</span
            >
          </p>
          <div style="flex: 1; padding: 10px; text-align: center">
            <p style="font-family: Inter; font-size: 22px; font-weight: 500">
              UNFILLED
            </p>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; text-align: center">
            <p style="font-size: 60px; font-weight: bold; color: red">
              {{ FILLED }}
            </p>
          </div>
          <div style="flex: 1; text-align: center">
            <span style="font-size: 60px; font-weight: bold; color: #292d96">{{
              UNFILLED
            }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- GENDER AND AGE BARCHART -->
    <section class="col-12 col-md-12">
      <div class="dashboard-box" style="height: 350px">
        <h5 class="fw-bold">GENDER AND AGE</h5>
        <div class="Barchart1">
          <StackBarChart :data="GenageData" v-if="GenageData" />
        </div>
      </div>
    </section>

    <!-- ELIGIBILITY INDICATOR -->
    <section class="col-12 col-md-12">
      <div class="h2">
        <h2>ELIGIBILITY</h2>
      </div>
    </section>

    <!-- CSC AND OTHERS DATATABLE -->
    <section class="col-12 col-md-6">
      <div class="shadow2">
        <div class="inside">
          <DataTable
            id="table"
            class="display stripe order-column hover compact text-start"
            :data="CssAndOthers"
            :columns="columnscsc"
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
                <th>DIVISION</th>
                <th>RECORD COUNT</th>
              </tr>
            </thead>
          </DataTable>
        </div>
      </div>
    </section>

    <!-- LICENSED DATATABLE -->
    <section class="col-12 col-md-6">
      <div class="shadow2">
        <div class="inside">
          <DataTable
            id="table"
            class="display stripe order-column hover compact text-start"
            :data="Licensed"
            :columns="columnslicensed"
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
                <th>DIVISION</th>
                <th>RECORD COUNT</th>
              </tr>
            </thead>
          </DataTable>
        </div>
      </div>
    </section>

    <!-- HIGHEST LEVEL OF ELIGIBILITY DATATABLE -->
    <section class="col-12 col-md-6">
      <div class="shadow2">
        <div class="inside">
          <DataTable
            id="table"
            class="display stripe order-column hover compact text-start"
            :data="HighestLevelOfEligibility"
            :columns="columnshighestLevelOfEligibility"
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
                <th>DIVISION</th>
                <th>RECORD COUNT</th>
              </tr>
            </thead>
          </DataTable>
        </div>
      </div>
    </section>

    <!-- W/WO ELIGIBILITY -->
    <section class="col-12 col-md-6">
      <div class="dashboard-box" style="height: 300px">
        <div style="display: flex; justify-content: space-between">
          <div style="flex: 1; padding: 10px; text-align: center">
            <br />
            <br />
            <span style="font-family: Inter; font-size: 25px; font-weight: 700"
              >WITH ELIGIBILITY</span
            >
          </div>
          <div style="flex: 1; padding: 10px; text-align: center">
            <br />
            <br />
            <span style="font-family: Inter; font-size: 25px; font-weight: 700"
              >WITHOUT ELIGIBILITY</span
            >
          </div>
        </div>
        <div style="display: flex; justify-content: space-between">
          <div class="employmentdata-text">
            <span style="font-size: 60px; font-weight: bold; color: red">{{
              WithELIGIBILITY
            }}</span>
          </div>
          <div class="employmentdata-text">
            <span style="font-size: 60px; font-weight: bold; color: #292d96">{{
              WithoutELIGIBILITY
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
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
      PageDetail: "Main Dashboard",
      error: null,

      PERMANENT: null,
      MOA: null,
      CONTRACTUAL: null,
      COTERMINOS: null,
      CASUAL: null,
      FILLED: null,
      UNFILLED: null,
      GenageData: null,
      countOfRequestingEmployee: null,
      WithELIGIBILITY: null,
      WithoutELIGIBILITY: null,

      DetailsOfRequestingEmployee: [],
      columns: [
        { title: "DIVISION", data: "division" },
        { title: "RECORD COUNT", data: "recordCount" },
      ],

      CssAndOthers: [],
      columnscsc: [
        { title: "CSC and Others", data: "cssAndOthers" },
        { title: "Record Count", data: "recordCount" },
      ],

      Licensed: [],
      columnslicensed: [
        { title: "LICENSED", data: "licensed" },
        { title: "Record Count", data: "recordCount" },
      ],

      HighestLevelOfEligibility: [],
      columnshighestLevelOfEligibility: [
        {
          title: "Highest Level of Eligibility",
          data: "highestLevelOfEligibility",
        },
        { title: "Record Count", data: "recordCount" },
      ],
    };
  },

  methods: {
    createChartConfig(labels, values) {
      return {
        labels: labels,
        label: ["Number of Record Per month"],
        values: values,
        backgroundColor: [
          "rgba(226, 80, 76, 1)",
          "rgba(106, 158, 218, 1)",
          "rgba(210, 178, 2, 1)",
          "rgba(255, 105, 97, 1)",
          "rgba(132, 182, 244, 1)",
          "rgba(238, 202, 6, 1)",
          "rgba(226, 80, 76, 1)",
          "rgba(106, 158, 218, 1)",
          "rgba(210, 178, 2, 1)",
          "rgba(255, 105, 97, 1)",
          "rgba(132, 182, 244, 1)",
          "rgba(238, 202, 6, 1)",
        ],
      };
    },

    async getEmploymentStatus() {
      try {
        const response = await axios.get(`${backendURL}/api/employmentStatus`);
        const { PERMANENT, MOA, CONTRACTUAL, COTERMINOS, CASUAL } =
          response.data.EmploymentStatus;

        this.PERMANENT = PERMANENT;
        this.MOA = MOA;
        this.CONTRACTUAL = CONTRACTUAL;
        this.COTERMINOS = COTERMINOS;
        this.CASUAL = CASUAL;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
        this.PERMANENT = null;
        this.MOA = null;
        this.CONTRACTUAL = null;
        this.COTERMINOS = null;
        this.CASUAL = null;
      }
    },

    async getPercentageOfRequestingEmployee() {
      const url = `${backendURL}/api/employmentType`;
      try {
        const res = await axios.get(url);
        this.EmploymentType = res.data.EmploymentType;
        this.countOfRequestingEmployee = this.createChartConfig(
          Object.keys(this.EmploymentType),
          Object.values(this.EmploymentType),
          [
            "rgba(226, 80, 76, 1)",
            "rgba(106, 158, 218, 1)",
            "rgba(210, 178, 2, 1)",
            "rgba(255, 105, 97, 1)",
            "rgba(132, 182, 244, 1)",
            "rgba(238, 202, 6, 1)",
          ]
        );
        // this.chartKey++;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
        this.countOfRequestingEmployee = this.createChartConfig(
          ["IP GROUP", "SOLO PARENT", "PWD", "SENIOR CITIZEN"],
          [0, 0, 0, 0],
          [
            "rgba(226, 80, 76, 1)",
            "rgba(106, 158, 218, 1)",
            "rgba(210, 178, 2, 1)",
          ]
        );
      }
    },

    async getDivisionCount() {
      const url = `${backendURL}/api/divisionCount`;
      try {
        const res = await axios.get(url);
        const divisionCount = res.data.DivisionCount;
        this.DetailsOfRequestingEmployee = Object.entries(divisionCount).map(
          ([division, recordCount]) => ({ division, recordCount })
        );
      } catch (error) {
        console.error(error);
        this.error = "An error occurred while fetching the data.";
        this.DetailsOfRequestingEmployee = [];
      }
    },

    async getStatusFilledUnfilled() {
      try {
        const response = await axios.get(
          `${backendURL}/api/statusFilledUnfilled`
        );
        if (response.data.Status) {
          const { FILLED, UNFILLED } = response.data.Status;
          this.FILLED = FILLED;
          this.UNFILLED = UNFILLED;
        } else {
          throw new Error("Status is undefined");
        }
      } catch (error) {
        console.error(error);
        this.FILLED = null;
        this.UNFILLED = null;
      }
    },

    async getGenderAndAge() {
      const url = `${backendURL}/api/genderAndAge`;
      try {
        const res = await axios.get(url);
        const genderAndAge = res.data.GenderAndAge;
        this.GenageData = {
          labels: Object.keys(genderAndAge.MALE),
          datasets: [
            {
              label: "Male",
              values: Object.values(genderAndAge.MALE),
              backgroundColor: ["#BAC2FF"],
            },
            {
              label: "Female",
              values: Object.values(genderAndAge.FEMALE),
              backgroundColor: ["#FF7676"],
            },
          ],
        };
      } catch (error) {
        console.error(error);
        this.GenageData = {
          labels: [],
          datasets: [],
        };
      }
    },

    async getCSSAndOthers() {
      const url = `${backendURL}/api/cssAndOthers`;
      try {
        const res = await axios.get(url);
        const cssAndOthers = res.data.CssAndOthers;
        this.CssAndOthers = Object.entries(cssAndOthers).map(
          ([cssAndOthers, recordCount]) => ({ cssAndOthers, recordCount })
        );
      } catch (error) {
        console.error(error);
        this.error = "An error occurred while fetching the data.";
        this.CssAndOthers = [];
      }
    },

    async getLicensed() {
      const url = `${backendURL}/api/licensed`;
      try {
        const res = await axios.get(url);
        const licensed = res.data.Licensed;
        this.Licensed = Object.entries(licensed).map(
          ([licensed, recordCount]) => ({ licensed, recordCount })
        );
      } catch (error) {
        console.error(error);
        this.error = "An error occurred while fetching the data.";
        this.Licensed = [];
      }
    },

    async getHighestLevelOfEligibility() {
      const url = `${backendURL}/api/highestLevelOfEligibility`;
      try {
        const res = await axios.get(url);
        const highestLevelOfEligibility = res.data.HighestLevelOfEligibility;
        this.HighestLevelOfEligibility = Object.entries(
          highestLevelOfEligibility
        ).map(([highestLevelOfEligibility, recordCount]) => ({
          highestLevelOfEligibility,
          recordCount,
        }));
      } catch (error) {
        console.error(error);
        this.error = "An error occurred while fetching the data.";
        this.HighestLevelOfEligibility = [];
      }
    },

    async getElegibility() {
      try {
        const response = await axios.get(
          `${backendURL}/api/withWithoutEligibilities`
        );
        if (response.data.Eligibilities) {
          const { WithELIGIBILITY, WithoutELIGIBILITY } =
            response.data.Eligibilities;
          this.WithELIGIBILITY = WithELIGIBILITY;
          this.WithoutELIGIBILITY = WithoutELIGIBILITY;
        } else {
          throw new Error("Status is undefined");
        }
      } catch (error) {
        console.error(error);
        this.WithELIGIBILITY = null;
        this.WithoutELIGIBILITY = null;
      }
    },
  },
  created() {
    this.getGenderAndAge();
  },
  mounted() {
    this.getEmploymentStatus();
    this.getPercentageOfRequestingEmployee();
    this.getDivisionCount();
    this.getStatusFilledUnfilled();
    this.getCSSAndOthers();
    this.getLicensed();
    this.getHighestLevelOfEligibility();
    this.getElegibility();
  },
};
</script>

<style scoped>
.dashboard-box {
  padding: 20px;
  margin: 5px 5px 5px 5px;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.shadow3 {
  height: 275px;
  border-radius: 3px;
}
.shadow2 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 300px;
  margin: 5px 5px 5px 5px;
  padding: 10px;
  border-radius: 3px;
}

.Barchart1 {
  height: 290px;
}

.h2 {
  font-family: Inter;
  margin: 15px 5px;
  font-size: 25px;
  background-color: #133f5c;
  color: white;
  font-weight: 700;
  text-align: center;
  padding: 12px 0 4px 0;
}

.employmentdata-header {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
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
h5 {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}
.chart-container {
  /* padding-bottom: 20px; */
  width: 100%;
}
</style>
