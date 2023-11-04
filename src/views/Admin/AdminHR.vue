<template>
  <div>
    <AdminSidebar :iconText="PageTitle"  />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <!-- <h1>ADMIN HR DASHBOARD</h1> -->
      <div class="card">
        <div class="card-header">
          <router-link to="/adminhr/create" class="btn btn-primary float-start" style="background-color: #133F5C;   font-size: 12px; /* Adjust the font size as needed */
  padding: 10px 30px 10px 30px;">
            ADD NEW
          </router-link>

          <button @click="exportToExcel" class="btn btn-primary float-end" style="background-color: Green;   font-size: 12px; /* Adjust the font size as needed */
  padding: 10px 30px 10px 30px;">
           EXPORT DATA
          </button>
        </div>

        <div class="table-content">
          <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <!-- <th>NO</th> -->
                    <th>DIVISION</th>
                    <th>SECTION/UNIT</th>
                    <th>OFFICE_LOCATION</th>
                    <th>ITEM_NUMBER</th>
                    <th>DATE_POSITION</th>
                    <th>POSITION_TITLE</th>
                    <th>PARENTHETICAL_TITLE</th>
                    <th>POSITION_LEVEL</th>
                    <th>SG</th>
                    <th>SALARY_STEP_INCREMENT</th>
                    <th>MONTHLY_RATE</th>
                    <th>DESIGNATION</th>
                    <th>DATE_OF_DESIGNATION</th>
                    <th>SPECIAL_ORDER_NO</th>
                    <th>OFFICE_BUREAU_SERVICE_PROGRAM</th>
                    <th>FUND_SOURCE_FOR_CONTRACTUAL</th>
                    <th>EMPLOYMENT_STATUS</th>
                    <th>STATUS_FILLED_UNFILLED</th>
                    <th>MODE_OF_ACCESSION</th>
                    <th>DATE_FILLED_UP_ASSUMPTION</th>
                    <th>FULL_NAME</th>
                    <th>LASTNAME</th>
                    <th>FIRST_NAME</th>
                    <th>MIDDLE_NAME</th>
                    <th>EXT</th>
                    <th>DATE_OF_ORIGINAL_APPOINTMENT</th>
                    <th>DATE_OF_LAST_PROMOTION</th>
                    <th>ENTRY_DATE_IN_DSWD</th>
                    <th>ELIGIBILITY_CSC_and_other_eligibilities</th>
                    <th>ELIGIBILITY_License_RA_1080</th>
                    <th>LICENSE</th>
                    <th>HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND</th>
                    <th>HIGHEST_EDUCATION_COMPLETED</th>
                    <th>DEGREE_AND_COURSE_1st_Course_Vocational</th>
                    <th>DEGREE_AND_COURSE_2nd_Course</th>
                    <th>OTHER_COURSE/S</th>
                    <th>MASTERS_OR_DOCTORAL_DEGREE(Specify)</th>
                    <th>GENDER</th>
                    <th>DATE_OF_BIRTH</th>
                    <th>AGE</th>
                    <th>CIVIL_STATUS</th>
                    <th>STREET_(Current)</th>
                    <th>PUROK/SUBDIVISION_(Current)</th>
                    <th>BARANGAY_(Current)</th>
                    <th>CITY/MUNICIPALITY_(Current)</th>
                    <th>PROVINCE_(Current)</th>
                    <th>PERMANENT_ADDRESS</th>
                    <th>PERMANENT_ADDRESS_(Street)</th>
                    <th>PERMANENT_ADDRESS(Purok)</th>
                    <th>PERMANENT_ADDRESS_(Subdivision/Community/Village)</th>
                    <th>PERMANENT_ADDRESS_(Barangay)</th>
                    <th>PERMANENT_ADDRESS_(Region)</th>
                    <th>PERMANENT_ADDRESS(City/Municipality)</th>
                    <th>PERMANENT_ADDRESS(Province)</th>
                    <th>INDICATE_WHETHER_SOLO_PARENT</th>
                    <th>INDICATE_WHETHER_SENIOR_CITIZEN</th>
                    <th>INDICATE_WHETHER_PWD</th>
                    <th>TYPE_OF_DISABILITY</th>
                    <th>INDICATE_IF_INDIGINOUS_GROUP</th>
                    <th>ACTIVE_AND_WORKING_EMAIL_ADDRESS</th>
                    <th>FORMER_INCUMBENT</th>
                    <th>MODE_OF_SEPARATION</th>
                    <th>DATE_VACATED</th>
                    <th>REMARKS_STATUS_OF_VACANT_POSITION</th>
                    <th>EMPLOYEE_ID_NO</th>
                    <th>BIR_TIN_NO</th>
                    <th>PHILHEALTH_NUMBER</th>
                    <th>SSS_NUMBER</th>
                    <th>PAG_IBIG_NUMBER</th>
                    <th>GSIS_NUMBER</th>
                    <th>BLOOD_TYPE</th>
                    <th>HIGHEST_LEVEL_OF_ELIGIBILITY(1ST_AND_2ND)</th>
                    <th>HIGHEST_LEVEL__ELIGIBILITY_(1ST_AND_2ND)</th>
                    <th>ELIGIBILITY(CSC_and_other eligibilities)</th>
                    <th class="text-black">Action</th>
                </tr>
            </thead>
              <tbody v-if="this.hr.length > 0">
                  <tr v-for="(item, index) in paginatedData" :key="index" class="row-max-height">
                      <td>{{ item.ID }}</td>
                      <!-- <td>{{ item.NO }}</td> -->
                      <td>{{ item.DIVISION }}</td>
                      <td>{{ item.SECTION_UNIT }}</td>
                      <td>{{ item.OFFICE_LOCATION }}</td>
                      <td>{{ item.ITEM_NUMBER }}</td>
                      <td>{{ item.DATE_POSITION }}</td>
                      <td>{{ item.POSITION_TITLE }}</td>
                      <td>{{ item.PARENTHETICAL_TITLE }}</td>
                      <td>{{ item.POSITION_LEVEL }}</td>
                      <td>{{ item.SG }}</td>
                      <td>{{ item.SALARY_STEP_INCREMENT }}</td>
                      <td>{{ item.MONTHLY_RATE }}</td>
                      <td>{{ item.DESIGNATION }}</td>
                      <td>{{ item.DATE_OF_DESIGNATION }}</td>
                      <td>{{ item.SPECIAL_ORDER_NO }}</td>
                      <td>{{ item.OFFICE_BUREAU_SERVICE_PROGRAM }}</td>
                      <td>{{ item.FUND_SOURCE_FOR_CONTRACTUAL }}</td>
                      <td>{{ item.EMPLOYMENT_STATUS }}</td>
                      <td>{{ item.STATUS_FILLED_UNFILLED }}</td>
                      <td>{{ item.MODE_OF_ACCESSION }}</td>
                      <td>{{ item.DATE_FILLED_UP_ASSUMPTION }}</td>
                      <td>{{ item.FULL_NAME }}</td>
                      <td>{{ item.LASTNAME }}</td>
                      <td>{{ item.FIRST_NAME }}</td>
                      <td>{{ item.MIDDLE_NAME }}</td>
                      <td>{{ item.EXT }}</td>
                      <td>{{ item.DATE_OF_ORIGINAL_APPOINTMENT }}</td>
                      <td>{{ item.DATE_OF_LAST_PROMOTION }}</td>
                      <td>{{ item.ENTRY_DATE_IN_DSWD }}</td>
                      <td>{{ item.ELIGIBILITY_CSC_and_other_eligibilities }}</td>
                      <td>{{ item.ELIGIBILITY_License_RA_1080 }}</td>
                      <td>{{ item.LICENSE }}</td>
                      <td>{{ item.HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND }}</td>
                      <td>{{ item.HIGHEST_EDUCATION_COMPLETED }}</td>
                      <td>{{ item.DEGREE_AND_COURSE_1st_Course_Vocational }}</td>
                      <td>{{ item.DEGREE_AND_COURSE_2nd_Course }}</td>
                      <td>{{ item.OTHER_COURSE_S }}</td>
                      <td>{{ item.MASTERS_OR_DOCTORAL_DEGREE_Specify }}</td>
                      <td>{{ item.GENDER }}</td>
                      <td>{{ item.DATE_OF_BIRTH }}</td>
                      <td>{{ item.AGE }}</td>
                      <td>{{ item.CIVIL_STATUS }}</td>
                      <td>{{ item.STREET_Current }}</td>
                      <td>{{ item.PUROK_SUBDIVISION_Current }}</td>
                      <td>{{ item.BARANGAY_Current }}</td>
                      <td>{{ item.CITY_MUNICIPALITY_Current }}</td>
                      <td>{{ item.PROVINCE_Current }}</td>
                      <td>{{ item.PERMANENT_ADDRESS }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Street }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Purok }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Subdivision_Community_Village }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Barangay }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Region }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_City_Municipality }}</td>
                      <td>{{ item.PERMANENT_ADDRESS_Province }}</td>
                      <td>{{ item.INDICATE_WHETHER_SOLO_PARENT }}</td>
                      <td>{{ item.INDICATE_WHETHER_SENIOR_CITIZEN }}</td>
                      <td>{{ item.INDICATE_WHETHER_PWD }}</td>
                      <td>{{ item.TYPE_OF_DISABILITY }}</td>
                      <td>{{ item.INDICATE_IF_INDIGINOUS_GROUP }}</td>
                      <td>{{ item.ACTIVE_AND_WORKING_EMAIL_ADDRESS }}</td>
                      <td>{{ item.FORMER_INCUMBENT }}</td>
                      <td>{{ item.MODE_OF_SEPARATION }}</td>
                      <td>{{ item.DATE_VACATED }}</td>
                      <td>{{ item.REMARKS_STATUS_OF_VACANT_POSITION }}</td>
                      <td>{{ item.EMPLOYEE_ID_NO }}</td>
                      <td>{{ item.BIR_TIN_NO }}</td>
                      <td>{{ item.PHILHEALTH_NUMBER }}</td>
                      <td>{{ item.SSS_NUMBER }}</td>
                      <td>{{ item.PAG_IBIG_NUMBER }}</td>
                      <td>{{ item.GSIS_NUMBER }}</td>
                      <td>{{ item.BLOOD_TYPE }}</td>
                      <td>{{ item.HIGHEST_ELIGIBILITY }}</td>
                      <td>{{ item.HIGHEST_LEVEL_ELIGIBILITY }}</td>
                      <td>{{ item.ELIGIBILITY }}</td>
                      <td>
                          <router-link :to="{ path: '/adminhr/' + item.ID + '/edit' }" class="btn btn-success col-12 mb-1 mt-3 ">
                              EDIT
                          </router-link>
                          <button type="button" @click="deleteHr(item.ID)" class="btn btn-danger col-12  mb-3">
                              DELETE
                          </button>
                      </td>
                  </tr>
              </tbody>
              <tbody v-else>
                  <tr>
                      <td colspan="45">Loading...</td>
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
    name: 'AdminHR',
    components: {
      Footer,
      AdminSidebar,
      BarChart,
    },
    data() {
      return {
         PageTitle: "ADMIN HR", // The title displayed on the page, which is "ADMIN HR"

        hr: [],
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
        return this.hr.slice(this.startIndex, this.endIndex);
      },
      // Calculate the total number of pages
      totalPageCount() {
        return Math.ceil(this.hr.length / this.itemsPerPage);
      },
    },
    mounted() {
      this.getHr();
    },
    methods: {
       exportToExcel() {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('HRData');

                // Add headers
              const headers = [
                'ID',
                'DIVISION',
                'SECTION/UNIT',
                'OFFICE_LOCATION',
                'ITEM_NUMBER',
                'DATE_POSITION',
                'POSITION_TITLE',
                'PARENTHETICAL_TITLE',
                'POSITION_LEVEL',
                'SG',
                'SALARY_STEP_INCREMENT',
                'MONTHLY_RATE',
                'DESIGNATION',
                'DATE_OF_DESIGNATION',
                'SPECIAL_ORDER_NO.',
                'OFFICE_BUREAU_SERVICE_PROGRAM',
                'FUND_SOURCE_FOR_CONTRACTUAL',
                'EMPLOYMENT_STATUS',
                'STATUS_FILLED_UNFILLED',
                'MODE_OF_ACCESSION',
                'DATE_FILLED_UP_ASSUMPTION',
                'FULL_NAME',
                'LASTNAME',
                'FIRST_NAME',
                'MIDDLE_NAME',
                'EXT.',
                'DATE_OF_ORIGINAL_APPOINTMENT',
                'DATE_OF_LAST_PROMOTION',
                'ENTRY_DATE_IN_DSWD',
                'ELIGIBILITY_CSC_and_other_eligibilities',
                'ELIGIBILITY_License_RA_1080',
                'LICENSE',
                'HIGHEST_LVL_OF_ELIGIBILITY_1ST_AND_2ND',
                'HIGHEST_EDUCATION_COMPLETED',
                'DEGREE_AND_COURSE_1st_Course_Vocational',
                'DEGREE_AND_COURSE_2nd Course',
                'OTHER_COURSE',
                'MASTERS_OR_DOCTORAL_DEGREE',
                'GENDER',
                'DATE_OF_BIRTH',
                'AGE',
                'CIVIL_STATUS',
                'STREET_Current',
                'PUROK/SUBDIVISION_Current',
                'BARANGAY_Current',
                'CITY/MUNICIPALITY_Current',
                'PROVINCE_Current',
                'PERMANENT_ADDRESS',
                'PERMANENT_ADDRESS_Street',
                'PERMANENT_ADDRESS_Purok',
                'PERMANENT_ADDRESS_Subdivision_Community_Village',
                'PERMANENT_ADDRESS_Barangay',
                'PERMANENT_ADDRESS_Region',
                'PERMANENT_ADDRESS_City_Municipality',
                'PERMANENT_ADDRESS_Province',
                'BD',
                'INDICATE_WHETHER_SOLO_PARENT',
                'INDICATE_WHETHER_SENIOR_CITIZEN',
                'INDICATE_WHETHER_PWD',
                'TYPE_OF_DISABILITY',
                'INDICATE_IF_INDIGINOUS_GROUP',
                'ACTIVE_AND_WORKING_EMAIL_ADDRESS',
                'FORMER_INCUMBENT',
                'MODE_OF_SEPARATION',
                'DATE_VACATED',
                'REMARKS_STATUS_OF_VACANT_POSITION',
                'EMPLOYEE_ID_NO',
                'BIR_TIN.NO.',
                'PHILHEALTH_NUMBER',
                'SSS_NUMBER',
                'PAG-IBIG_NUMBER',
                'GSIS_NUMBER',
                'BLOOD_TYPE',
                'HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND',
                'HIGHEST_LEVEL__ELIGIBILITY_1ST_AND_2ND',
                'ELIGIBILITY_CSC_and_other eligibilities'
              ];


                worksheet.addRow(headers);

                // Add data from this.hr
                this.hr.forEach(item => {
                const rowData = [
                  item.ID,
                  item.NO,
                  item.DIVISION,
                  item['SECTION/UNIT'],
                  item.OFFICE_LOCATION,
                  item.ITEM_NUMBER,
                  item.DATE_POSITION,
                  item.POSITION_TITLE,
                  item.PARENTHETICAL_TITLE,
                  item.POSITION_LEVEL,
                  item.SG,
                  item.SALARY_STEP_INCREMENT,
                  item.MONTHLY_RATE,
                  item.DESIGNATION,
                  item.DATE_OF_DESIGNATION,
                  item.SPECIAL_ORDER_NO,
                  item.OFFICE_BUREAU_SERVICE_PROGRAM,
                  item.FUND_SOURCE_FOR_CONTRACTUAL,
                  item.EMPLOYMENT_STATUS,
                  item.STATUS_FILLED_UNFILLED,
                  item.MODE_OF_ACCESSION,
                  item.DATE_FILLED_UP_ASSUMPTION,
                  item.FULL_NAME,
                  item.LASTNAME,
                  item.FIRST_NAME,
                  item.MIDDLE_NAME,
                  item.EXT,
                  item.DATE_OF_ORIGINAL_APPOINTMENT,
                  item.DATE_OF_LAST_PROMOTION,
                  item.ENTRY_DATE_IN_DSWD,
                  item.ELIGIBILITY_CSC_and_other_eligibilities,
                  item.ELIGIBILITY_License_RA_1080,
                  item.LICENSE,
                  item.HIGHEST_LEVEL_OF_ELIGIBILITY_1ST_AND_2ND,
                  item.HIGHEST_EDUCATION_COMPLETED,
                  item['DEGREE_AND_COURSE_1st_Course_Vocational'],
                  item['DEGREE_AND_COURSE_2nd_Course'],
                  item.OTHER_COURSE_S,
                  item['MASTERS_OR_DOCTORAL_DEGREE_Specify'],
                  item.GENDER,
                  item.DATE_OF_BIRTH,
                  item.AGE,
                  item.CIVIL_STATUS,
                  item.STREET_Current,
                  item.PUROK_SUBDIVISION_Current,
                  item.BARANGAY_Current,
                  item.CITY_MUNICIPALITY_Current,
                  item.PROVINCE_Current,
                  item.PERMANENT_ADDRESS,
                  item.PERMANENT_ADDRESS_Street,
                  item.PERMANENT_ADDRESS_Purok,
                  item.PERMANENT_ADDRESS_Subdivision_Community_Village,
                  item.PERMANENT_ADDRESS_Barangay,
                  item.PERMANENT_ADDRESS_Region,
                  item.PERMANENT_ADDRESS_City_Municipality,
                  item.PERMANENT_ADDRESS_Province,
                  item.INDICATE_WHETHER_SOLO_PARENT,
                  item.INDICATE_WHETHER_SENIOR_CITIZEN,
                  item.INDICATE_WHETHER_PWD,
                  item.TYPE_OF_DISABILITY,
                  item.INDICATE_IF_INDIGINOUS_GROUP,
                  item.ACTIVE_AND_WORKING_EMAIL_ADDRESS,
                  item.FORMER_INCUMBENT,
                  item.MODE_OF_SEPARATION,
                  item.DATE_VACATED,
                  item.REMARKS_STATUS_OF_VACANT_POSITION,
                  item.EMPLOYEE_ID_NO,
                  item.BIR_TIN_NO,
                  item.PHILHEALTH_NUMBER,
                  item.SSS_NUMBER,
                  item.PAG_IBIG_NUMBER,
                  item.GSIS_NUMBER,
                  item.BLOOD_TYPE,
                  item.HIGHEST_ELIGIBILITY,
                  item.HIGHEST_LEVEL_ELIGIBILITY,
                  item.ELIGIBILITY
                ];


                  worksheet.addRow(rowData);
                });

                // Create a blob and initiate the download
                workbook.xlsx.writeBuffer().then(buffer => {
                  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'hr_data.xlsx';
                  a.click();
                });
              },
      getHr() {
              axios.get('http://127.0.0.1:8000/api/hrlist').then((res) => {
                this.hr = res.data.Hr;
                console.log(res);
              });
            },

      deleteHr(HrID) {
                  // console.log(HrID);
                    if(confirm('Are you sure, you want to delete this data?')){
                      axios.delete(`http://127.0.0.1:8000/api/hrlist/${HrID}/delete`)
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
    