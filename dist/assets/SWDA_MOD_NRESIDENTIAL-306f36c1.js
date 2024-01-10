import{_ as w,P as m,D as R,S as E,a as A,b as S,r as x,o as u,c as _,d as c,e,k as I,v as k,g as D,h as y,w as d,f as L,j as J,m as N,t as o,p as T,i as W}from"./index-6fcab6bb.js";m.use(R);const M={name:"SWDA_ACTIVE_LICENSED",components:{Sidebar:E,DataTable:m},data(){return{PageTitle:"List of Registration, Licensing, and Accreditation of Social Welfare and Development Agencies (SWDA)",PageDetail:"Center-Based Non-Residential Mode of Delivery",swda:[],agencies:[],searchQuery:"",activeRegisteredCount:0,activeLicensedCount:0,activeAccreditedCount:0,expiredRegisteredCount:0,expiredLicensedCount:0,expiredAccreditedCount:0,expiredDelistedCount:0,communityBasedCount:0,auxillarySWDACount:0,residentialCount:0,nonResidentialCount:0}},created(){A.get(`${S}/api/agenciesName`).then(s=>{this.agencies=s.data["Swda Agencies"]}).catch(s=>{console.error("Error fetching data:",s)})},computed:{filteredAgencies(){return this.agencies.filter(s=>s&&s.Agency?s.Agency.toLowerCase().includes(this.searchQuery.toLowerCase()):!1)}},methods:{async AgencyFetchData(){try{const s=await A.get(`${S}/api/agencies`);let r=0,g=0,v=0,i=0,f=0,h=0,n=0,p=0,t=0,b=0,C=0;s.data.forEach(a=>{a.Registration_Status==="Active/Valid"?(a.Registered==="Yes"&&r++,a.Licensed==="Yes"&&g++,a.Accredited==="Yes"&&v++):a.Registration_Status==="Expired"&&(a.Registered==="No"&&i++,a.Licensed==="No"&&f++,a.Accredited==="No"&&h++,a.Delisted==="No"&&n++),typeof a.Mode_of_Delivery=="string"&&a.Mode_of_Delivery.split(", ").forEach(O=>{switch(O){case"Community-based":p++;break;case"Auxiliary SWDA":t++;break;case"Center-based Residential":b++;break;case"Center-based Non-Residential":C++;break}})}),this.activeRegisteredCount=r,this.activeLicensedCount=g,this.activeAccreditedCount=v,this.expiredRegisteredCount=i,this.expiredLicensedCount=f,this.expiredAccreditedCount=h,this.expiredDelistedCount=n,this.communityBasedCount=p,this.auxillarySWDACount=t,this.residentialCount=b,this.nonResidentialCount=C}catch(s){console.error("Error fetching data:",s)}},async getSwda(){try{const s=await A.get(`${S}/api/swdalist`);this.swda=s.data.Swda.filter(r=>r.Mode_of_Delivery&&r.Mode_of_Delivery.includes("Center-based Non-Residential"))}catch(s){console.error("Error fetching SWDA list:",s)}}},mounted(){this.AgencyFetchData(),this.getSwda()}},l=s=>(T("data-v-1efbbf4f"),s=s(),W(),s),B=l(()=>e("br",null,null,-1)),V=l(()=>e("br",null,null,-1)),P=l(()=>e("br",null,null,-1)),Y=l(()=>e("br",null,null,-1)),F={class:"wrapper container-fluid"},Q={class:"col-12 col-md-3"},G={class:"agenciesNames",style:{"background-color":"white"}},U=l(()=>e("p",{style:{"font-family":"Arial","font-size":"25px","font-weight":"700","line-height":"30px","letter-spacing":"0em","text-align":"center"}}," AGENCY ",-1)),j={class:"agencyfilter"},q={class:"agency-color"},z={class:"hover"},H=l(()=>e("hr",{class:"hr"},null,-1)),X={class:"col-12 col-md-9"},K={class:"agencies col-12 col-md-6 col-lg-3"},Z={class:"shadow-agencies"},$=l(()=>e("h4",{class:"headerAgencies"},"ACTIVE AGENCIES",-1)),ee=l(()=>e("p",{class:"col-4 textAgencies"},"Registered",-1)),te=l(()=>e("p",{class:"col-4 textAgencies"},"Licensed",-1)),se=l(()=>e("p",{class:"col-4 textAgencies"},"Accredited",-1)),ie={class:"col-4"},oe={id:"active-registered",class:"active-agencies"},ne={class:"col-4"},ce={id:"active-licensed",class:"active-agencies"},de={class:"col-4"},le={id:"active-accredited",class:"active-agencies"},ae={class:"agencies col-12 col-md-6 col-lg-4"},re={class:"shadow-agencies"},ue=N('<h4 class="headerAgencies" data-v-1efbbf4f>EXPIRED AGENCIES</h4><p class="col-3 textAgencies" data-v-1efbbf4f>Registered</p><p class="col-3 textAgencies" data-v-1efbbf4f>Licensed</p><p class="col-3 textAgencies" data-v-1efbbf4f>Accreditation</p><p class="col-3 textAgencies" data-v-1efbbf4f>Delisted</p>',5),_e={class:"col-3"},fe={id:"expired-registered",class:"expired-agencies"},he={class:"col-3"},pe={id:"expired-licensed",class:"expired-agencies"},ge={class:"col-3"},ve={id:"expired-accreditation",class:"expired-agencies"},Ae={class:"col-3"},Se={id:"expired-delisted",class:"expired-agencies"},xe={class:"agencies col-12 col-md-12 col-lg-5"},De={class:"shadow-agencies"},be=N('<h4 class="headerAgencies" data-v-1efbbf4f>MODE OF DELIVERY</h4><p class="col-3 textAgencies" data-v-1efbbf4f>Community</p><p class="col-3 textAgencies" data-v-1efbbf4f>Auxillary SWDA</p><p class="col-3 textAgencies" data-v-1efbbf4f>Residential</p><p class="col-3 textAgencies" data-v-1efbbf4f>Non-Residential</p>',5),Ce={class:"col-3"},ye={id:"community-based",class:"modeDelivery"},me={class:"col-3"},Ne={id:"auxillary",class:"modeDelivery"},Oe={class:"col-3"},we={id:"residential",class:"modeDelivery"},Re={class:"col-3"},Ee={id:"non-residential",class:"modeDelivery"},Ie={class:"tableOutside col-12"},ke=l(()=>e("div",{class:"tableHeading"},[e("p",null,"CENTER-BASED NON-RESIDENTIAL MODE OF DELIVERY")],-1)),Le={class:"tableInside"},Je=l(()=>e("thead",{style:{background:"#133f5c"},class:"text-white"},[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1)),Te=l(()=>e("i",{class:"bx bx-low-vision table-icon custom-link"},null,-1)),We=l(()=>e("tfoot",null,[e("tr",null,[e("th",null,"ID"),e("th",null,"Type"),e("th",null,"Sector"),e("th",null,"Cluster"),e("th",null,"Agency"),e("th",null,"Address"),e("th",null,"Actions")])],-1));function Me(s,r,g,v,i,f){const h=x("Sidebar"),n=x("router-link"),p=x("DataTable");return u(),_(D,null,[c(h,{iconText:i.PageTitle,iconDetails:i.PageDetail},null,8,["iconText","iconDetails"]),B,V,P,Y,e("div",F,[e("div",Q,[e("div",G,[U,I(e("input",{style:{"border-radius":"10px",width:"90%",height:"3em","text-align":"center"},type:"text","onUpdate:modelValue":r[0]||(r[0]=t=>i.searchQuery=t),placeholder:"Search for agency names"},null,512),[[k,i.searchQuery]]),e("div",j,[e("table",null,[e("tbody",null,[(u(!0),_(D,null,y(f.filteredAgencies,t=>(u(),_("tr",{key:t.Agency},[e("td",q,[c(n,{to:{name:"swda_agency",query:{agencyName:JSON.stringify(t.Agency),registrationStatus:JSON.stringify(t.Registration_Status),licenseStatus:JSON.stringify(t.License_Status),accreditationStatus:JSON.stringify(t.Accreditation_Status),sector:JSON.stringify(t.Sector),cluster:JSON.stringify(t.Cluster),type:JSON.stringify(t.Type),address:JSON.stringify(t.Address),contactNumber:JSON.stringify(t.Contact_Number),email:JSON.stringify(t.Email),website:JSON.stringify(t.Website),contactPerson:JSON.stringify(t.Contact_Person),position:JSON.stringify(t.Position),mobileNumber:JSON.stringify(t.Mobile_Number),servicesOffered:JSON.stringify(t.Services_Offered),clientele:JSON.stringify(t.Clientele),modeOfDelivery:JSON.stringify(t.Mode_of_Delivery),specifiedAreasOfOperation:JSON.stringify(t.Specified_Areas_of_Operation),registrationID:JSON.stringify(t.Registration_ID),registrationDate:JSON.stringify(t.Registration_Date),registrationExpiration:JSON.stringify(t.Registration_Expiration),remarks:JSON.stringify(t.Remarks),licensedID:JSON.stringify(t.Licensed_ID),licenseDateIssued:JSON.stringify(t.License_Date_Issued),licenseExpiration:JSON.stringify(t.License_Expiration),licensureOverdue:JSON.stringify(t.Licensure_Overdue),accreditationID:JSON.stringify(t.Accreditation_ID),accreditationDateIssued:JSON.stringify(t.Accreditation_Date_Issued),accreditationExpiration:JSON.stringify(t.Accreditation_Expiration),accreditationOverdue:JSON.stringify(t.Accreditation_Overdue)}},class:"custom-link text-color"},{default:d(()=>[e("div",z,o(t.Agency),1)]),_:2},1032,["to"]),H])]))),128))])])])])]),e("div",X,[e("div",K,[e("div",Z,[$,ee,te,se,e("div",ie,[c(n,{to:"/swda/activeRegistered",class:"custom-link"},{default:d(()=>[e("span",oe,o(i.activeRegisteredCount),1)]),_:1})]),e("div",ne,[c(n,{to:"/swda/activeLicensed",class:"custom-link"},{default:d(()=>[e("span",ce,o(i.activeLicensedCount),1)]),_:1})]),e("div",de,[c(n,{to:"/swda/activeAccredited",class:"custom-link"},{default:d(()=>[e("span",le,o(i.activeAccreditedCount),1)]),_:1})])])]),e("div",ae,[e("div",re,[ue,e("div",_e,[c(n,{to:"/swda/expiredRegistered",class:"custom-link"},{default:d(()=>[e("span",fe,o(i.expiredRegisteredCount),1)]),_:1})]),e("div",he,[c(n,{to:"/swda/expiredLicensed",class:"custom-link"},{default:d(()=>[e("span",pe,o(i.expiredLicensedCount),1)]),_:1})]),e("div",ge,[c(n,{to:"/swda/expiredAccredited",class:"custom-link"},{default:d(()=>[e("span",ve,o(i.expiredAccreditedCount),1)]),_:1})]),e("div",Ae,[c(n,{to:"/swda/expiredDelisted",class:"custom-link"},{default:d(()=>[e("span",Se,o(i.expiredDelistedCount),1)]),_:1})])])]),e("div",xe,[e("div",De,[be,e("div",Ce,[c(n,{to:"/swda/modCombased",class:"custom-link"},{default:d(()=>[e("span",ye,o(i.communityBasedCount),1)]),_:1})]),e("div",me,[c(n,{to:"/swda/modAuxillary",class:"custom-link"},{default:d(()=>[e("span",Ne,o(i.auxillarySWDACount),1)]),_:1})]),e("div",Oe,[c(n,{to:"/swda/modResidential",class:"custom-link"},{default:d(()=>[e("span",we,o(i.residentialCount),1)]),_:1})]),e("div",Re,[c(n,{to:"/swda/modNResidential",class:"custom-link"},{default:d(()=>[e("span",Ee,o(i.nonResidentialCount),1)]),_:1})])])]),e("div",Ie,[ke,e("div",Le,[this.swda.length>0?(u(),L(p,{key:0,style:{width:"100%"},class:"display stripe order-column cell-border hover compact",id:"swdaTable"},{default:d(()=>[Je,e("tbody",null,[(u(!0),_(D,null,y(i.swda,t=>(u(),_("tr",{key:t.ID},[e("td",null,o(t.ID),1),e("td",null,o(t.Type),1),e("td",null,o(t.Sector),1),e("td",null,o(t.Cluster),1),e("td",null,o(t.Agency),1),e("td",null,o(t.Address),1),e("td",null,[c(n,{to:{path:"/swda/"+t.ID+"/view"},class:"custom-link"},{default:d(()=>[Te]),_:2},1032,["to"])])]))),128))]),We]),_:1})):J("",!0)])])])])],64)}const Pe=w(M,[["render",Me],["__scopeId","data-v-1efbbf4f"]]);export{Pe as default};