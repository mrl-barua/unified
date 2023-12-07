<template>
  <br /><br /><br /><br />
  <AdminSidebar :iconText="PageTitle" />
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
        <div class="col-6">
          <div class="col-12"></div>
          <div class="col-12">
            <div class="spaceBetween">
              <label for="agency">Request Date</label>
              <input
                type="date"
                v-model="model.Hr.request_date"
                class="form-control centered-placeholder"
                id="agency"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="spaceBetween">
              <label for="agency">Requesting Employee</label>
              <input
                type="text"
                v-model="model.Hr.requesting_employee_name"
                class="form-control centered-placeholder"
                id="agency"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="spaceBetween">
              <label for="agency">Employee Position</label>
              <input
                type="text"
                v-model="model.Hr.employee_position"
                class="form-control centered-placeholder"
                id="agency"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="spaceBetween">
              <label for="agency">Employee Status</label>
              <input
                type="text"
                v-model="model.Hr.employment_status"
                class="form-control centered-placeholder"
                id="agency"
                required
              />
            </div>
          </div>
          <div class="col-12">
            <div class="spaceBetween">
              <label for="agency">Office/Unit</label>
              <input
                type="text"
                v-model="model.Hr.office_unit"
                class="form-control centered-placeholder"
                id="agency"
                required
              />
            </div>
          </div>
        </div>
        <!-- 2ND SECTION -->
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Request Category</label>
            <input
              type="text"
              v-model="model.Hr.request_category"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Brief Interview</label>
            <input
              type="text"
              v-model="model.Hr.brief_interview"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Remarks</label>
            <input
              type="text"
              v-model="model.Hr.remarks"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Assistance Provided</label>
            <input
              type="text"
              v-model="model.Hr.assistance_provided"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Quantity/Unit</label>
            <input
              type="text"
              v-model="model.Hr.quantity_unit"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6">
          <div class="spaceBetween">
            <label for="agency">Date Received</label>
            <input
              type="date"
              v-model="model.Hr.date_received"
              class="form-control centered-placeholder"
              id="agency"
              required
            />
          </div>
        </div>
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>

      <div class="md-3 col-12 buttons d-flex justify-content-end">
        <router-link to="/adminhr">
          <button class="btn btn-secondary">CANCEL</button>
        </router-link>
        <router-link to="/adminhr">
          <button @click="saveHr" class="btn btn-primary col-12">Save</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import AdminSidebar from "@/components/AdminSidebar";
import { format, parse } from "date-fns";
export default {
  name: "AdminHRCreate",

  components: {
    AdminSidebar,
  },

  data() {
    return {
      PageTitle: "ADMIN HR > ADD",

      errorList: "",

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

  methods: {
    formatDate(dateString) {
      const parsedDate = parse(dateString, "yyyy-MM-dd", new Date());
      if (isNaN(parsedDate)) {
        throw new Error(`Invalid date: ${dateString}`);
      }
      return format(parsedDate, "MMMM dd, yyyy");
    },
    saveHr() {
      var mythis = this;
      if (!this.model.Hr.request_date || !this.model.Hr.date_received) {
        throw new Error("Request date and date received are required");
      }

      var hrCopy = Object.assign({}, this.model.Hr);

      hrCopy.request_date = this.formatDate(this.model.Hr.request_date);
      hrCopy.date_received = this.formatDate(this.model.Hr.date_received);
      // this.model.Hr.request_date = this.formatDate(this.model.Hr.request_date);
      axios
        .post("http://127.0.0.1:8000/api/hrlist", hrCopy)
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          // this.$swal(res.data.message);
          this.$swal({
            icon: "success",
            title: "Success!",
            text: res.data.message,
          })
            .then(() => {
              this.$router.push("/adminhr");
              // window.location.reload();
            })
            .then(() => {
              window.location.reload();
            });

          this.model.Hr = {
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
          };

          // window.location.reload(); // RELOAD THE PAGE TO REMOVE THE ERRORS
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 422) {
              mythis.errorList = error.response.data.errors;
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
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
  margin: 0px 10px 0px 10px;
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
