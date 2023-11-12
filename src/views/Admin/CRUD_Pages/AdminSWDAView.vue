<template>
  <div>
    <AdminSidebar :iconText="PageTitle" />
    <br /><br /><br /><br />
    <div class="container-fluid wrapper">
      <p>Type: {{ model.Swda.Type }}</p>
      <p>Sector: {{ model.Swda.Sector }}</p>
      <p>Cluster: {{ model.Swda.Cluster }}</p>
      <p>Agency: {{ model.Swda.Agency }}</p>
      <p>Address: {{ model.Swda.Address }}</p>
      <p>Former Name: {{ model.Swda.Former_Name }}</p>
      <p>Contact Number: {{ model.Swda.Contact_Number }}</p>
      <p>Fax: {{ model.Swda.Fax }}</p>
      <p>Email: {{ model.Swda.Email }}</p>
      <p>Website: {{ model.Swda.Website }}</p>
      <p>Contact Person: {{ model.Swda.Contact_Person }}</p>
      <p>Position: {{ model.Swda.Position }}</p>
      <p>Mobile Number: {{ model.Swda.Mobile_Number }}</p>
      <p>Registered: {{ model.Swda.Registered }}</p>
      <p>Licensed: {{ model.Swda.Licensed }}</p>
      <p>Accredited: {{ model.Swda.Accredited }}</p>
      <p>Services Offered: {{ model.Swda.Services_Offered }}</p>
      <p>Simplified Services: {{ model.Swda.Simplified_Services }}</p>
      <p>Area of Operation: {{ model.Swda.Area_of_Operation }}</p>
      <p>Regional Operation: {{ model.Swda.Regional_Operation }}</p>
      <p>
        Specified Areas of Operation:
        {{ model.Swda.Specified_Areas_of_Operation }}
      </p>
      <p>Mode of Delivery: {{ model.Swda.Mode_of_Delivery }}</p>
      <p>Clientele: {{ model.Swda.Clientele }}</p>
      <p>Registration ID: {{ model.Swda.Registration_ID }}</p>
      <p>Registration Date: {{ model.Swda.Registration_Date }}</p>
      <p>Registration Expiration: {{ model.Swda.Registration_Expiration }}</p>
      <p>Registration Status: {{ model.Swda.Registration_Status }}</p>
      <p>Licensed ID: {{ model.Swda.Licensed_ID }}</p>
      <p>License Date Issued: {{ model.Swda.License_Date_Issued }}</p>
      <p>License Expiration: {{ model.Swda.License_Expiration }}</p>
      <p>License Status: {{ model.Swda.License_Status }}</p>
      <p>Accreditation ID: {{ model.Swda.Accreditation_ID }}</p>
      <p>
        Accreditation Date Issued: {{ model.Swda.Accreditation_Date_Issued }}
      </p>
      <p>Accreditation Expiration: {{ model.Swda.Accreditation_Expiration }}</p>
      <p>Accreditation Status: {{ model.Swda.Accreditation_Status }}</p>
      <p>Remarks: {{ model.Swda.Remarks }}</p>
      <p>License Days Left: {{ model.Swda.License_Days_Left }}</p>
      <p>Licensure Overdue: {{ model.Swda.Licensure_Overdue }}</p>
      <p>Accreditation Days Left: {{ model.Swda.Accreditation_Days_Left }}</p>
      <p>Accreditation Overdue: {{ model.Swda.Accreditation_Overdue }}</p>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar";
import axios from "axios"; // Import Axios

export default {
  name: "AdminSWDAView",
  components: {
    AdminSidebar,
  },
  data() {
    return {
      PageTitle: "ADMIN SWDA VIEW",

      model: {
        Swda: {
          Type: "",
          Sector: "",
          Cluster: "",
          Agency: "",
          Address: "",
          Former_Name: "",
          Contact_Number: "",
          Fax: "",
          Email: "",
          Website: "",
          Contact_Person: "",
          Position: "",
          Mobile_Number: "",
          Registered: "",
          Licensed: "",
          Accredited: "",
          Services_Offered: "",
          Simplified_Services: "",
          Area_of_Operation: "",
          Regional_Operation: "",
          Specified_Areas_of_Operation: "",
          Mode_of_Delivery: "",
          Clientele: "",
          Registration_ID: "",
          Registration_Date: "",
          Registration_Expiration: "",
          Registration_Status: "",
          Licensed_ID: "",
          License_Date_Issued: "",
          License_Expiration: "",
          License_Status: "",
          Accreditation_ID: "",
          Accreditation_Date_Issued: "",
          Accreditation_Expiration: "",
          Accreditation_Status: "",
          Remarks: "",
          License_Days_Left: "",
          Licensure_Overdue: "",
          Accreditation_Days_Left: "",
          Accreditation_Overdue: "",
        },
      },
    };
  },
  mounted() {
    this.SwdaID = this.$route.params.ID;
    this.SwdaData(this.SwdaID);
  },
  methods: {
    SwdaData(SwdaID) {
      axios
        .get(`http://127.0.0.1:8000/api/swdalist/${SwdaID}/edit`)
        .then((res) => {
          const swdaData = res.data.Swda;
          console.log(res.data.Swda);

          this.model.Swda.Type = swdaData.Type;
          this.model.Swda.Sector = swdaData.Sector;
          this.model.Swda.Cluster = swdaData.Cluster;
          this.model.Swda.Agency = swdaData.Agency;
          this.model.Swda.Address = swdaData.Address;
          this.model.Swda.Former_Name = swdaData.Former_Name;
          this.model.Swda.Contact_Number = swdaData.Contact_Number;
          this.model.Swda.Fax = swdaData.Fax;
          this.model.Swda.Email = swdaData.Email;
          this.model.Swda.Website = swdaData.Website;
          this.model.Swda.Contact_Person = swdaData.Contact_Person;
          this.model.Swda.Position = swdaData.Position;
          this.model.Swda.Mobile_Number = swdaData.Mobile_Number;
          this.model.Swda.Registered = swdaData.Registered;
          this.model.Swda.Licensed = swdaData.Licensed;
          this.model.Swda.Accredited = swdaData.Accredited;
          this.model.Swda.Services_Offered = swdaData.Services_Offered;
          this.model.Swda.Simplified_Services = swdaData.Simplified_Services;
          this.model.Swda.Area_of_Operation = swdaData.Area_of_Operation;
          this.model.Swda.Regional_Operation = swdaData.Regional_Operation;
          this.model.Swda.Specified_Areas_of_Operation =
            swdaData.Specified_Areas_of_Operation;
          this.model.Swda.Mode_of_Delivery = swdaData.Mode_of_Delivery;
          this.model.Swda.Clientele = swdaData.Clientele;
          this.model.Swda.Registration_ID = swdaData.Registration_ID;
          this.model.Swda.Registration_Date = swdaData.Registration_Date;
          this.model.Swda.Registration_Expiration =
            swdaData.Registration_Expiration;
          this.model.Swda.Registration_Status = swdaData.Registration_Status;
          this.model.Swda.Licensed_ID = swdaData.Licensed_ID;
          this.model.Swda.License_Date_Issued = swdaData.License_Date_Issued;
          this.model.Swda.License_Expiration = swdaData.License_Expiration;
          this.model.Swda.License_Status = swdaData.License_Status;
          this.model.Swda.Accreditation_ID = swdaData.Accreditation_ID;
          this.model.Swda.Accreditation_Date_Issued =
            swdaData.Accreditation_Date_Issued;
          this.model.Swda.Accreditation_Expiration =
            swdaData.Accreditation_Expiration;
          this.model.Swda.Accreditation_Status = swdaData.Accreditation_Status;
          this.model.Swda.Remarks = swdaData.Remarks;
          this.model.Swda.License_Days_Left = swdaData.License_Days_Left;
          this.model.Swda.Licensure_Overdue = swdaData.Licensure_Overdue;
          this.model.Swda.Accreditation_Days_Left =
            swdaData.Accreditation_Days_Left;
          this.model.Swda.Accreditation_Overdue =
            swdaData.Accreditation_Overdue;
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status === 404) {
              alert(error.response.data.message);
            }
          }
        });
    },
  },
};
</script>
