<template>
  <div>
    <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper"></div>

    <div class="card card-margin">
      <div
        class="card-header"
        style="display: flex; justify-content: center; align-items: center"
      >
        <router-link to="/adminSettings">
          <button
            class="btn btn-primary"
            style="
              background-color: #133f5c;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            MODIFY USER ROLES
          </button>
        </router-link>
        <router-link to="/adminSettings/ChangeBackground">
          <button
            class="btn btn-outline-success ms-3"
            style="
              /* background-color: #135c1f; */
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            CHANGE BACKGROUND COVER
          </button>
        </router-link>
      </div>
      <div class="card-header" style="display: flex">
        <router-link to="/adminSettings/addUserAccess">
          <button
            class="btn btn-primary float-start"
            style="
              background-color: #133f5c;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            ADD NEW
          </button>
        </router-link>
      </div>
      <div class="card-body">
        <DataTable
          v-if="this.settings.length > 0"
          style="width: 100%"
          class="display stripe order-column cell-border hover compact"
          id="settingsTable"
          :options="{
            stateSave: true,
            pageLength: 8,
            lengthMenu: [
              [5, 8, 10, 25, 50],
              [5, 8, 10, 25, 50],
            ],
          }"
        >
          <thead style="background: #133f5c" class="text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in settings" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td
                v-if="item.role == 'admin'"
                style="background-color: rgb(255, 154, 154)"
              >
                {{ item.role }}
              </td>
              <td
                v-else-if="item.role == 'user'"
                style="background-color: rgb(97, 179, 97)"
              >
                {{ item.role }}
              </td>
              <td class="actions">
                <router-link
                  :to="{
                    path: '/adminsettings/' + item.id + '/editUserAccess',
                  }"
                  class="custom-link"
                >
                  <i class="bx bx-edit icon table-icon"></i>
                </router-link>

                <i
                  @click="deleteSettings(item.id)"
                  class="bx bx-archive-in icon table-icon custom-link"
                  style="cursor: pointer"
                ></i>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </tfoot>
        </DataTable>
      </div>
    </div>

    <br /><br />
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
  name: "AdminSETTINGS",
  components: {
    Footer,
    AdminSidebar,
    BarChart,
    DataTable,
  },
  data() {
    return {
      PageTitle: "Settings",
      PageDetail: "Modify User Roles",
      settings: [],
    };
  },
  computed: {},
  mounted() {
    this.getSettings();
  },
  methods: {
    async getSettings() {
      try {
        const res = await axios.get(`${backendURL}/api/getAdmin`);
        this.settings = res.data.Admin;
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteSettings(SettingsID) {
      const result = await this.$swal({
        title: "Are you sure?",
        text: "You want to delete this data?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        try {
          const res = await axios.delete(
            `${backendURL}/api/getAdmin/${SettingsID}/delete`
          );

          await this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          });

          window.location.reload();
        } catch (error) {
          if (error.response) {
            if (error.response.status === 422) {
              this.errorList = error.response.data.errors;
            }
            if (error.response.status === 404) {
              await this.$swal({
                icon: "error",
                title: "Error!",
                text: error.response.data.message,
              });
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error", error.message);
          }
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
