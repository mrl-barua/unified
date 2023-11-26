<template>
  <Sidebar :iconText="PageTitle" />

  <br /><br /><br /><br />

  <!-- 1 -->
  <div class="col-12 col-md-8">
    <div class="shadow2 forbarchart">
      <h1>TOTAL ACCOMPLISHMENT VS PHYSICAL TARGET</h1>
      <div class="StackBarchart1"><StackBarChart :data="SLPData" /></div>
    </div>
  </div>
  <div class="col-12 col-md-4">
    <div
      class="rectangle"
      style="
        background: #4e91fd;
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
      "
    >
      <div class="label">PHYSICAL TARGET</div>
      <div class="number"><b>6,521</b></div>
    </div>
    <div
      class="rectangle"
      style="
        background: #ff4040;
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
      "
    >
      <div class="label">TOTAL</div>
      <div class="number"><b>956</b></div>
    </div>
    <div
      class="rectangle"
      style="
        background: #eeb600;
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
      "
    >
      <div class="label">REMAINING</div>
      <div class="number"><b>5,565</b></div>
    </div>
  </div>

  <!-- 2 -->

  <div class="row">
    <div class="col-12 col-md-4">
      <div class="parent">
        <div class="child">
          <div class="rectangle1" style="background: #eeb600">
            <div class="label">PHYSICAL TARGET</div>
            <div class="number"><b>20</b></div>
          </div>
          <div class="rectangle1" style="background-color: #ff4040">
            <div class="label">YEAR 2022</div>
            <div class="number"><b>13</b></div>
          </div>
          <div class="rectangle1" style="background-color: #4e91fd">
            <div class="label">YEAR 2023</div>
            <div class="number"><b>12</b></div>
          </div>
        </div>
        <div class="child">
          <div class="rectangle1" style="background-color: #133f5c">
            <div class="label">QUALIFIED / SERVED</div>
            <div class="number"><b>13</b></div>
          </div>
          <div class="rectangle1" style="background-color: #133f5c">
            <div class="label">FUNDED</div>
            <div class="number"><b>8</b></div>
          </div>
          <div class="rectangle1" style="background-color: #133f5c">
            <div class="label">ENDORSED TO PARTNERS</div>
            <div class="number"><b>0</b></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-8">
      <div class="shadow2 forbarchart">
        <h1>REFERRALS</h1>
        <div class="HStackBarchart1"><HStackBarChart :data="RefData" /></div>
      </div>
    </div>
  </div>

  <!-- 3 -->

  <div class="col-12 col-md-5">
    <div class="shadow2 forbarchart2">
      <h1>BREAKDOWN OF REGIONAL ACCOMPLISHMENT</h1>
      <div class="Barchart2"><BarChart :data="ProvinceData" /></div>
    </div>
  </div>

  <!-- 4 -->

  <div class="container">
    <div class="col-12 col-md-5">
      <div class="shadow5">
        <h1>SECTORAL ACCOMPLISHMENT</h1>
        <div class="DoughnutChart" style="height: 370px">
          <DoughnutChart :data="SecData" />
        </div>
      </div>
    </div>
  </div>

  <div class="rectangle4">
    <div class="label">DISAGGREGATED</div>
    <div class="label1"><b>DATA</b></div>
  </div>

  <div class="rectangle3" style="background-color: #4e91fd">
    <div class="label">MALE</div>
    <div class="number"><b>267</b></div>
  </div>
  <div class="rectangle3" style="background-color: #ff4040">
    <div class="label">FEMALE</div>
    <div class="number"><b>589</b></div>
  </div>
  <div class="rectangle3" style="background-color: #133f5c">
    <div class="label">TOTAL</div>
    <div class="number"><b>856</b></div>
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

export default {
  name: "SLP",
  components: {
    Sidebar,
    Footer,
    BarChart,
    PieChart,
    HBarChart,
    DoughnutChart,
    StackBarChart,
    HStackBarChart,
  },

  data() {
    return {
      PageTitle: "SLP - General Disaggregated Data",

      SLPData: {
        labels: [
          "EO 70",
          "CVA",
          "SLP",
          "REGULAR",
          "ZERO",
          "HUNGER",
          "EO 70",
          "FRs",
          "REFERRAL",
        ],
        datasets: [
          {
            label: "PHYSICAL TARGET",
            values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
            backgroundColor: ["#4E91FD"],
          },
          {
            label: "TOTAL",
            values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
            backgroundColor: ["#FF4040"],
          },
        ],

        // label: [""],
        // values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
        // backgroundColor: ["#4E91FD", "#FF4040"],
      },
      RefData: {
        labels: [
          "REFERRAL BY PARTNERS",
          " ",
          "WALK IN",
          "OBSUs",
          " ",
          "THRU EMAIL",
          " ",
          "NPMO",
          "ENDORSEMENT",
        ],

        datasets: [
          {
            label: "YEAR 2023",
            values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
            backgroundColor: ["#4E91FD"],
          },
          {
            label: "YEAR 2022",
            values: [25, 18, 13, 4, 3, 1, 2, 3, 4, 5, 4, 2],
            backgroundColor: ["#FF4040"],
          },
        ],

        // label: ["YEAR 2022"],
        // values: [0, 0, 18, 13, 4, 3, 1, 20, 40, 4, 5, 4, 2],
        // backgroundColor: ["#FF4040", "#4E91FD"],
      },

      SecData: {
        labels: [
          "IP",
          "SENIOR CITIZENS",
          "SOLO PARENT",
          "PWD",
          "LGBTQ",
          "YOUTH",
        ],
        label: ["CHART2"],
        values: [10, 23, 15, 27, 20, 24],
        backgroundColor: [
          "#B2DAFA",
          "#84B6F4",
          "#F8E44B",
          "#EECA06",
          "#FF9688",
          "#FF6961",
        ],
      },

      ProvinceData: {
        labels: [
          "DAVAO ORIENTAL",
          "DAVAO DEL SUR",
          "DAVAO CITY",
          "DAVAO DE ORO",
          "DAVAO DEL NORTE",
          "DAVAO OCCIDENTAL",
        ],
        label: ["ACCOMPLISHMENT"],
        values: [120, 100, 400, 150, 250, 200],
        backgroundColor: ["#EEB600"],
      },
    };
  },

  methods: {
    //
  },
};
</script>

<style scoped>
.shadow2 {
  color: #252525;
  text-align: center;
  font-family: Arial;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  margin: 5px 5px 5px 10px;
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

.forbarchart {
  height: 250px;

  @media only screen and (min-width: 500px) {
    height: 350px;
  }
  @media only screen and (min-width: 720px) {
    height: 400px;
  }
}
/* this refers to the gap between text and graph */
.StackBarchart1 {
  height: 280px;
}
.Barchart2 {
  height: 332px;
}

/* CSS FOR DATA SUMMARY */

.row {
  display: flex;
  align-items: center;
  /*margin-bottom: 20px;*/
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

.rectangle {
  padding: 22px;
  margin: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
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

.shadow5 {
  color: #252525;
  text-align: center;
  font-family: Arial;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  margin: 5px 5px 5px 5px;
  height: 455px;
}

.shadow5 h1 {
  color: #252525;
  text-align: center;
  font-family: Arial;
  font-size: 27px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: 1.5rem;
}

.rectangle4 {
  padding: 10px;
  margin: 10px;
  color: #133f5c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
}

.rectangle4 .label {
  color: #133f5c;
  text-align: center;
  font-size: 26px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
}

.label[data-v-c2f0b4a5] {
  width: 304px;
}

.rectangle4 .label1 {
  color: #133f5c;
  text-align: center;
  font-size: 35px;
  font-style: bold;
  font-weight: 700;
  line-height: normal;
}
.chart-container[data-v-3aa086d9] {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120%;
}

/* referrals */

.rectangle1 {
  margin: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 222px;
  height: 130px;
}

.rectangle1 .label {
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle1 .number {
  font-size: 38px;
  text-align: center;
}

/* css for rec 3 */

.rectangle3 {
  padding: 12px;
  margin: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
}

.rectangle3 .label {
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.rectangle3 .number {
  font-size: 40px;
  text-align: center;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
}
</style>
