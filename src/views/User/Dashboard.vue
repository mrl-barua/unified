<template>
  <div>
    <Sidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <h1>CBSS DASHBOARD</h1>
      <div class="graphs col-12 col-md-6">
        <!-- Render BarChart component only when barChartData is not null -->
        <BarChart v-if="ClusterData" :data="ClusterData" />
      </div>
      <div class="graphs col-12 col-md-6">
        <!-- Render BarChart component only when barChartData is not null -->
        <BarChart v-if="RegionData" :data="RegionData" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
        .get("http://127.0.0.1:8000/api/cluster")
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

    RegionFetchData() {
      return axios
        .get("http://127.0.0.1:8000/api/regionaloperation")
        .then((response) => {
          // Initialize data arrays
          const davaoCity = [];
          const davaodelSur = [];
          const davaodelNorte = [];
          const davaodeOro = [];
          const davaoOriental = [];
          const others = [];
          const regionXI = [];

          response.data.forEach((item) => {
            const regionName = item.Regional_Operation;

            switch (regionName) {
              case "Davao City":
                davaoCity.push(item);
                break;
              case "Davao del Sur":
                davaodelSur.push(item);
                break;
              case "Davao del Norte":
                davaodelNorte.push(item);
                break;
              case null:
                others.push(item);
                break;
              case "Region XI":
                regionXI.push(item);
                break;
              case "Davao Oriental":
                davaoOriental.push(item);
                break;
              case "Davao de Oro":
                davaodeOro.push(item);
                break;
              default:
                // Handle other cases if necessary
                break;
            }
          });

          // Calculate data lengths
          const davaoCityLength = davaoCity.length;
          const davaodelSurLength = davaodelSur.length;
          const davaodelNorteLength = davaodelNorte.length;
          const othersLength = others.length;
          const regionXILength = regionXI.length;
          const davaoOrientalLength = davaoOriental.length;
          const davaodeOroLength = davaodeOro.length;

          // Prepare and return data
          const regiondata = {
            labels: [
              "Davao City",
              "Davao del Sur",
              "Davao del Norte",
              "Others",
              "Region XI",
              "Davao Oriental",
              "Davao de Oro",
            ],
            label: ["Regional Operation"],
            values: [
              davaoCityLength,
              davaodelSurLength,
              davaodelNorteLength,
              othersLength,
              regionXILength,
              davaoOrientalLength,
              davaodeOroLength,
            ],
            backgroundColor: [
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(255, 255, 0, 0.6)",
              "rgba(128, 0, 128, 0.6)",
            ],
          };
          // Set barChartData to the computed data
          this.RegionData = regiondata;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);

          // Prepare and return data if in case there is an api catch error
          const regiondata = {
            labels: [
              "Davao City",
              "Davao del Sur",
              "Davao del Norte",
              "Others",
              "Region XI",
              "Davao Oriental",
              "Davao de Oro",
            ],
            label: ["Regional Operation"],
            values: [1, 1, 1, 1, 1, 1, 1],
            backgroundColor: [
              "rgba(255, 0, 0, 0.6)",
              "rgba(0, 255, 0, 0.6)",
              "rgba(0, 0, 255, 0.6)",
              "rgba(255, 255, 0, 0.6)",
              "rgba(128, 0, 128, 0.6)",
            ],
          };
          // Set catcc error barChartData to the computed data
          this.RegionData = regiondata;
        });
    },
  },
  mounted() {
    // Automatically fetch data when the component is mounted
    this.ClusterFetchData();
    this.RegionFetchData();
  },
};
</script>

<style scoped>
.graphs {
  margin-top: 50px;
  margin-bottom: 50px;
  padding-right: 0px;
  padding-left: 0px;
}

@media only screen and (min-width: 1024px) {
  .graphs {
    padding-right: 80px;
    padding-left: 80px;
  }
}
</style>
