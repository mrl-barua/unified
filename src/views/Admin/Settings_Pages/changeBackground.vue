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
            class="btn btn-outline-primary"
            style="
              /* background-color: #133f5c; */
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            MODIFY USER ROLES
          </button>
        </router-link>
        <router-link to="/adminSettings/ChangeBackground">
          <button
            class="btn btn-primary ms-3"
            style="
              background-color: #135c1f;
              font-size: 12px; /* Adjust the font size as needed */
              padding: 10px 30px 10px 30px;
            "
          >
            CHANGE BACKGROUND COVER
          </button>
        </router-link>
      </div>
      <div class="card-header" style="display: flex">Change Background</div>
      <div class="card-body">
        <input type="file" @change="uploadImage" />
        <br />
      </div>
    </div>
    <div style="display: flex; justify-content: center; align-items: center">
      <img :src="imageUrl" style="max-width: 1000px; min-width: 999px" />
    </div>
    <br /><br />
  </div>
</template>

<script>
import axios from "axios";
import { backendURL } from "@/config.js";

import Footer from "@/components/Footer";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminBACKGROUND",
  components: {
    Footer,
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "Settings",
      PageDetail: "Change Background Cover",
      settings: [],
      imageUrl: null,
    };
  },
  async created() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/latest");
      this.imageUrl = response.data.image; // Set imageUrl to the full URL returned by the API
    } catch (error) {
      console.error("Failed to fetch latest image:", error);
    }
  },
  methods: {
    async uploadImage(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(
          // Change this line
          "http://127.0.0.1:8000/api/update",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.data.success) {
          console.log(formData.get("image"));
          console.log("Image uploaded successfully:", response.data.image);
          this.imageUrl = "http://127.0.0.1:8000/assets/" + response.data.image;
          window.location.reload();
        } else {
          console.log("Failed to upload image:", response.data);
        }
      } catch (error) {
        console.error("Failed to upload image:", error.response.data);
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
