<template>
   <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />

  <br /><br /><br /><br />

  <!-- Previous Code Static -->
  <!-- <div class="col-12 col-md-12">
    <div class="shadow2">
      <br />
      <div
        class="d-flex justify-content-around"
        style="
          margin-left: 40px;
          margin-right: 40px;
          margin-bottom: 40px;
          background-color: #133f5c;
          color: white;
          padding: 8px;
          text-align: center;
          border-radius: 5px;
        "
      >
        <h5 class="fw-bold">MODALITY</h5>
        <h5 class="fw-bold">TOTAL PROJECT COST FROM DSWD</h5>
        <h5 class="fw-bold">TOTAL</h5>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>1.Seed Capital Fund Regular Target</p>
        <p>P26,000,000.00</p>
        <p>178</p>
      </div>

      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>2. Lorem Ipsum</p>
        <p>P26,000,000.00</p>
        <p>178</p>
      </div>
      <hr class="SLPPA" />
      <div class="d-flex justify-content-around">
        <p>3. Lorem Ipsum</p>
        <p>P26,000,000.00</p>
        <p>178</p>
      </div>
    </div>
  </div> -->

  <div class="col-12 col-md-12">
    <div class="shadow3">
      <div class="inside" style="padding: 10px">
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
              <th>MODALITY</th>
              <th>TOTAL PROJECT COST FROM DSWD</th>
              <th>TOTAL</th>
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

  <div class="col-12 col-md-12">
    <div class="shadow3 forbarchart">
      <br />
      <br />
      <h1 class="fw-bold">COST FROM DSWD BY BARANGAY</h1>
      <br />
      <div class="Barchart1">
        <BarChartM :data="CostData" :aspectRatio="60 / 10" />
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
import BarChartM from "@/components/ChartJS/BarchartM";
import PieChart from "@/components/ChartJS/PieChart";
import DoughnutChart from "@/components/ChartJS/DoughnutChart";
import HBarChart from "@/components/ChartJS/HBarchart";
import StackBarChart from "@/components/ChartJS/StackBarchart";
import HStackBarChart from "@/components/ChartJS/HStackBarchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  // name: "SLPPA",
  name: "SLPPA",

  components: {
    Sidebar,
    Footer,
    BarChart,
    BarChartM,
    PieChart,
    HBarChart,
    DataTable,
    DoughnutChart,
    StackBarChart,
    HStackBarChart,
  },

  // data() {
  //   return {
  //     PageTitle: "SLP - Physical Accomplishment by Portfolio",

  //     CostData: {
  // labels: [
  //   "Sumimao",
  //   "Malabog",
  //   "Langub",
  //   "Calinan Poblacion",
  //   "8A, Poblacion A",
  //   "Lasang",
  //   "Bunawan",
  //   "Buhangin Proper",
  //   "Kilate",
  //   "Calinan Proper",
  // ],
  //       label: ["ASSOCIATION-MANAGED"],
  //       values: [
  //         450000, 450000, 450000, 450000, 450000, 420000, 360000, 15000, 15000,
  //         15000,
  //       ],
  //       backgroundColor: ["#FF4040"],
  //     },

  //     EmploymentData: null,
  //   };
  // },

  data() {
    return {
      PageTitle: "Sustainable Livelihood Program",
      PageDetail: "Physical Accomplishment by Portfolio",
      CostData: {
        labels: [
          "Sumimao",
          "Malabog",
          "Langub",
          "Calinan Poblacion",
          "8A, Poblacion A",
          "Lasang",
          "Bunawan",
          "Buhangin Proper",
          "Kilate",
          "Calinan Proper",
        ],

        datasets: [
          {
            label: "ASSOCIATION-MANAGED",
            values: [
              450000, 450000, 450000, 450000, 450000, 420000, 0, 0, 0, 0,
            ],
            backgroundColor: "#FF4040",
          },
          // Add your new dataset
          {
            label: "INDIVIDUALLY-MANAGED",
            values: [0, 0, 0, 0, 0, 0, 360000, 15000, 15000, 15000],
            backgroundColor: "#EEB600",
          },
        ],
      },
    };
  },

  //
  methods: {
    // inserted data for month
  },

  mounted() {},
};
</script>

<style scoped>
.shadow3 {
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
    height: 600px;
  }
}

.Barchart1 {
  height: 300px;
}

.shadow3 h1 {
  color: #252525;
  text-align: center;
  font-family: Arial;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 1.5rem;
}
</style>
