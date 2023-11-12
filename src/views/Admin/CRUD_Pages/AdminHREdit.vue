<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
  <div>TEST ADMIN EDIT</div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";

export default {
  name: "AdminHrEdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN HR > EDIT",
    };
  },
};
</script>
