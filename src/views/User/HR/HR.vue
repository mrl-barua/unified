/** * @name HR * @description This component represents the HR page in the user
interface. * It displays various charts and a data table related to employee
welfare and relations. * The component fetches data from the backend API to
populate the charts and table. * * @component * * @example *
<HR />
*/
<template>
  <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />

  <br /><br /><br /><br />

  <div class="col-12 col-md-8">
    <div class="shadow2 forbarchart">
      <div class="inside">
        <p class="textHeader">NUMBER OF RECORDS PER MONTH</p>
        <div>
          <label for="monthSelect">Select Month: </label>
          <select id="monthSelect" v-model="selectedMonth" class="me-3">
            <option
              v-for="(month, index) in availableMonths"
              :key="index"
              :value="month"
            >
              {{ month }}
            </option>
          </select>

          <label for="yearSelect">Select Year: </label>
          <select id="yearSelect" v-model="selectedYear">
            <option v-for="year in availableYears" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <div class="Barchart1">
          <BarChart
            :data="recordsPerMonthChart"
            :key="chartKey"
            v-if="recordsPerMonthChart"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-4">
    <div class="shadow2">
      <div class="inside">
        <p class="textHeader">TOTAL NUMBER OF CATEGORIES REQUEST</p>
        <div class="Piechart1">
          <PieChart
            :data="numberOfCategoryRequest"
            v-if="numberOfCategoryRequest"
            :key="chartKey"
            :legendOptions="customLegendOptions"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div class="shadow2">
      <div class="inside">
        <p class="textHeader">PERCENTAGE OF REQUESTING EMPLOYEES STATUS</p>
        <div class="Piechart1">
          <PieChart
            v-if="countOfRequestingEmployee"
            :data="countOfRequestingEmployee"
            :key="chartKey"
            :legendOptions="customLegendOptions"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-8">
    <div class="shadow2">
      <div class="inside">
        <p class="textHeader">DETAILS OF REQUESTING EMPLOYEE</p>

        <DataTable
          id="table"
          v-if="DetailsOfRequestingEmployee.length > 0"
          class="display stripe order-column hover compact"
          :data="DetailsOfRequestingEmployee"
          :columns="columns"
          :options="{
            lengthChange: false,
            searching: false,
            // pageLength: 5,
            scrollY: '280px',
            info: false,
            paging: false,
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>Name</th>
              <th>Office/Unit</th>
              <th>Record Count</th>
            </tr>
          </thead>
          <tbody></tbody>
        </DataTable>
      </div>
    </div>
  </div>

  <!-- <Footer /> -->
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
  name: "HR",
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
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "Employee Assistance/Support Services",

      customLegendOptions: {
        position: "bottom", // Set the legend position as needed
      },

      selectedYear: new Date().getFullYear(), // Default to current year
      availableYears: this.generatePastYears(5), // Generate the past 5 years
      selectedMonth: "All",
      availableMonths: [
        "All",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],

      recordsPerMonthChart: null,
      numberOfCategoryRequest: null,
      countOfRequestingEmployee: null,
      DetailsOfRequestingEmployee: [],
      columns: [
        { title: "Name", data: "name" },
        { title: "Office/Unit", data: "office_unit" },
        { title: "Record Count", data: "record_count" },
      ],
      chartKey: 0,
    };
  },
  computed: {
    selectedYearAndMonth() {
      return this.selectedYear + this.selectedMonth;
    },
  },
  watch: {
    selectedYearAndMonth: {
      immediate: true,
      handler(newValue) {
        console.log("selectedYear or selectedMonth changed to", newValue);
        this.updateData();
      },
    },
  },
  methods: {
    updateData() {
      this.getNumberOfRecordsPerMonth();
      this.getNumberOfCategoryRequestsPerMonth();
      this.getPercentageOfRequestingEmployee();
      this.getDetailsOfRequestingEmployee();
    },
    generatePastYears(numYears) {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: numYears }, (v, i) => currentYear - i);
    },
    getNumberOfRecordsPerMonth() {
      let url = `${backendURL}/api/numberOfRecordsPerMonth`;
      if (this.selectedMonth !== "All") {
        url += `/${this.selectedMonth}`;
      }
      url += `/${this.selectedYear}`;

      axios
        .get(url)
        .then((res) => {
          this.NumberOfRecordsPerMonth = res.data.NumberOfRecordsPerMonth;
          console.log(this.NumberOfRecordsPerMonth);
          const recordsPerMonthChart = {
            labels: Object.keys(this.NumberOfRecordsPerMonth),
            label: ["Number of Record Per month"],
            values: Object.values(this.NumberOfRecordsPerMonth),
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

          this.recordsPerMonthChart = recordsPerMonthChart;
          this.chartKey++;
        })
        .catch((error) => {
          console.error(error);
          // Handle the error appropriately here
          const recordsPerMonthChart = {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            label: ["Number of Record Per month"],
            values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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

          this.recordsPerMonthChart = recordsPerMonthChart;
        });
    },

    getNumberOfCategoryRequestsPerMonth() {
      let url = `${backendURL}/api/totalNumberOfCategoryRequest`;
      if (this.selectedMonth !== "All") {
        url += `/${this.selectedMonth}`;
      }
      url += `/${this.selectedYear}`;

      axios
        .get(url)
        .then((res) => {
          this.TotalNumberOfCategoryRequest =
            res.data.TotalNumberOfCategoryRequest;
          console.log(this.TotalNumberOfCategoryRequest);

          const numberOfCategoryRequest = {
            labels: Object.keys(this.TotalNumberOfCategoryRequest),
            label: ["Number of Record Per month"],
            values: Object.values(this.TotalNumberOfCategoryRequest),
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

          this.numberOfCategoryRequest = numberOfCategoryRequest;

          this.chartKey++;
        })
        .catch((error) => {
          console.error(error);
          // Handle the error appropriately here
        });
    },

    getPercentageOfRequestingEmployee() {
      let url = `${backendURL}/api/percentageOfRequestingEmployee`;
      if (this.selectedMonth !== "All") {
        url += `/${this.selectedMonth}`;
      }
      url += `/${this.selectedYear}`;

      axios
        .get(url)
        .then((res) => {
          this.CountOfRequestingEmployee = res.data.CountOfRequestingEmployee;
          console.log(this.CountOfRequestingEmployee);

          const countOfRequestingEmployee = {
            labels: Object.keys(this.CountOfRequestingEmployee),
            label: ["Number of Record Per month"],
            values: Object.values(this.CountOfRequestingEmployee),
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

          this.countOfRequestingEmployee = countOfRequestingEmployee;

          this.chartKey++;
        })
        .catch((error) => {
          console.error(error);
          // Handle the error appropriately here
          const countOfRequestingEmployee = {
            labels: ["Permanent", "Contractual", "MOA"],
            label: ["Number of Record Per month"],
            values: [0, 0, 0],
            backgroundColor: [
              "rgba(226, 80, 76, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(210, 178, 2, 1)",
            ],
          };

          this.countOfRequestingEmployee = countOfRequestingEmployee;
        });
    },

    getDetailsOfRequestingEmployee() {
      let url = `${backendURL}/api/detailsOfRequestingEmployee`;
      if (this.selectedMonth !== "All") {
        url += `/${this.selectedMonth}`;
      }
      url += `/${this.selectedYear}`;

      axios
        .get(url)
        .then((res) => {
          this.DetailsOfRequestingEmployee =
            res.data.DetailsOfRequestingEmployee;
          console.log(this.DetailsOfRequestingEmployee);

          this.chartKey++;
        })
        .catch((error) => {
          console.error(error);
          // Handle the error appropriately here
        });
    },
  },

  mounted() {
    // Automatically fetch data when the component is mounted
    // this.getNumberOfRecordsPerMonth();
    // this.getNumberOfCategoryRequestsPerMonth();
  },
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";
.shadow2 {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  height: 400px;
  border-radius: 3px; 
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}

.forbarchart {
  height: 250px;
  @media only screen and (min-width: 500px) {
    height: 350px;
  }
  @media only screen and (min-width: 720px) {
    height: 400px;
  }
}

.Barchart1 {
  height: 300px;
}

.inside {
  padding: 0px 20px 0px 20px;
}
.textHeader {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}
</style>
