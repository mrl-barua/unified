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
        <div class="Barchart1">
          <BarChart :data="recordsPerMonthChart" v-if="recordsPerMonthChart" />
        </div>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-4">
    <div class="shadow2">
      <div class="inside">
        <p class="textHeader">TOTAL NUMBER OF CATEGORIES REQUEST</p>
        <div class="Piechart1">
          <PieChart :data="NameData" :legendOptions="customLegendOptions" />
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
            v-if="EmploymentData"
            :data="EmploymentData"
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
              <th>Name</th>
              <th>Office/Unit</th>
              <th>Record Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
              <td>No Data Available</td>
              <td>No Data Available</td>
            </tr>
          </tbody>
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

      recordsPerMonthChart: null,

      MonthData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        label: ["Months"],
        values: [39, 18, 13, 14, 3, 21, 2, 3, 44, 5, 4, 12],
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
      },
      NameData: {
        labels: ["CNSP", "EMOTIONALLY/PSYCHO DISTRESS", "OFW"],
        label: ["CHART2"],
        values: [42, 23, 12],
        backgroundColor: [
          "rgba(235, 95, 94, 1)",
          "rgba(248, 218, 69, 1)",
          "rgba(186, 194, 255, 1)",
        ],
      },
      sampleData: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Dataset 1",
            values: [20, 30, 25, 40, 35],
            backgroundColor: "rgba(255, 99, 132, 0.5)", // Example color
          },
          {
            label: "Dataset 2",
            values: [15, 25, 20, 30, 25],
            backgroundColor: "rgba(54, 162, 235, 0.5)", // Example color
          },
          // Add more datasets if needed
        ],
      },

      EmploymentData: null,
    };
  },

  methods: {
    getNumberOfRecordsPerMonth() {
      axios
        .get(`${backendURL}/api/numberOfRecordsPerMonth`)
        .then((res) => {
          this.NumberOfRecordsPerMonth = res.data.NumberOfRecordsPerMonth;

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
            values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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

    EmploymentFetchData() {
      return axios
        .get(`${backendURL}/api/employmentStatus`)
        .then((response) => {
          // Initialize data arrays

          const moa = [];
          const permanent = [];
          const contractual = [];
          const coterminos = [];
          const casual = [];

          response.data.forEach((item) => {
            const employmentstatus = item.employment_status;

            switch (employmentstatus) {
              case "MOA":
                moa.push(item);
                break;
              case "PERMANENT":
                permanent.push(item);
                break;
              case "CONTRACTUAL":
                contractual.push(item);
                break;
              case "COTERMINOS":
                coterminos.push(item);
                break;
              case "CASUAL":
                casual.push(item);
                break;
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const moaLength = moa.length;
          const permanentLength = permanent.length;
          const contractualLength = contractual.length;
          const coterminosLength = coterminos.length;
          const casualLength = casual.length;

          console.log(permanentLength);
          // Prepare and return data
          const employmentdata = {
            labels: ["MOA", "PERMANENT", "CONTRACTUAL", "COTERMINOS", "CASUAL"],
            label: ["Employment Data"],
            values: [
              moaLength,
              permanentLength,
              contractualLength,
              coterminosLength,
              casualLength,
            ],
            backgroundColor: [
              "rgba(226, 80, 76, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(238, 202, 6, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(132, 182, 244, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.EmploymentData = employmentdata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          const employmentdata = {
            labels: ["MOA", "PERMANENT", "CONTRACTUAL", "COTERMINOS", "CASUAL"],
            label: ["Employment Data"],
            values: [1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(226, 80, 76, 1)",
              "rgba(106, 158, 218, 1)",
              "rgba(238, 202, 6, 1)",
              "rgba(255, 105, 97, 1)",
              "rgba(132, 182, 244, 1)",
            ],
          };
          // Set barChartData to the computed data
          this.EmploymentData = employmentdata;
        });
    },
  },

  mounted() {
    // Automatically fetch data when the component is mounted
    this.EmploymentFetchData();
    this.getNumberOfRecordsPerMonth();
  },
};
</script>

<style scoped>
.shadow2 {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  height: 400px;
  /* border-radius: 20px; */
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
  height: 340px;
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
