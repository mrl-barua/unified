<template>
   <Sidebar :iconText="PageTitle" :iconDetails="PageDetail" />

  <br /><br /><br /><br />

  <div class="col-12 col-md-12">
    <div class="shadow2">
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
              <th>Name of SLPA/Payee</th>
              <th>Province</th>
              <th>City/Municipality</th>
              <th>Barangay</th>
              <th>Status of Enterprise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No Data Available</td>
              <td>No Data Available</td>
              <td>No Data Available</td>
              <td>No Data Available</td>
              <td>No Data Available</td>
            </tr>
          </tbody>
        </DataTable>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6">
    <div class="shadow2 forbarchart">
      <br />
      <h5 class="fw-bold">PROVINCIAL BUDGET MONITORING</h5>
      <br />
      <div class="Barchart1"><BarChart :data="ProvinceData" /></div>
    </div>
  </div>

  <div class="col-12 col-md-6">
    <div class="shadow2 forbarchart">
      <br />
      <h5 class="fw-bold">STATUS BY MUNICIPALITY</h5>
      <br />
      <div class="Barchart1"><StackBarChart :data="CostData" /></div>
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
import HBarChart from "@/components/ChartJS/HBarchart";
import StackBarChart from "@/components/ChartJS/StackBarchart";
import HStackBarChart from "@/components/ChartJS/HStackBarchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  // name: "SLPSNM",
  name: "SLPSTAT",

  components: {
    Sidebar,
    Footer,
    BarChart,
    PieChart,
    HBarChart,
    DoughnutChart,
    StackBarChart,
    HStackBarChart,
    DataTable,
  },

  data() {
    return {
      PageTitle: "Sustainable Livelihood Program",
      PageDetail: "Enterprise Status 2022",
      ProvinceData: {
        labels: [
          "DAVAO ORIENTAL",
          "DAVAO DEL SUR",
          "DAVAO CITY",
          "DAVAO DE ORO",
          "DAVAO DEL NORTE",
          "DAVAO OCCIDENTAL",
        ],
        label: ["PROVINCIAL BUDGET DISTRIBUTIONS"],
        values: [110, 200, 400, 150, 250, 200],
        backgroundColor: [
          "#1436B8",
          "#4D4DDA",
          "#5086C1",
          "#6A9EDA",
          "#84B6F4",
          "#B2DAFA",
        ],
      },

      CostData: {
        labels: [
          "Padada",
          "Magsaysay",
          "Manay",
          "Cateel",
          "Caraga",
          "Governor",
          "City of Mati",
          "Sta.Cruz",
          "Sulop",
          "Baganga",
          "Maragusan",
          "Laak",
          "Digos",
          "Tarragona",
          "San Isidro",
        ],
        datasets: [
          {
            label: "POOR",
            values: [
              89, 56, 12, 45, 90, 34, 67, 90, 23, 87, 54, 10, 89, 23, 56,
            ],
            backgroundColor: ["#FF4040"],
          },
          {
            label: "NON-POOR",
            values: [
              45, 78, 12, 67, 89, 23, 90, 12, 34, 56, 78, 90, 54, 32, 67,
            ],
            backgroundColor: ["#4E91FD"],
          },
          {
            label: "NO MATCH",
            values: [
              23, 76, 12, 89, 56, 43, 87, 12, 56, 89, 34, 67, 90, 45, 89,
            ],
            backgroundColor: ["#EEB600"],
          },
        ],
      },
    };
  },

  methods: {
    // inserted data for month
  },

  mounted() {},
};
</script>

<style scoped>
.shadow1 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 480px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}
.shadow2 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 465px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}

/* copy */
.shadow3 {
  height: 480px;
  border-radius: 20px;
  /*margin: 10px 15px 10px 20px;
  padding: 10px 0px 10px 0px;*/
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
  height: 480px;
}

/* CSS FOR DATA SUMMARY */

.row {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.label {
  width: 200px;
  text-align: right;
  font-weight: bold;
}

.number {
  width: 100px;
  text-align: left;
}

/* css */

.stacked-rectangle {
  justify-content: space-between;
}

.stacked-rectangle .col-12.col-md-4 {
  width: 20%;
}

.stacked-rectangle .shadow2 {
  background: transparent;
}

.rectangle {
  padding: 10px;
  margin: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 48%;
}

.rectangle .label {
  color: #fff;
  text-align: center;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle .number {
  font-size: 50px;
  text-align: center;
}
</style>
