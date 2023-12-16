<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p class="Header">Recent Edit</p>
      <p class="Header2">{{ model.Osp.Agency }}</p>
      <DataTable
        v-if="this.osp.length > 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="ospTable"
        :options="{
          order: [[0, 'desc']],
          stateSave: true,
        }"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Division</th>
            <th>Section/Unit</th>
            <th>Office/Location</th>
            <th>Position Title</th>
            <th>Position Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in osp" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ formatDate(item.created_at) }}</td>
            <td>{{ item.fullname }}</td>
            <td>{{ item.division }}</td>
            <td>{{ item.section_unit }}</td>
            <td>{{ item.office_location_official_station }}</td>
            <td>{{ item.position_title }}</td>
            <td>{{ item.position_level }}</td>
            <td class="actions">
              <router-link
                :to="{ path: '/adminosp/' + item.id + '/editHistory/view' }"
                class="custom-link"
              >
                <i class="bx bx-low-vision table-icon custom-link"></i
              ></router-link>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Division</th>
            <th>Section/Unit</th>
            <th>Office/Location</th>
            <th>Position Title</th>
            <th>Position Level</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </DataTable>

      <DataTable
        v-else-if="this.osp.length <= 0"
        style="width: 100%"
        class="display stripe order-column cell-border hover compact"
        id="ospTable"
      >
        <thead style="background: #133f5c" class="text-white">
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Division</th>
            <th>Section/Unit</th>
            <th>Office/Location</th>
            <th>Position Title</th>
            <th>Position Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in osp" :key="item.id">
            <td>no data</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Date Edited</th>
            <th>Name</th>
            <th>Division</th>
            <th>Section/Unit</th>
            <th>Office/Location</th>
            <th>Position Title</th>
            <th>Position Level</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </DataTable>
    </div>
  </div>
</template>

<script>
import axios from "axios"; // Import Axios
import { backendURL } from "@/config.js";
import AdminSidebar from "@/components/AdminSidebar";

import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-responsive";
DataTable.use(DataTablesCore);

export default {
  name: "AdminEditHistory",
  components: {
    AdminSidebar,
    DataTable,
  },
  data() {
    return {
      PageTitle: "OPERATIONAL STAFF DATABASE",
      PageDetail: "Edit History Logs",
      osp: [],

      model: {
        Osp: {},
      },
    };
  },
  mounted() {
    this.OspID = this.$route.params.ID;
    this.getOspEditHistory(this.OspID);
    this.OspData(this.OspID);
  },
  methods: {
    formatDate(dateString) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },

    async getOspEditHistory(OspID) {
      try {
        const res = await axios.get(`${backendURL}/api/osdVersion/${OspID}`);
        this.osp = res.data.OsdEditHistory;
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },

    async OspData(OspID) {
      try {
        const res = await axios.get(`${backendURL}/api/osdlist/${OspID}/edit`);
        const ospData = res.data.Osd;
        console.log(ospData);

        // Check if ospData is null or empty
        if (!ospData || Object.keys(ospData).length === 0) {
          this.model.Osp = { ...this.model.Osp, ...{ NoData: "No Data" } };
        } else {
          // Assign values from ospData to this.model.Osp
          this.model.Osp = { ...ospData };
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
        }
      }
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
  margin: 0px 4px 0px 4px;
}

.custom-link {
  text-decoration: none !important;
  color: black;
}

.actions {
  justify-content: space-evenly;
  align-items: center;
  width: 100px !important;
  margin: auto;
  text-align: center;
}

.Header {
  font-family: Inter;
  font-size: 35px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0em;
  text-align: center;
}

.Header2 {
  font-family: Inter;
  font-size: 22px;
  font-weight: bolder;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  color: red;
}
</style>
