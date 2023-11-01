<template>
  <div>
    <AdminSidebar />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <!-- <h1>ADMIN SWDA DASHBOARD</h1> -->
      <div class="card">
        <div class="card-header">
          <router-link to="/adminswdaCreate" class="btn btn-primary">
            Add New Row
          </router-link>
        </div>

        <div class="table-content">
          <table class="table table-bordered">
              <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Sector</th>
                <th>Cluster</th>
                <th>Agency</th>
                <th>Address</th>
                <th>Former_Name</th>
                <th>Contact_Number</th>
                <th>Fax</th>
                <th>Email</th>
                <th>Website</th>
                <th>Contact_Person</th>
                <th>Position</th>
                <th>Mobile_Number</th>
                <th>Registered</th>
                <th>Licensed</th>
                <th>Accredited</th>
                <th>Services_Offered</th>
                <th>Simplified_Services</th>
                <th>Area_of_Operation</th>
                <th>Regional_Operation</th>
                <th>Specified_Areas_of_Operation</th>
                <th>Mode_of_Delivery</th>
                <th>Clientele</th>
                <th>Registration_ID</th>
                <th>Registration_Date</th>
                <th>Registration_Expiration</th>
                <th>Registration_Status</th>
                <th>License_ID</th>
                <th>License_Date_Issued</th>
                <th>License_Expiration</th>
                <th>License_Status</th>
                <th>Accreditation_ID</th>
                <th>Accreditation_Date_Issued</th>
                <th>Accreditation_Expiration</th>
                <th>Accreditation_Status</th>
                <th>Remarks</th>
                <th>License Days_Left</th>
                <th>Licensure Overdue</th>
                <th>Accreditation Days Left</th>
                <th>Accreditation Overdue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody v-if="this.swda.length > 0">
              <tr v-for="(item, index) in paginatedData" :key="index"  class="row-max-height">
                 <td>{{ item.ID }}</td>
                 <td>{{ item.Type }}</td>
                  <td>{{ item.Sector }}</td>
                  <td>{{ item.Cluster }}</td>
                  <td>{{ item.Agency }}</td>
                  <td>{{ item.Address }}</td>
                  <td>{{ item.Former_Name }}</td>
                  <td>{{ item.Contact_Number }}</td>
                  <td>{{ item.Fax }}</td>
                  <td>{{ item.Email }}</td>
                  <td>{{ item.Website }}</td>
                  <td>{{ item.Contact_Person }}</td>
                  <td>{{ item.Position }}</td>
                  <td>{{ item.Mobile_Number }}</td>
                  <td>{{ item.Registered }}</td>
                  <td>{{ item.Licensed }}</td>
                  <td>{{ item.Accredited }}</td>
                  <td>{{ item.Services_Offered }}</td>
                  <td>{{ item.Simplified_Services }}</td>
                  <td>{{ item.Area_of_Operation }}</td>
                  <td>{{ item.Regional_Operation }}</td>
                  <td>{{ item.Specified_Areas_of_Operation }}</td>
                  <td>{{ item.Mode_of_Delivery }}</td>
                  <td>{{ item.Clientele }}</td>
                  <td>{{ item.Registration_ID }}</td>
                  <td>{{ item.Registration_Date }}</td>
                  <td>{{ item.Registration_Expiration }}</td>
                  <td>{{ item.Registration_Status }}</td>
                  <td>{{ item.Licensed_ID }}</td>
                  <td>{{ item.License_Date_Issued }}</td>
                  <td>{{ item.License_Expiration }}</td>
                  <td>{{ item.License_Status }}</td>
                  <td>{{ item.Accreditation_ID }}</td>
                  <td>{{ item.Accreditation_Date_Issued }}</td>
                  <td>{{ item.Accreditation_Expiration }}</td>
                  <td>{{ item.Accreditation_Status }}</td>
                  <td>{{ item.Remarks }}</td>
                  <td>{{ item.License_Days_Left }}</td>
                  <td>{{ item.Licensure_Overdue }}</td>
                  <td>{{ item.Accreditation_Days_Left }}</td>
                  <td>{{ item.Accreditation_Overdue }}</td>

                <td>
                  <router-link to="/" class="btn btn-success">
                    Edit
                  </router-link>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          <tbody v-else>
            <tr>
              <td colspan="38">Loading...</td>
            </tr>
          </tbody>

          </table>
        </div>
        
        <!-- Pagination -->
        <div class="text-center mx-auto">
          <nav>
               <ul class="pagination mx-auto">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" @click="currentPage -= 1" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in totalPageCount" :key="page" :class="{ active: currentPage === page }">
        <a class="page-link" @click="currentPage = page">{{ page }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPageCount }">
        <a class="page-link" @click="currentPage += 1" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import axios from 'axios';
  import Footer from '@/components/Footer';
  import AdminSidebar from '@/components/AdminSidebar';
  import BarChart from '@/components/ChartJS/Barchart';

  export default {
    name: 'AdminSWDA',
    components: {
      Footer,
      AdminSidebar,
      BarChart,
    },
    data() {
      return {
        swda: [],
        currentPage: 1,
        itemsPerPage: 10,
      };
    },
    computed: {
      // Calculate the start and end index for the current page
      startIndex() {
        return (this.currentPage - 1) * this.itemsPerPage;
      },
      endIndex() {
        return this.currentPage * this.itemsPerPage;
      },
      // Slice the data array for the current page
      paginatedData() {
        return this.swda.slice(this.startIndex, this.endIndex);
      },
      // Calculate the total number of pages
      totalPageCount() {
        return Math.ceil(this.swda.length / this.itemsPerPage);
      },
    },
    mounted() {
      this.getSwda();
    },
    methods: {
      getSwda() {
        axios.get('http://127.0.0.1:8000/api/swdalist').then((res) => {
          this.swda = res.data.Swda;
          console.log(res);
        });
      },
    },
  };
</script>
  
  
<style scoped>
.row-max-height {
  max-height: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.table-container {
  max-height: 400px; /* Set the maximum height for the header cells */
  overflow-y: scroll;
}

.table-content {
  height: 70vh; /* Set the maximum height for the content */
  overflow-y: scroll;
}

/* Ensure the Action column is not hidden */
.table-content th:last-child,
.table-content td:last-child {
  position: sticky;
  right: 0;
  background-color: white;
  box-shadow: 7px 0 5px -5px rgba(0, 0, 0, 0.1);
}
 </style>
    