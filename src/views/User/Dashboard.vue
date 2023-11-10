<template>
  <div>
    <Sidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-6 first-column">
        <p>Dashboard Summary</p>

        <!-- FIRST ROW FIRST COLUMN -->
        <div class="col-4">
          <div class="col-12">
            <p>Total Number of Clients Serve</p>
            <span id="clientServe">00</span>
          </div>
          <div class="col-12">
            <p>Financial Assistance Amount Given</p>
            <span id="clientServe">00</span>
          </div>
        </div>

        <!-- FIRST ROW SECOND COLUMN -->
        <div class="col-4">
          <p>Gender of Clients Serve</p>
          <div class="col-12">
            <p>FEMALE <span id="genderFemaleServe">00</span> %</p>
            <hr class="hr" />
            <p>MALE <span id="genderMaleServe">00</span> %</p>
          </div>

          <p>Mode of Admission</p>
          <div class="col-12">
            <p>WALK-IN</p>
            <p id="walkInAdmission">00</p>
            <hr class="hr" />
            <p>DSWD...</p>
            <p id="dswdAdmission">00</p>
          </div>
        </div>

        <!-- FIRST ROW THIRD COLUMN -->
        <div class="col-4">
          <div class="col-12">
            <p>Number of Case Categories</p>
            <p id="caseCategories">00</p>
          </div>
          <div class="col-12">
            <p>Number of Non- Monetary Services</p>
            <p id="nonMonetaryServices">00</p>
          </div>
        </div>
      </div>
      <div class="col-6 second-column"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import BarChart from "@/components/ChartJS/Barchart";

export default {
  name: "Dashboard",
  components: {
    Footer,
    Sidebar,
    BarChart,
  },
  data() {
    return {
      PageTitle: "CBSS",
      ClusterData: null, // Initialize barChartData as null
      RegionData: null,
    };
  },
  methods: {
    ClusterFetchData() {
      return axios
        .get(`${backendURL}/api/cluster`)
        .then((response) => {
          // Initialize data arrays
          const southCluster = [];
          const cluster1 = [];
          const northCluster = [];
          const unclustered = [];
          const cluster2 = [];
          const senior = [];

          response.data.forEach((item) => {
            const clusterName = item.Cluster;

            switch (clusterName) {
              case "South Cluster":
                southCluster.push(item);
                break;
              case "Cluster 1":
                cluster1.push(item);
                break;
              case "North Cluster":
                northCluster.push(item);
                break;
              case "Unclustered":
                unclustered.push(item);
                break;
              case "Cluster 2":
                cluster2.push(item);
                break;
              case "Senior Citizens Center":
                senior.push(item);
                break;
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const southClusterLength = southCluster.length;
          const cluster1Length = cluster1.length;
          const northClusterLength = northCluster.length;
          const unclusteredLength = unclustered.length;
          const cluster2Length = cluster2.length;
          const seniorLength = senior.length;

          // Prepare and return data
          const clusterdata = {
            labels: [
              "Unclustered",
              "Cluster 1",
              "North Cluster",
              "South Cluster",
              "Senior Citizen",
              "Cluster 2",
            ],
            label: ["Cluster"],
            values: [
              unclusteredLength,
              cluster1Length,
              northClusterLength,
              southClusterLength,
              seniorLength,
              cluster2Length,
            ],
            backgroundColor: [
              "rgba(25, 82, 105, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6",
            ],
          };
          // Set barChartData to the computed data
          this.ClusterData = clusterdata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data if in case there is an api catch error
          const clusterdata = {
            labels: [
              "Unclustered",
              "Cluster 1",
              "North Cluster",
              "South Cluster",
              "Senior Citizen",
              "Cluster 2",
            ],
            label: ["Cluster"],
            values: [1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(25, 82, 105, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(128, 0, 128, 0.6",
            ],
          };
          // Set catcc error barChartData to the computed data
          this.ClusterData = clusterdata;
        });
    },
  },
  mounted() {
    // Automatically fetch data when the component is mounted
    this.ClusterFetchData();
  },
};
</script>

<style scoped></style>
