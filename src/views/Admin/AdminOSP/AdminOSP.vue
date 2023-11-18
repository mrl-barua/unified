<template>
  <div>
    <AdminSidebar />
    <br /><br /><br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";
import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";
import BarChart from "@/components/ChartJS/Barchart";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "AdminOSP",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },

  data() {
    return {
      swda: [],
    };
  },
  mounted() {
    this.getSwda();
  },

  created() {},
  methods: {
    getSwda() {
      axios.get(`${backendURL}/api/swdalist`).then((res) => {
        this.swda = res.data.Swda;
        console.log(res);
      });
    },
  },
};
</script>

<style scoped>
@import "datatables.net-dt";
@import "datatables.net-bs5";

.dataTables_paginate a {
  color: black !important;
}

div.dataTables_wrapper a.paginate_button {
  color: black !important;
}

* {
  text-align: justify;
}

.table-icon {
  margin: 0px 3px 0px 3px;
}

.custom-link {
  text-decoration: none !important;
  color: black;
}
</style>
