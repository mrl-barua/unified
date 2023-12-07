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
            v-if="!isLoading && recordsPerMonthChart"
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
            v-if="!isLoading && numberOfCategoryRequest"
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
            v-if="!isLoading && countOfRequestingEmployee"
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
          v-if="!isLoading && DetailsOfRequestingEmployee.length > 0"
          class="display stripe order-column hover compact text-start"
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

        <DataTable
          id="table"
          v-else
          class="display stripe order-column hover compact text-start"
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
      isLoading: false,
    };
  },
  computed: {
    selectedYearAndMonth() {
      return `${this.selectedYear}${this.selectedMonth}`;
    },
  },
  created() {
    this.availableYears = this.generatePastYears(5); // Generate the past 5 years
  },
  watch: {
    selectedYearAndMonth: {
      immediate: true,
      handler(newValue) {
        // console.log("selectedYear or selectedMonth changed to", newValue);
        this.updateData();
      },
    },
  },
  mounted() {
    // this.updateData();
  },
  methods: {
    async updateData() {
      this.isLoading = true;
      try {
        await Promise.all([
          this.getNumberOfRecordsPerMonth(),
          this.getNumberOfCategoryRequestsPerMonth(),
          this.getPercentageOfRequestingEmployee(),
          this.getDetailsOfRequestingEmployee(),
        ]);
        this.chartKey++;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    generatePastYears(numYears) {
      const currentYear = new Date().getFullYear();
      return Array.from({ length: numYears }, (_, i) => currentYear - i);
    },

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

    constructUrl(endpoint) {
      let url = `${backendURL}/api/${endpoint}`;
      if (this.selectedMonth !== "All") {
        url += `/${this.selectedMonth}`;
      }
      url += `/${this.selectedYear}`;
      return url;
    },

    handleApiError(error) {
      console.error(error);
      // Handle the error appropriately here
      // For example, show an error message to the user
      this.errorMessage = "Failed to fetch data";
    },

    async getNumberOfRecordsPerMonth() {
      const url = this.constructUrl("numberOfRecordsPerMonth");
      try {
        const res = await axios.get(url);
        this.NumberOfRecordsPerMonth = res.data.NumberOfRecordsPerMonth;
        // console.log(this.NumberOfRecordsPerMonth);
        this.recordsPerMonthChart = this.createChartConfig(
          Object.keys(this.NumberOfRecordsPerMonth),
          Object.values(this.NumberOfRecordsPerMonth)
        );
        this.chartKey++;
      } catch (error) {
        console.error(error);
        this.recordsPerMonthChart = this.createChartConfig(
          [
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
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        );
      }
    },

    async getNumberOfCategoryRequestsPerMonth() {
      const url = this.constructUrl("totalNumberOfCategoryRequest");
      try {
        const res = await axios.get(url);
        this.TotalNumberOfCategoryRequest =
          res.data.TotalNumberOfCategoryRequest;
        // console.log(this.TotalNumberOfCategoryRequest);
        this.numberOfCategoryRequest = this.createChartConfig(
          Object.keys(this.TotalNumberOfCategoryRequest),
          Object.values(this.TotalNumberOfCategoryRequest)
        );
        this.chartKey++;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
      }
    },

    async getPercentageOfRequestingEmployee() {
      const url = this.constructUrl("percentageOfRequestingEmployee");
      try {
        const res = await axios.get(url);
        this.CountOfRequestingEmployee = res.data.CountOfRequestingEmployee;
        // console.log(this.CountOfRequestingEmployee);
        this.countOfRequestingEmployee = this.createChartConfig(
          Object.keys(this.CountOfRequestingEmployee),
          Object.values(this.CountOfRequestingEmployee),
          [
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
          ]
        );
        this.chartKey++;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
        this.countOfRequestingEmployee = this.createChartConfig(
          ["Permanent", "Contractual", "MOA"],
          [0, 0, 0],
          [
            "rgba(226, 80, 76, 1)",
            "rgba(106, 158, 218, 1)",
            "rgba(210, 178, 2, 1)",
          ]
        );
      }
    },

    async getDetailsOfRequestingEmployee() {
      const url = this.constructUrl("detailsOfRequestingEmployee");
      try {
        const res = await axios.get(url);
        this.DetailsOfRequestingEmployee = res.data.DetailsOfRequestingEmployee;
        // console.log(this.DetailsOfRequestingEmployee);
        this.chartKey++;
      } catch (error) {
        console.error(error);
        // Handle the error appropriately here
        // For example, show an error message to the user
        this.errorMessage = "Failed to get details of requesting employee";
      }
    },
  },

  mounted() {
    // Automatically fetch data when the component is mounted
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
