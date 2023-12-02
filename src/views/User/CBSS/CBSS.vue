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
              <p class="dashboard-value">{{ totalClientServed.length }}</p>
              <br />
              <p class="dashboard-text">Financial Assistance Amount Given</p>
              <p class="dashboard-value">{{ totalAmount }}</p>
            </div>
            <div class="col-4">
              <p class="dashboard-subtext">Gender of Clients Served</p>
              <div class="col-6">
                <p class="dashboard-center text-center">FEMALE</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">{{ female.length }}</p>
              </div>

              <div class="col-6">
                <p class="dashboard-center text-center">MALE</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">{{ male.length }}</p>
              </div>
              <br />
              <br />
              <br />
              <p class="dashboard-subtext">Mode of Admissions</p>
              <div class="col-6">
                <p class="dashboard-center text-center">WALK-IN</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">{{ walkIn.length }}</p>
              </div>

              <div class="col-6">
                <p class="dashboard-center text-center">DSW D...</p>
              </div>
              <div class="col-6">
                <p class="dashboard-center text-center">{{ others.length }}</p>
              </div>
            </div>
            <div class="col-4">
              <p class="dashboard-text">Number of Case Categories</p>
              <p class="dashboard-value">{{ uniqueCaseCategories.length }}</p>
              <br />
              <p class="dashboard-text">Number of Non- Monetary Services</p>
              <p class="dashboard-value">
                {{ uniqueNonMonetaryServices.length }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="barchart-section col-12">
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Clients Served per Quarter</p>
              <div class="chart-container lineChart">
                <LineChart
                  :data="clientServedPerQuarterChart"
                  v-if="clientServedPerQuarterChart"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Clients Served per Age and Sex</p>
              <div class="chart-container lineChart">
                <LineChart
                  :data="clientServedPerAgeAndSex"
                  v-if="clientServedPerAgeAndSex"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Case Categories Served</p>
              <div class="chart-container">
                <BarChart
                  :data="caseCategoriesChart"
                  v-if="caseCategoriesChart"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Sub - Categories Served</p>
              <div class="chart-container"><BarChart :data="CaseData" /></div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Financial Amount Served</p>
              <div class="dataTable-container">
                <DataTable
                  v-if="financialAmountServed.length > 0"
                  style="width: 90%"
                  class="display stripe order-column hover compact"
                  id="hrTable"
                  :options="{
                    lengthChange: false,
                    searching: false,
                    // pageLength: 5,
                    scrollY: '230px',
                    info: false,
                    paging: false,
                  }"
                >
                  <thead style="background: #133f5c" class="text-white">
                    <tr>
                      <th>CATEGORY NAME</th>
                      <th>AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(sum, category) in sumsByCategory"
                      :key="category"
                    >
                      <td>{{ category }}</td>
                      <td>{{ sum }}</td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="shadow-container">
              <p class="section2-header">Non-Monetary Services Served</p>
              <div class="dataTable-container">
                <DataTable
                  v-if="subCategoriesServed.length > 0"
                  style="width: 90%"
                  class="display stripe order-column hover compact"
                  id="hrTable"
                  :options="{
                    lengthChange: false,
                    searching: false,
                    // pageLength: 5,
                    scrollY: '230px',
                    info: false,
                    paging: false,
                  }"
                >
                  <thead style="background: #133f5c" class="text-white">
                    <tr>
                      <th>Service Name</th>
                      <th>Number of Person Served</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(count, service) in countsByService"
                      :key="service"
                    >
                      <td>{{ service }}</td>
                      <td>{{ count }}</td>
                    </tr>
                  </tbody>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="col-12">
        <div class="col-12">
          <div class="shadow-container">
            <p class="section2-header">CBSS Staff Monitoring</p>
            <div class="col-12">
              <div class="col-6">
                <div class="dataTable-container">
                  <DataTable
                    v-if="totalNumberOfClientServed.length > 0"
                    style="width: 90%"
                    class="display stripe order-column hover compact"
                    id="hrTable"
                    :options="{
                      lengthChange: false,
                      searching: false,
                      // pageLength: 5,
                      scrollY: '240px',
                      info: false,
                      paging: false,
                    }"
                  >
                    <thead style="background: #133f5c" class="text-white">
                      <tr>
                        <th>Responsible Person</th>
                        <th>Total Number of Client Served</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(count, person) in countsByPerson"
                        :key="person"
                      >
                        <td>{{ person }}</td>
                        <td>{{ count }}</td>
                      </tr>
                    </tbody>
                  </DataTable>
                </div>
              </div>
              <div class="col-6">
                <div class="dataTable-container">
                  <DataTable
                    v-if="totalNumberOfCategoriesServed.length > 0"
                    style="width: 90%"
                    class="display stripe order-column hover compact"
                    id="hrTable"
                    :options="{
                      lengthChange: false,
                      searching: false,
                      // pageLength: 5,
                      scrollY: '240px',
                      info: false,
                      paging: false,
                    }"
                  >
                    <thead style="background: #133f5c" class="text-white">
                      <tr>
                        <th>Responsible Person</th>
                        <th>Case Categories Served</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(count, key) in countsByPersonAndCategory"
                        :key="key"
                      >
                        <td>{{ key.split("|")[0] }}</td>
                        <td>{{ key.split("|")[1] }}</td>
                        <td>{{ count }}</td>
                      </tr>
                    </tbody>
                  </DataTable>
                </div>
              </div>
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

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);
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
    DataTable,
  },

  data() {
    return {
      PageTitle: "CBSS",

      totalClientServed: [],
      totalAmount: 0,
      male: [],
      female: [],
      walkIn: [],
      others: [],

      caseCategories: [],
      uniqueCaseCategories: [],
      uniqueNonMonetaryServices: [],
      caseCategoriesWedc: [],
      caseCategoriesFhona: [],
      caseCategoriesOlderPersons: [],
      caseCategoriesOfw: [],
      caseCategoriesPwd: [],
      caseCategoriesOthers: [],
      NonMonetaryServices: [],

      financialAmountServed: [],
      sumsByCategory: {},

      subCategoriesServed: [],
      countsByService: {},

      totalNumberOfClientServed: [],
      countsByPerson: {},

      totalNumberOfCategoriesServed: [],
      countsByPersonAndCategory: {},

      clientServedPerQuarterChart: null,
      clientServedPerAgeAndSex: null,
      caseCategoriesChart: null,

      CaseData: {
        labels: ["1", "2", "3", "4"],
        label: ["Client"],
        values: [50, 75, 225, 100],
        backgroundColor: [
          "rgba(183, 154, 0, 1)",
          "rgba(210, 178, 2, 1)",
          "rgba(238, 202, 6, 1)",
          "rgba(248, 228, 75, 1)",
        ],
      },
    };
  },
  methods: {
    getTotalClientServed() {
      axios.get(`${backendURL}/api/totalClientServed`).then((res) => {
        this.totalClientServed = res.data.Cbss;
        // console.log(res.data.Cbss);
      });
    },

    getFinancialAmountGiven() {
      axios.get(`${backendURL}/api/financialAmountGiven`).then((res) => {
        this.totalAmount = res.data.totalAmount;
        // console.log(res.data.totalAmount);
      });
    },

    getgenderClientServed() {
      axios.get(`${backendURL}/api/genderClientServed`).then((res) => {
        const male = [];
        const female = [];

        res.data.Sex.forEach((item) => {
          if (item.SEX === "MALE") {
            male.push(item);
          } else if (item.SEX === "FEMALE") {
            female.push(item);
          }
        });

        this.male = male;
        this.female = female;
      });
    },

    getModeofAdmission() {
      axios.get(`${backendURL}/api/modeOfAdmission`).then((res) => {
        const walkIn = [];
        const others = [];
        // console.log(res.data.ModeOfAdmission);
        res.data.ModeOfAdmission.forEach((item) => {
          if (item.MODE_OF_ADMISSION === "WALK-IN") {
            walkIn.push(item);
          } else {
            others.push(item);
          }
        });

        this.walkIn = walkIn;
        this.others = others;
        // console.log(this.walkIn);
      });
    },

    getNumberCaseCategories() {
      axios.get(`${backendURL}/api/numberCaseCategories`).then((res) => {
        this.caseCategories = res.data.NumberCaseCategories;
        this.numberCaseCategories = res.data.NumberCaseCategories;
        const uniqueCaseCategories = this.numberCaseCategories.reduce(
          (categories, item) => {
            if (
              item.CASE_CATEGORY &&
              !categories.includes(item.CASE_CATEGORY)
            ) {
              categories.push(item.CASE_CATEGORY);
            }
            return categories;
          },
          []
        );

        this.uniqueCaseCategories = uniqueCaseCategories;
        console.log(this.uniqueCaseCategories);

        const caseCategoriesWedc = [];
        const caseCategoriesFhona = [];
        const caseCategoriesOlderPersons = [];
        const caseCategoriesOfw = [];
        const caseCategoriesPwd = [];
        const caseCategoriesOthers = [];
        // console.log(res.data.NumberCaseCategories);
        res.data.NumberCaseCategories.forEach((item) => {
          if (item.CASE_CATEGORY === "WEDC") {
            caseCategoriesWedc.push(item);
          } else if (item.CASE_CATEGORY === "FHONA") {
            caseCategoriesFhona.push(item);
          } else if (item.CASE_CATEGORY === "OLDER PERSONS") {
            caseCategoriesOlderPersons.push(item);
          } else if (item.CASE_CATEGORY === "PWD") {
            caseCategoriesPwd.push(item);
          } else if (item.CASE_CATEGORY === "OFW") {
            caseCategoriesOfw.push(item);
          } else {
            caseCategoriesOthers.push(item);
          }
        });

        const caseChartCategoriesWedc = caseCategoriesWedc.length;
        const caseChartCategoriesFhona = caseCategoriesFhona.length;
        const caseChartCategoriesOlderPersons =
          caseCategoriesOlderPersons.length;

        const caseChartCategoriesPwd = caseCategoriesPwd.length;
        const caseChartCategoriesOfw = caseCategoriesOfw.length;
        const caseChartCategoriesOthers = caseCategoriesOthers.length;

        // console.log(caseCategoriesWedc);
        const caseCategoriesChart = {
          labels: ["WEDC", "FHONA", "OLDER PERSONS", "PWD", "OFW", "OTHERS"],
          label: ["Case Categories"],
          values: [
            caseChartCategoriesWedc,
            caseChartCategoriesFhona,
            caseChartCategoriesOlderPersons,
            caseChartCategoriesPwd,
            caseChartCategoriesOfw,
            caseChartCategoriesOthers,
          ],
          backgroundColor: [
            "rgba(150, 9, 9, 1)",
            "rgba(198, 54, 55, 1)",
            "rgba(226, 80, 76, 1)",
            "rgba(255, 105, 97, 1)",
            "rgba(255, 150, 136, 1)",
            "rgba(255, 191, 176, 1)",
          ],
        };

        this.caseCategoriesChart = caseCategoriesChart;

        // console.log(this.caseCategories);
      });
    },

    getNumberNonMonetaryServices() {
      axios.get(`${backendURL}/api/numberNonMonetaryServices`).then((res) => {
        this.NonMonetaryServices = res.data.NumberNonMonetaryServices;
        this.numberNonMonetaryServices = res.data.NumberNonMonetaryServices;

        const uniqueNonMonetaryServices = this.numberNonMonetaryServices.reduce(
          (services, item) => {
            if (
              item.NON_MONETARY_SERVICES &&
              !services.includes(item.NON_MONETARY_SERVICES)
            ) {
              services.push(item.NON_MONETARY_SERVICES);
            }
            return services;
          },
          []
        );

        this.uniqueNonMonetaryServices = uniqueNonMonetaryServices;
      });
    },

    getClientsServedPerQuarter() {
      axios.get(`${backendURL}/api/clientsServedPerQuarter`).then((res) => {
        this.clientsServedPerQuarter = res.data.clientsServedPerQuarter;
        // console.log(res.data.clientsServedPerQuarter.Quarter1);

        const quarter1 = res.data.clientsServedPerQuarter.Quarter1;
        const quarter2 = res.data.clientsServedPerQuarter.Quarter2;
        const quarter3 = res.data.clientsServedPerQuarter.Quarter3;
        const quarter4 = res.data.clientsServedPerQuarter.Quarter4;
        const clientServedPerQuarterChart = {
          labels: ["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"],
          label: ["Quarters"],
          values: [quarter1, quarter2, quarter3, quarter4],
          backgroundColor: [
            "rgba(255, 150, 136, 1)",
            "rgba(255, 105, 97, 1)",
            "rgba(248, 228, 75, 1)",
            "rgba(106, 158, 218, 1)",
            "rgba(178, 218, 250, 1)",
            "rgba(238, 202, 6, 1)",
          ],
        };

        this.clientServedPerQuarterChart = clientServedPerQuarterChart;
        // console.log(this.NonMonetaryServices.length);
      });
    },

    getClientServedPerAgeAndSex() {
      axios.get(`${backendURL}/api/clientServedPerAgeAndSex`).then((res) => {
        this.clientServedPerAgeAndSex = res.data.clientServedPerAgeAndSex;
        // console.log(res.data.clientServedPerAgeAndSex);
        const maleAge0_4 = res.data.clientServedPerAgeAndSex.MALE["AGE:0-4"];
        const maleAge5_17 = res.data.clientServedPerAgeAndSex.MALE["AGE:5-17"];
        const maleAge18_28 =
          res.data.clientServedPerAgeAndSex.MALE["AGE:18-28"];
        const maleAge29_39 =
          res.data.clientServedPerAgeAndSex.MALE["AGE:29-39"];
        const maleAge40_50 =
          res.data.clientServedPerAgeAndSex.MALE["AGE:40-50"];
        const maleAge51_61 =
          res.data.clientServedPerAgeAndSex.MALE["AGE:51-61"];
        const maleAge62_Above =
          res.data.clientServedPerAgeAndSex.MALE["AGE:61 and Above"];

        const femaleAge0_4 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:0-4"];
        const femaleAge5_17 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:5-17"];
        const femaleAge18_28 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:18-28"];
        const femaleAge29_39 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:29-39"];
        const femaleAge40_50 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:40-50"];
        const femaleAge51_61 =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:51-61"];
        const femaleAge62_Above =
          res.data.clientServedPerAgeAndSex.FEMALE["AGE:61 and Above"];

        // console.log(femaleAge40_50);

        const clientServedPerAgeAndSex = {
          labels: [
            "0",
            "5-17",
            "18-28",
            "29-39",
            "40-50",
            "51-61",
            "62 & above",
          ],
          datasets: [
            {
              label: "Female",
              data: [
                femaleAge0_4,
                femaleAge5_17,
                femaleAge18_28,
                femaleAge29_39,
                femaleAge40_50,
                femaleAge51_61,
                femaleAge62_Above,
              ],
              backgroundColor: "red",
              fill: false, // for line chart
              borderColor: "red", // for line chart
            },
            {
              label: "Male",
              data: [
                maleAge0_4,
                maleAge5_17,
                maleAge18_28,
                maleAge29_39,
                maleAge40_50,
                maleAge51_61,
                maleAge62_Above,
              ],
              backgroundColor: "blue",
              fill: false, // for line chart
              borderColor: "blue", // for line chart
            },
          ],
        };

        this.clientServedPerAgeAndSex = clientServedPerAgeAndSex;
        // console.log(this.NonMonetaryServices.length);
      });
    },

    getFinancialAmountServe() {
      axios.get(`${backendURL}/api/financialAmountServed`).then((res) => {
        this.financialAmountServed = res.data.FinancialAmountServed;

        const sumsByCategory = this.financialAmountServed.reduce(
          (sums, item) => {
            if (!sums[item.CASE_CATEGORY]) {
              sums[item.CASE_CATEGORY] = 0;
            }
            sums[item.CASE_CATEGORY] += item.AMOUNT || 0; // if AMOUNT is null, treat it as 0
            return sums;
          },
          {}
        );

        this.sumsByCategory = sumsByCategory;

        // console.log(this.sumsByCategory);
      });
    },

    getSubCategoriesServed() {
      axios.get(`${backendURL}/api/subCategoriesServed`).then((res) => {
        this.subCategoriesServed = res.data.SubCategoriesServed;

        const countsByService = this.subCategoriesServed.reduce(
          (counts, item) => {
            if (!counts[item.NON_MONETARY_SERVICES]) {
              counts[item.NON_MONETARY_SERVICES] = 0;
            }
            counts[item.NON_MONETARY_SERVICES]++;
            return counts;
          },
          {}
        );

        this.countsByService = countsByService;
      });
    },

    getTotalNumberOfClientServed() {
      axios.get(`${backendURL}/api/totalNumberOfClientServed`).then((res) => {
        this.totalNumberOfClientServed = res.data.TotalNumberOfClientServed;

        const countsByPerson = this.totalNumberOfClientServed.reduce(
          (counts, item) => {
            if (!counts[item.REPONSIBLE_PERSON]) {
              counts[item.REPONSIBLE_PERSON] = 0;
            }
            counts[item.REPONSIBLE_PERSON]++;
            return counts;
          },
          {}
        );

        this.countsByPerson = countsByPerson;
      });
    },

    getTotalNumberOfCategoriesServed() {
      axios
        .get(`${backendURL}/api/totalNumberOfCategoriesServed`)
        .then((res) => {
          this.totalNumberOfCategoriesServed =
            res.data.TotalNumberOfCategoriesServed;

          const countsByPersonAndCategory =
            this.totalNumberOfCategoriesServed.reduce((counts, item) => {
              const key = `${item.REPONSIBLE_PERSON}|${item.CASE_CATEGORY}`;
              if (!counts[key]) {
                counts[key] = 0;
              }
              counts[key]++;
              return counts;
            }, {});

          this.countsByPersonAndCategory = countsByPersonAndCategory;
        });
    },
  },
  mounted() {
    // this.getCbss();
    this.getTotalClientServed();
    this.getFinancialAmountGiven();
    this.getgenderClientServed();
    this.getModeofAdmission();
    this.getNumberCaseCategories();
    this.getNumberNonMonetaryServices();
    this.getClientsServedPerQuarter();
    this.getClientServedPerAgeAndSex();
    this.getFinancialAmountServe();
    this.getSubCategoriesServed();
    this.getTotalNumberOfClientServed();
    this.getTotalNumberOfCategoriesServed();
  },
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";

h1 {
  font-family: Inter;
  font-size: 43px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 20px;
}

.dashboard-text {
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-subtext {
  font-family: Arial;
  font-size: 30px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 40px;
}

.dashboard-value {
  font-family: Inter;
  font-size: 70px;
  font-weight: 600;
  line-height: 85px;
  letter-spacing: 0em;
  text-align: center;
}

.dashboard-center {
  font-family: Inter;
  font-size: 25px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
}

.section2-header {
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  padding-top: 20px;
}

.chart-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.dashboard-container {
  width: 100%;
  height: 500px;
  margin: 10px auto;
  padding: 5px 5px 5px 5px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.shadow-container {
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
  padding: 5px 5px 5px 5px;
  width: 98%;
  height: 400px;
  border-radius: 3px;
  margin-bottom: 10px;
}

.lineChart {
  padding-bottom: 100px;
}

.dataTable-container {
  padding: 0px 20px 10px 20px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>
