<template>
  <div>
    <Sidebar :iconText="PageTitle" />
    <br /><br /><br /><br />

    <div class="col-12">
      <div class="dashboard-box" style="height: 500px">
        <div
          style="
            background-color: ;
            color: black;
            padding: 10px;
            font-weight: 800;
            font-size: 30px;
            text-align: center;
          "
        >
          DASHBOARD SUMMARY
        </div>
        <!-- FIRST ROW FIRST COLUMN -->
        <div class="first">
          <div class="col-sm-4">
            <div class="col-12">
              <p>
                Total Number of <br />
                Clients Serve
              </p>
              <div class="zero">
                <span id="clientServe">00</span>
              </div>
            </div>
            <div class="col-12">
              <br />
              <p>
                Financial Assistance <br />
                Amount Given
              </p>
              <div class="zero">
                <span id="clientServe">00</span>
              </div>
            </div>
          </div>
        </div>
        <!-- FIRST ROW SECOND COLUMN -->
        <div class="col-sm-4">
          <div class="first">
            <p>Gender of Clients Served</p>
          </div>
          <div class="col-12">
            <p>FEMALE <span id="genderFemaleServe">00</span> %</p>
            <hr class="hr" />
            <p>MALE <span id="genderMaleServe">00</span> %</p>
          </div>
          <div class="first">
            <p>Mode of Admission</p>
          </div>
          <div class="col-12">
            <p>WALK-IN</p>
            <p id="walkInAdmission">00</p>
            <hr class="hr" />
            <p>DSWD...</p>
            <p id="dswdAdmission">00</p>
          </div>
        </div>

        <!-- FIRST ROW THIRD COLUMN -->
        <div class="first">
          <div class="col-sm-4">
            <div class="col-12">
              <p>
                Number of Case <br />
                Categories
              </p>
              <div class="zero">
                <p id="caseCategories">00</p>
              </div>
            </div>
            <div class="col-12">
              <br />
              <p>
                Number of Non- <br />
                Monetary Services
              </p>
              <div class="zero">
                <p id="nonMonetaryServices">00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--client served per quarter-->
      <div class="col-sm-6">
        <div class="col-12">
          <div class="dashboard-box">
            <div
              style="
                background-color: ;
                color: black;
                padding: 10px;
                font-weight: 800;
                font-size: 20px;
                text-align: center;
              "
            >
              Clients Served per Quarter
            </div>
            <div class="LineChart1"><LineChart :data="SLPData" /></div>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="col-12">
          <div class="dashboard-box">
            <div
              style="
                background-color: ;
                color: black;
                padding: 10px;
                font-weight: 800;
                font-size: 20px;
                text-align: center;
              "
            >
              Clients Served per Age and Sex
            </div>
            <div class="LineChart1"><LineChart :data="SLPData" /></div>
          </div>
        </div>
      </div>

      <!--case category-->
      <div class="col-6">
        <div class="dashboard-box">
          <div
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: 800;
              font-size: 20px;
              text-align: center;
            "
          >
            Case Category Served
          </div>
          <div class="BarChart2"><BarChart data="SLPData" /></div>
        </div>

        <div class="dashboard-box">
          <div
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: 800;
              font-size: 20px;
              text-align: center;
            "
          >
            Sub Category Served
          </div>
          <div class="BarChart2"><BarChart data="SLPData" /></div>
        </div>
      </div>

      <!--Financial Amount served-->
      <div class="col-6">
        <div class="dashboard-box">
          <div
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: 800;
              font-size: 20px;
              text-align: center;
            "
          >
            Financial Amount served
          </div>
          <div class="BarChart2"><BarChart data="SLPData" /></div>
        </div>

        <div class="dashboard-box">
          <div
            style="
              background-color: ;
              color: black;
              padding: 10px;
              font-weight: 800;
              font-size: 20px;
              text-align: center;
            "
          > Financial Amount served
          </div>
      
        <div>
          <div style="display: flex; justify-content: space-between">
            <div >Category</div>
            <div style="display: flex; align-items: center; margin-right: 15px; margin-top: 5px">
              Amount
            </div>
          </div>
        </div>
        <div style="background-color: ; color: black; padding: 10px">
          <div style="display: flex; justify-content: space-between">
            <div>Category #1</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 20px; margin-bottom: 15px;"></div>
          <div style="display: flex; justify-content: space-between">
            <div>Category #2</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 15px; margin-bottom: 15px;"></div>
          <div style="display: flex; justify-content: space-between">
            <div>Category #3</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
          <div style="border-bottom: 1px solid #a9a9a9; margin-top: 15px; margin-bottom: 15px;"></div>
          <div style="display: flex; justify-content: space-between">
            <div>Category #4</div>
            <div style="display: flex; align-items: center; margin-right: 50px">
              0
            </div>
          </div>
        </div>

        </div>
      </div>
      <!--Non-Monetary Services Served-->
      <div class="col-4">
        <div class="col-12">
          <div class="dashboard-blank">
            <div
              style="
                background-color: ;
                color: black;
                padding: 10px;
                font-weight: 800;
                font-size: 20px;
                text-align: center;
              "
            >
              Non-Monetary Services Served
            </div>
          </div>
        </div>
      </div>
      <!--CBSS Staff Monitoring-->
      <div class="col-8">
        <div class="col-12">
          <div class="dashboard-blank">
            <div
              style="
                background-color: ;
                color: black;
                padding: 10px;
                font-weight: 800;
                font-size: 20px;
                text-align: center;
              "
            >
              CBSS Staff Monitoring
            </div>
          </div>
        </div>
      </div>
      <!--Non-Monetary Services Served Inside box-->
      <div class="col-4">
        <div class="col-12">
          <div class="dashboard-box" style="height: 300px">
            <div class="Non-monetary">
              <div class="col-6">
                <div class="col-12">
                  <p>Service Name</p>
                </div>
              </div>

              <div class="col-6">
                <div class="col-12">
                  <p>Number of Person Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--CBSS Staff Monitoring Inside Box-->
      <div class="col-4">
        <div class="col-12">
          <div class="dashboard-box" style="height: 300px">
            <div class="Non-monetary">
              <div class="col-6">
                <div class="col-12">Responsible Person</div>
              </div>

              <div class="col-6">
                <div class="col-12">Total Number of Client Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="col-12">
          <div class="dashboard-box" style="height: 300px">
            <div class="Non-monetary">
              <div class="col-6">
                <div class="col-12">Responsible Person</div>
              </div>

              <div class="col-6">
                <div class="col-12">Total Number of Categories Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        labels: [
          "1st",
          "2nd",
          "3rd",
          "4th",
        ],
        label: ["Quarter"],
        values: [
          0, 25, 75, 100
        ],
        backgroundColor: ["#C8C375"],
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.dashboard-box {
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}
.dashboard-blank {
  padding: 20px;
  margin: 20px;
  border-radius: 5px;
}
.first {
  color: black;
  line-height: 30px;
  font-size: 30px;
  font-weight: 600;
}
.zero {
  font-size: 60px;
  font-weight: bold;
}
.col-6 second-column {
}
.Non-monetary {
  color: black;
  font-weight: 600;
}
</style>
