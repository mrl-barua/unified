<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
  <div>TEST ADMIN CREATE</div>
</template>
<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminHRCreate",

  components: {
    AdminSidebar,
  },

  data() {
    return {
      PageTitle: "ADMIN HR > ADD",
    };
  },
};
</script>
