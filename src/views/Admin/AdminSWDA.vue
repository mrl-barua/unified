<template>
  <div>
    <AdminSidebar :iconText="PageTitle"  />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <!-- <h1>ADMIN SWDA DASHBOARD</h1> -->
      <div class="card">
        <div class="card-header">
          <router-link to="/adminswda/create" class="btn btn-primary float-start" style="background-color: #133F5C;   font-size: 12px; /* Adjust the font size as needed */
  padding: 10px 30px 10px 30px;">
            ADD NEW
          </router-link>

          <button @click="exportToExcel" class="btn btn-primary float-end" style="background-color: Green;   font-size: 12px; /* Adjust the font size as needed */
  padding: 10px 30px 10px 30px;">
           EXPORT DATA
          </button>
        </div>

        <div class="table-content">
          <table class="table table-bordered" >

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
                <th class="text-black">Action</th>
              </tr>
            </thead>
            <tbody v-if="this.swda.length > 0" >
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
                  <router-link :to="{ path: '/adminswda/' + item.ID + '/edit' }" class="btn btn-success col-12 mb-1 mt-3 ">
                    EDIT
                  </router-link>
                  <button type="button" @click="deleteSwda(item.ID)" class="btn btn-danger col-12  mb-3">
                    DELETE
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
      </div>
        <!-- Pagination Start -->
        <div class="text-center mx-auto">
          <nav>
               <ul class="pagination mx-auto">
                    <li class="page-item" :class="{ disabled: currentPage === 1 }">
                        <a class="page-link" @click="currentPage -= 1" aria-label="Previous">
                          <span aria-hidden="true">&laquo; previous</span>
                        </a>
                    </li>
                       <li class="page-item" v-for="page in totalPageCount" :key="page" :class="{ active: currentPage === page }">
                          <a class="page-link" @click="currentPage = page">{{ page }}</a>
                      </li>
                    <li class="page-item" :class="{ disabled: currentPage === totalPageCount }">
                        <a class="page-link" @click="currentPage += 1" aria-label="Next">
                            <span aria-hidden="true">next &raquo;</span>
                        </a>
                    </li>
              </ul>
          </nav>
        </div>
        <!-- Pagination End -->
    </div>
  </div>
</template>



<script>
  import axios from 'axios';
  import Footer from '@/components/Footer';
  import AdminSidebar from '@/components/AdminSidebar';
  import BarChart from '@/components/ChartJS/Barchart';
  import ExcelJS from 'exceljs';


  export default {
    name: 'AdminSWDA',
    components: {
      Footer,
      AdminSidebar,
      BarChart,
    },
    data() {
      return {
         PageTitle: "ADMIN SWDA", // The title displayed on the page, which is "ADMIN SWDA"

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
       exportToExcel() {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('SwdaData');

                // Add headers
                const headers = [
                  'ID', 'Type', 'Sector', 'Cluster', 'Agency', 'Address', 'Former Name', 'Contact Number',
                  'Fax', 'Email', 'Website', 'Contact Person', 'Position', 'Mobile Number', 'Registered',
                  'Licensed', 'Accredited', 'Services Offered', 'Simplified Services', 'Area of Operation',
                  'Regional Operation', 'Specified Areas of Operation', 'Mode of Delivery', 'Clientele',
                  'Registration ID', 'Registration Date', 'Registration Expiration', 'Registration Status',
                  'License ID', 'License Date Issued', 'License Expiration', 'License Status', 'Accreditation ID',
                  'Accreditation Date Issued', 'Accreditation Expiration', 'Accreditation Status', 'Remarks',
                  'License Days Left', 'Licensure Overdue', 'Accreditation Days Left', 'Accreditation Overdue',
                ];

                worksheet.addRow(headers);

                // Add data from this.swda
                this.swda.forEach(item => {
                  const rowData = [
                    item.ID, item.Type, item.Sector, item.Cluster, item.Agency, item.Address, item.Former_Name,
                    item.Contact_Number, item.Fax, item.Email, item.Website, item.Contact_Person, item.Position,
                    item.Mobile_Number, item.Registered, item.Licensed, item.Accredited, item.Services_Offered,
                    item.Simplified_Services, item.Area_of_Operation, item.Regional_Operation,
                    item.Specified_Areas_of_Operation, item.Mode_of_Delivery, item.Clientele, item.Registration_ID,
                    item.Registration_Date, item.Registration_Expiration, item.Registration_Status, item.Licensed_ID,
                    item.License_Date_Issued, item.License_Expiration, item.License_Status, item.Accreditation_ID,
                    item.Accreditation_Date_Issued, item.Accreditation_Expiration, item.Accreditation_Status,
                    item.Remarks, item.License_Days_Left, item.Licensure_Overdue, item.Accreditation_Days_Left,
                    item.Accreditation_Overdue,
                  ];

                  worksheet.addRow(rowData);
                });

                // Create a blob and initiate the download
                workbook.xlsx.writeBuffer().then(buffer => {
                  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'swda_data.xlsx';
                  a.click();
                });
              },
      getSwda() {
              axios.get('http://127.0.0.1:8000/api/swdalist').then((res) => {
                this.swda = res.data.Swda;
                console.log(res);
              });
            },

      deleteSwda(SwdaID) {
                  // console.log(SwdaID);
                    if(confirm('Are you sure, you want to delete this data?')){
                      axios.delete(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/delete`)
                      .then(res => {
                        alert(res.data.message);
                        // Reload the page after a successful deletion
                        window.location.reload();
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
                                    console.log('error', error.message);
                                }
                      });  
                    }
                },
    },
  };
</script>
  
  
<style scoped>

/* Reduce the font size for the table */
.table-content table {
  font-size: 15px; /* Adjust the font size as needed */
  font-weight: bolder;
}

/* Add a max-height to limit the row height */
.row-max-height {
  max-height: 20px; /* Adjust the maximum row height as needed */
  overflow: hidden;
}

/* Add ellipsis for overflowing content */
.row-max-height td {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Optionally, you can reduce the height of the table header cells */
.table-content th {
  padding: 5px 8px; /* Adjust the padding as needed */
  background: #133F5C;
  color: white;
}
/* Optionally, you can reduce the height of the table header cells */
.table-content td {
  padding: 0px 10px 0px 10px; /* Adjust the padding as needed */
  height: 10px;
  justify-content: center;
}

/* Optionally, reduce font size for action buttons */
.table-content .btn {
  font-size: 12px; /* Adjust the font size as needed */
  padding: 10px 30px 10px 30px;
}





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
  width: 100%;
  height: 62vh; /* Set the maximum height for the content */
  overflow-y: scroll;
}

/* Ensure the Action column is not hidden */
.table-content th:last-child,
.table-content td:last-child {
  position: sticky;
  right: 0;
  background-color: white;
  box-shadow: 7px 0 5px -5px rgba(0, 0, 0, 0.9);
}


.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.page-item {
  margin: 0 1px;
  display: inline-block;
 
}

.page-link {
  color: black; /* Text color */
  text-decoration: none;
  padding: 5px 10px;
  background-color: #fff; /* Background color */
  border-radius: 20px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 15px;
  font-weight: 700px;


}

.page-link:hover {
  background-color: red; /* Hover background color */
  color: #fff; /* Hover text color */
}

.page-link.active {
  background-color: #007BFF; /* Active background color */
  color: #fff; /* Active text color */
  cursor: default;
}
.text-black {
  color: black;
}
 </style>
    