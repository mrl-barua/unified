<template>
  <div>
    <AdminSidebar
      v-if="admin === 'authenticated'"
      :iconText="PageTitle"
      :iconDetails="PageDetail"
    />
    <HrSidebar
      v-if="hrAdmin === 'authenticated'"
      iconText="PageTitle"
      :iconDetails="PageDetail"
    />
    <br /><br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <div class="col-12 page-border">
        <div class="col-12" style="padding: 20px">
          <!-- 1ST SECTION -->
          <div class="col-6">
            <div class="col-12">
              <p class="headerText">ID</p>
              <p v-if="model.Hr.id" class="headerContent">
                {{ model.Hr.id }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">REQUEST DATE</p>
              <p v-if="model.Hr.request_date" class="headerContent">
                {{ model.Hr.request_date }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">REQUESTING EMPLOYEE</p>
              <p v-if="model.Hr.requesting_employee_name" class="headerContent">
                {{ model.Hr.requesting_employee_name }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">EMPLOYEE POSITION</p>
              <p v-if="model.Hr.employee_position" class="headerContent">
                {{ model.Hr.employee_position }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">EMPLOYEE STATUS</p>
              <p v-if="model.Hr.employment_status" class="headerContent">
                {{ model.Hr.employment_status }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">OFFICE/UNIT</p>
              <p v-if="model.Hr.office_unit" class="headerContent">
                {{ model.Hr.office_unit }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>

          <!-- 2ND SECTION -->
          <div
            class="col-6"
            style="border-left: 1px solid gray; padding-left: 20px"
          >
            <div class="col-12">
              <p class="headerText">REQUEST CATEGORY</p>
              <p v-if="model.Hr.request_category" class="headerContent">
                {{ model.Hr.request_category }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">BRIEF INTERVIEW</p>
              <p v-if="model.Hr.brief_interview" class="headerContent">
                {{ model.Hr.brief_interview }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">REMARKS</p>
              <p v-if="model.Hr.remarks" class="headerContent">
                {{ model.Hr.remarks }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">ASSISTANCE PROVIDED</p>
              <p v-if="model.Hr.assistance_provided" class="headerContent">
                {{ model.Hr.assistance_provided }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">QUANTITY UNIT</p>
              <p v-if="model.Hr.quantity_unit" class="headerContent">
                {{ model.Hr.quantity_unit }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
            <div class="col-12">
              <p class="headerText">DATE RECEIVED</p>
              <p v-if="model.Hr.date_received" class="headerContent">
                {{ model.Hr.date_received }}
              </p>
              <p v-else class="error headerContent">No Data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";
import HrSidebar from "@/components/HrSidebar";
import axios from "axios"; // Import Axios
import { backendURL } from "@/config.js";
export default {
  name: "AdminHREditHistoryView",
  components: {
    AdminSidebar,
    HrSidebar,
  },
  data() {
    return {
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "View Edit Details",
      admin: null,
      hrAdmin: null,
      model: {
        Hr: {
          id: "",
          request_date: "",
          requesting_employee_name: "",
          employee_position: "",
          employment_status: "",
          office_unit: "",
          request_category: "",
          brief_interview: "",
          remarks: "",
          assistance_provided: "",
          quantity_unit: "",
          date_received: "",
        },
      },
    };
  },
  mounted() {
    this.HrID = this.$route.params.ID;
    this.HrEditHistoryData(this.HrID);
    this.admin = sessionStorage.getItem("admin");
    this.hrAdmin = sessionStorage.getItem("hrAdmin");
  },
  methods: {
    async HrEditHistoryData(HrID) {
      try {
        const res = await axios.get(`${backendURL}/api/hrVersion/${HrID}/view`);
        const hrData = res.data.Hr;
        console.log(res.data.Hr);

        // Check if hrData is null or empty
        if (!hrData || Object.keys(hrData).length === 0) {
          for (const key in this.model.Hr) {
            this.model.Hr[key] = "No Data";
          }
        } else {
          // Assign values from hrData to this.model.Hr
          Object.assign(this.model.Hr, hrData);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
        } else {
          console.error(error);
        }
      }
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

.headerText {
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.headerContent {
  font-family: Inter;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}

.first-row {
  border-right: 1px solid #000000;
}

.second-row {
  padding-left: 10px;
}

.error {
  color: red;
}

.page-border {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.15);
}
</style>
