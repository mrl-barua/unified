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
              <p class="dashboard-value">00</p>
            </div>
            <div class="col-4">
              <p class="dashboard-text">Gender of Clients Served</p>
              <p>FEMALE <span>0</span></p>
              <p>MALE <span>0</span></p>
              <p class="dashboard-text">Mode of Admissions</p>
              <p>FEMALE <span>0</span></p>
              <p>MALE <span>0</span></p>
            </div>
            <div class="col-4">
              <p class="dashboard-text">Number of Case Categories</p>
              <p class="dashboard-value">0</p>
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
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Clients Served per Age and Sex</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Case Categories Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Sub - Categories Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
        </div>
      </section>

      <section class="col-12">
        <div class="col-4">
          <p
            style="
              font-family: Inter;
              font-size: 20px;
              font-weight: 700;
              line-height: 24px;
              letter-spacing: 0em;
              text-align: center;
            "
          >
            Non-Monetary Services Served
          </p>

          <div class="shadow-container">
            <p class="section2-header">Financial Amount Served</p>
            <div class="chart-container"><LineChart :data="SLPData" /></div>
          </div>
        </div>
        <div class="col-8">
          <p
            style="
              font-family: Inter;
              font-size: 25px;
              font-weight: 700;
              line-height: 30px;
              letter-spacing: 0em;
              text-align: center;
            "
          >
            CBSS Staff Monitoring
          </p>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="chart-container"><LineChart :data="SLPData" /></div>
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
  },

  data() {
    return {
      PageTitle: "CBSS",

      SLPData: {
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
h1 {
  font-family: Inter;
  font-size: 43px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-text {
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-value {
  font-family: Inter;
  font-size: 70px;
  font-weight: 600;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: center;
}

.section2-header {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
}

.chart-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.dashboard-container {
  width: 100%;
  height: 100%;
  margin: 10px auto;
  padding: 20px 0px 20px 0px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
}

.shadow-container {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  width: 98%;
  height: 100%;
  margin: auto;
  margin-top: 10px;
}
</style>
