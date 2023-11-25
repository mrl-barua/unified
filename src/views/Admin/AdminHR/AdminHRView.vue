<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper"></div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios"; // Import Axios

export default {
  name: "AdminHRView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN HR VIEW",
    };
  },
  mounted() {
    this.HrID = this.$route.params.ID;
    this.HrData(this.HrID);
  },
  methods: {
    HrData(HrID) {
      axios
        .get(`http://127.0.0.1:8000/api/hrlist/${HrID}/edit`)
        .then((res) => {
          const hrData = res.data.Hr;
          console.log(res.data.Hr);

          // Check if hrData is null or empty
          if (!hrData || Object.keys(hrData).length === 0) {
            for (const key in this.model.Hr) {
              this.model.Hr[key] = "No Data";
            }
          } else {
            // Assign values from hrData to this.model.Hr
            for (const key in hrData) {
              this.model.Hr[key] = hrData[key];
            }
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            alert(error.response.data.message);
          }
        });
    },
  },
};
</script>

<style scoped>
.columns {
  padding: 0px 20px 0px 20px;
}
.AgencyTitle {
  font-family: Inter;
  font-size: 22px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
}

.agencyHeader {
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyHead {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.agencyContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}
.error {
  color: red;
}
</style>
