<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" :iconDetails="PageDetail" />
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
              <input
                type="text"
                v-model="model.Hr.employment_status"
                class="form-control centered-placeholder"
                id="employmentStatus"
                required
                placeholder="Employee Status"
              />
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
        </section>
        <!-- 2ND SECTION -->
        <section class="col-6">
          <div class="col-12">
            <div class="form-floating spaceBetween">
              <input
                type="text"
                v-model="model.Hr.request_category"
                class="form-control centered-placeholder"
                id="requestCategory"
                required
                placeholder="Request Category"
              />
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
              <input
                type="text"
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
import { backendURL } from "@/config.js";
export default {
  name: "AdminHREdit",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "EMPLOYEE WELFARE AND RELATIONS",
      PageDetail: "Edit Current Record",
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
  },
  methods: {
    // The HrData() function is used to get the data of the HR with the given ID
    HrData(HrID) {
      axios
        .get(`${backendURL}/api/hrlist/${HrID}/edit`)
        .then((res) => {
          const hrData = res.data.Hr;
          console.log(res.data.Hr);

          // Check if hrData is null or empty
          this.model.Hr.request_date = hrData.request_date;
          this.model.Hr.requesting_employee_name =
            hrData.requesting_employee_name;
          this.model.Hr.employee_position = hrData.employee_position;
          this.model.Hr.employment_status = hrData.employment_status;
          this.model.Hr.office_unit = hrData.office_unit;
          this.model.Hr.request_category = hrData.request_category;
          this.model.Hr.brief_interview = hrData.brief_interview;
          this.model.Hr.remarks = hrData.remarks;
          this.model.Hr.assistance_provided = hrData.assistance_provided;
          this.model.Hr.quantity_unit = hrData.quantity_unit;
          this.model.Hr.date_received = hrData.date_received;
        })
        // If the HR with the given ID is not found, an error message will be displayed
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
    // The updateHR() function is used to update the data of the HR with the given ID in the database using the backend API endpoint for updating HR data
    updateHR(HrID) {
      var mythis = this;
      axios
        .put(
          `${backendURL}/api/hrlist/${HrID}/edit`,
          // The data to be updated is passed as a parameter to the axios.put() function
          // as the second parameter (the first parameter is the API endpoint) in the form of
          // an object with the following properties: Hr (which contains the data to be updated)
          // and _method (which is set to "PUT" to indicate that the data will be updated)
          this.model.Hr
        )
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          })
            .then(() => {
              return this.$router.push("/adminhr");
            })
            .then(() => {
              window.location.reload();
            });
          this.errorList = "";

          // window.location.reload(); // reload the page after updating the data
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("error", error.message);
          }
        });
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
