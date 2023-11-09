<template>
  <br /><br /><br /><br />
  <adminSidebar :iconText="PageTitle" />
  <div></div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";

export default {
  name: "SettingDashboard",

  components: {
    AdminSidebar,
  },

  data() {
    return {
      PageTitle: "Settings", // The title displayed on the page, which is "ADMIN SWDA"
    };
  },
};
</script>
