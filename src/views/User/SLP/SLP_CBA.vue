<template>
  <Sidebar :iconText="PageTitle" />

  <br /><br /><br /><br />

  <!-- <div class="col-12 col-md-12">
      <div class="shadow2">
      <br>
       <div class="d-flex justify-content-around"
        style=" margin-left: 40px; margin-right: 40px; margin-bottom: 40px; background-color: #133F5C; color: white; padding: 8px; text-align: center; border-radius: 5px;">


          <h5 class="fw-bold">PDO</h5>
          <h5 class="fw-bold">PROVINCE</h5>
          <h5 class="fw-bold">DOCUMENT TITLE</h5>
          <h5 class="fw-bold">TIMESTAMP</h5>
      </div>
      
        <hr class="SLPPA" />
         <div class="d-flex justify-content-around">
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
        
        </div>

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
        </div>

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 
        
        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 

        <hr class="SLPPA" />
        <div class="d-flex justify-content-around">
         <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
           
        </div> 
      </div>
    </div>
     -->

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
              <th>PDO</th>
              <th>PROVINCE</th>
              <th>DOCUMENT TITLE</th>
              <th>TIMESTAMP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
    <div class="shadow2 forbarchart2">
      <h1>NUMBER OF PDO PER CLUSTER</h1>
      <div class="Barchart2"><BarChart :data="ProvinceData" /></div>
    </div>
  </div>

  <div class="col-12 col-md-6">
    <div class="shadow2">
      <h1>SUBMITTED REPORTS PER CLUSTER</h1>
      <div class="parent">
        <div class="rectangle" style="background-color: #ff6961">
          <div class="label">DAVAO CITY</div>
          <div class="number"><b>75</b></div>
        </div>

        <div class="rectangle" style="background-color: #6a9eda">
          <div class="label">DAVAO DEL NORTE</div>
          <div class="number"><b>44</b></div>
        </div>

        <div class="rectangle" style="background-color: #eeca06">
          <div class="label">DAVAO DEL SUR</div>
          <div class="number"><b>41</b></div>
        </div>

        <div class="rectangle" style="background-color: #ff9688">
          <div class="label">DAVAO ORIENTAL</div>
          <div class="number"><b>65</b></div>
        </div>

        <div class="rectangle" style="background-color: #84b6f4">
          <div class="label">DAVAO DE ORO</div>
          <div class="number"><b>48</b></div>
        </div>

        <div class="rectangle" style="background-color: #ecdc63">
          <div class="label">DAVAO OCCIDENTAL</div>
          <div class="number"><b>27</b></div>
        </div>
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
import HBarChart from "@/components/ChartJS/HBarchart";
import StackBarChart from "@/components/ChartJS/StackBarchart";
import HStackBarChart from "@/components/ChartJS/HStackBarchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  //
  name: "SLPCBA",
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
      PageTitle: "SLP - Capability Building Activities",

      ProvinceData: {
        labels: [
          "DAVAO CITY",
          "DAVAO ORIENTAL",
          "DAVAO DEL NORTE",
          "DAVAO DE ORO",
          "DAVAO DEL NORTE",
          "DAVAO OCCIDENTAL",
        ],
        label: ["Number of PDO"],
        values: [120, 100, 400, 150, 250, 200],
        backgroundColor: ["#EEB600"],
      },
    };
  },

  methods: {
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
            const employmentstatus = item.EMPLOYMENT_STATUS;

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
              "rgba(19, 63, 92, 1)",
              "rgba(243, 165, 51, 1)",
              "rgba(235, 95, 94, 1)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
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
              "rgba(25, 82, 105, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
            ],
          };
          // Set barChartData to the computed data
        });
    },
  },

  mounted() {
    // Automatically fetch data when the component is mounted
    this.EmploymentFetchData();
  },
};
</script>

<style scoped>
.shadow2 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 500px;
  margin: 5px 5px 5px 5px;
  padding: 10px 0px 10px 0px;
}

.shadow3 {
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.15);
  height: 480px;
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

.Barchart2 {
  height: 350px;
}

.rectangle {
  margin: 10px;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 165px;
}

.rectangle .label {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle .number {
  font-size: 40px;
  text-align: center;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.shadow2 h1 {
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
