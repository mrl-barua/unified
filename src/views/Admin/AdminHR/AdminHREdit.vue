<template>
  <br /><br /><br /><br />
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
  <div>
    <div class="container-fluid">
      <div class="Header"></div>

      <ul
        class="alert alert-warning"
        v-if="Object.keys(this.errorList).length > 0"
      >
        <li
          class="mb-0 ms-3"
          v-for="(error, index) in this.errorList"
          :key="index"
        >
          {{ error[0] }}
        </li>
      </ul>

      <div class="container-fluid wrapper">
        <!-- 1ST SECTION -->
        <section class="col-6">
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.request_date"
                class="form-control centered-placeholder"
                id="requestDate"
                required
                placeholder="Request Date"
              />
              <label for="requestDate">Request Date</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.requesting_employee_name"
                class="form-control centered-placeholder"
                id="requestingEmployee"
                required
                placeholder="Requesting Employee"
              />
              <label for="requestingEmployee">Requesting Employee</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.employee_position"
                class="form-control centered-placeholder"
                id="employeePosition"
                required
                placeholder="Employee Position"
              />
              <label for="employeePosition">Employee Position</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <select
                v-model="model.Hr.employment_status"
                class="form-select centered-placeholder"
                id="sex"
              >
                <option value="" disabled selected>Select an option</option>
                <option value="Permanent">Permanent</option>
                <option value="Contractual">Contractual</option>
                <option value="MOA">MOA</option>
              </select>
              <label for="employmentStatus">Employee Status</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.office_unit"
                class="form-control centered-placeholder"
                id="officeUnit"
                required
                placeholder="Office/Unit"
              />
              <label for="officeUnit">Office/Unit</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.date_received"
                class="form-control centered-placeholder"
                id="dateReceived"
                required
                placeholder="Date Received"
              />
              <label for="dateReceived">Date Received</label>
            </div>
          </div>
        </section>
        <!-- 2ND SECTION -->
        <section class="col-6">
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <select
                v-model="model.Hr.request_category"
                class="form-select centered-placeholder"
                id="sex"
              >
                <option value="" disabled selected>Select an option</option>
                <option value="Medical – Laboratory, Procedures or Treatments">
                  Medical – Laboratory, Procedures or Treatments
                </option>
                <option value="Referral Services">Referral Services</option>
                <option value="Burial Assistance">Burial Assistance</option>
              </select>
              <label for="requestCategory">Request Category</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.brief_interview"
                class="form-control centered-placeholder"
                id="briefInterview"
                required
                placeholder="Brief Interview"
              />
              <label for="briefInterview">Brief Interview</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <textarea
                type="text"
                style="height: 126px"
                v-model="model.Hr.remarks"
                class="form-control centered-placeholder"
                id="remarks"
                required
                placeholder="Remarks"
              />
              <label for="remarks">Remarks</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.assistance_provided"
                class="form-control centered-placeholder"
                id="assistanceProvided"
                required
                placeholder="Assistance Provided"
              />
              <label for="assistanceProvided">Assistance Provided</label>
            </div>
          </div>
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.quantity_unit"
                class="form-control centered-placeholder"
                id="quantityUnit"
                required
                placeholder="Quantity/Unit"
              />
              <label for="quantityUnit">Quantity/Unit</label>
            </div>
          </div>
        </section>
      </div>

      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminhr">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminhr">
          <button
            @click="updateHR($route.params.ID)"
            class="btn btn-primary col-12"
          >
            Save
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import HrSidebar from "@/components/HrSidebar";
import { backendURL } from "@/config.js";
export default {
  name: "AdminHREdit",
  components: {
    AdminSidebar,
    HrSidebar,
  },
  data() {
    return {
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "Edit Current Record",
      admin: null,
      hrAdmin: null,
      HrID: "",
      errorList: "",
      // The model for the form inputs  (the data that will be sent to the backend) is defined here as an empty object with the following properties: Hr
      model: {
        Hr: {
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
    //console.log(this.$route.params.ID);
    this.HrID = this.$route.params.ID;
    //the HrID is passed as a parameter to the HrData() function  (which is defined below) to get the data of the HR with the given ID
    this.HrData(this.$route.params.ID);
    this.admin = sessionStorage.getItem("authenticated");
    this.hrAdmin = sessionStorage.getItem("authenticated");
  },
  methods: {
    // The HrData() function is used to get the data of the HR with the given ID
    async HrData(HrID) {
      try {
        const res = await axios.get(`${backendURL}/api/hrlist/${HrID}/edit`);
        const hrData = res.data.Hr;
        console.log(hrData);

        // Check if hrData is null or empty
        this.model.Hr = { ...hrData };
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert(error.response.data.message);
        }
      }
    },

    async updateHR(HrID) {
      try {
        // Get the name from localStorage
        this.name = localStorage.getItem("name");

        // Set RESPONSIBLE_ADMIN to the current value of this.name
        this.model.Hr.responsible_admin = this.name;

        const res = await axios.put(
          `${backendURL}/api/hrlist/${HrID}/edit`,
          this.model.Hr
        );
        console.log(res.data);

        await this.$swal({
          icon: "success",
          title: "Success!",
          text: res.data.message,
        });

        this.$router.push("/adminhr");
        window.location.reload();

        this.errorList = "";
      } catch (error) {
        if (error.response) {
          if (error.response.status === 422) {
            this.errorList = error.response.data.errors;
          }
          if (error.response.status === 404) {
            alert(error.response.data.message);
          }
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("error", error.message);
        }
      }
    },
  },
};
</script>

<style scoped>
.container {
  padding-bottom: 100px;
}

.centered-placeholder::placeholder {
  text-align: center;
}

.spaceBetween {
  margin: 0px 10px 10px 10px;
  /* font-family: Inter; */
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
}

.spaceBetween label {
  padding-left: 10px;
  font-weight: bold;
}

.custom-input {
  height: 113px; /* Adjust the height value as needed */
}

.btn {
  margin-right: 20px;
  width: 180px;
  margin-bottom: 20px;
}
</style>
