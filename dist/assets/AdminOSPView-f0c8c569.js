import{_ as l,A as r,a as h,b as p,r as m,o,c as t,d as O,e,t as d,p as y,i as C}from"./index-6fcab6bb.js";const T={name:"AdminHRView",components:{AdminSidebar:r},data(){return{PageTitle:"OPERATIONAL STAFF DATABASE",PageDetail:"View Details",OsdID:"",errorList:"",model:{Osd:{id:"",division:"",section_unit:"",office_location_official_station:"",item_number:"",date_position_created:"",position_title:"",parenthetical_title:"",position_level:"",sg:"",salary_step_increment:"",monthly_rate:"",designation_as_appropriate_based_on_so:"",date_of_designation:"",special_order_no:"",office_bureau_service_program:"",fund_source_for_contractual:"",employment_status:"",status_filled_unfilled:"",mode_of_accession_for_appointment_based_positions:"",date_filled_up_assumption:"",fullname:"",lastname:"",firstname:"",middlename:"",ext:"",date_of_original_appointment:"",date_of_last_promotion:"",entry_date_in_dswd:"",eligibility_csc_and_other_eligibilities:"",eligibility_license_ra_1080:"",license_ra_1080_let_rn_rs_etc:"",highest_level_of_eligibility:"",highest_education_completed:"",degree_and_course_1st_vocational:"",degree_and_course_2nd_course:"",other_courses:"",masters_or_doctoral_degree_specify:"",gender:"",date_of_birth:"",age:"",civil_status:"",residential_address:"",permanent_address:"",indicate_whether_solo_parent:"",indicate_whether_senior_citizen:"",indicate_whether_pwd:"",type_of_disability:"",indicate_whether_member_of_indigenous_group:"",indigenous_group:"",citizenship:"",active_contact_numbers:"",active_and_working_email_address:"",former_incumbent:"",mode_of_separation:"",date_vacated:"",remarks_status_of_vacant_position:"",employee_id_number:"",bir_tin_number:"",philhealth_number:"",sss_number:"",pagibig_number:"",gsis_number:"",blood_type:""}}}},mounted(){this.OsdID=this.$route.params.ID,this.OsdData(this.$route.params.ID)},methods:{async OsdData(n){try{const i=(await h.get(`${p}/api/osdlist/${n}/edit`)).data.Osd;console.log(i),i&&(this.model.Osd={...i})}catch(c){c.response&&c.response.status===404&&alert(c.response.data.message)}}}},_=n=>(y("data-v-c0faa7a9"),n=n(),C(),n),u=_(()=>e("br",null,null,-1)),k=_(()=>e("br",null,null,-1)),N=_(()=>e("br",null,null,-1)),v=_(()=>e("br",null,null,-1)),D=_(()=>e("br",null,null,-1)),E={class:"container-fluid wrapper"},f={class:"col-12"},I=_(()=>e("p",{class:"head text-center"},"DIVISION",-1)),b={class:"headContent text-center"},g=_(()=>e("p",{class:"head text-center"},"FULL NAME",-1)),A={class:"headContent text-center"},x=_(()=>e("hr",{class:"hr pb-4"},null,-1)),S={class:"col-5 first-row"},R={class:"col-12"},L={class:"col-6"},P=_(()=>e("p",{class:"headerText"},"ID",-1)),w={key:0,class:"headerContent"},F={key:1,class:"error headerContent"},M={class:"col-6"},U=_(()=>e("p",{class:"headerText"},"Section/Unit",-1)),G={key:0,class:"headerContent"},B={key:1,class:"error headerContent"},H={class:"col-12"},V={class:"col-6"},Y=_(()=>e("p",{class:"headerText"},"ITEM NUMBER",-1)),z={key:0,class:"headerContent"},W={key:1,class:"error headerContent"},K={class:"col-6"},X=_(()=>e("p",{class:"headerText"},"OFFICE LOCATION",-1)),Z={key:0,class:"headerContent"},j={key:1,class:"error headerContent"},q={class:"col-12"},J={class:"col-6"},Q=_(()=>e("p",{class:"headerText"},"DATE POSITION",-1)),$={key:0,class:"headerContent"},ee={key:1,class:"error headerContent"},se={class:"col-6"},oe=_(()=>e("p",{class:"headerText"},"POSITION LEVEL",-1)),te={key:0,class:"headerContent"},_e={key:1,class:"error headerContent"},de={class:"col-12"},ne=_(()=>e("p",{class:"headerText"},"POSITION TITLE",-1)),ce={key:0,class:"headerContent"},ie={key:1,class:"error headerContent"},ae={class:"col-12"},le=_(()=>e("p",{class:"headerText"},"PARENTHETICAL TITLE",-1)),re={key:0,class:"headerContent"},he={key:1,class:"error headerContent"},pe={class:"col-12"},me={class:"col-6"},Oe=_(()=>e("p",{class:"headerText"},"SALARY STEP INCREMENT",-1)),ye={key:0,class:"headerContent"},Ce={key:1,class:"error headerContent"},Te={class:"col-6"},ue=_(()=>e("p",{class:"headerText"},"MONTHY RATE",-1)),ke={key:0,class:"headerContent"},Ne={key:1,class:"error headerContent"},ve={class:"col-12"},De=_(()=>e("p",{class:"headerText"},"DESIGNATION",-1)),Ee={key:0,class:"headerContent"},fe={key:1,class:"error headerContent"},Ie={class:"col-12"},be={class:"col-6"},ge=_(()=>e("p",{class:"headerText"},"DATE OF DESIGNATION",-1)),Ae={key:0,class:"headerContent"},xe={key:1,class:"error headerContent"},Se={class:"col-6"},Re=_(()=>e("p",{class:"headerText"},"SPECIAL ORDER NO.",-1)),Le={key:0,class:"headerContent"},Pe={key:1,class:"error headerContent"},we={class:"col-12"},Fe=_(()=>e("p",{class:"headerText"},"DATE FILLED UP ASSUMPTION",-1)),Me={key:0,class:"headerContent"},Ue={key:1,class:"error headerContent"},Ge={class:"col-12"},Be=_(()=>e("p",{class:"headerText"},"OFFICE/BUREAU/SERVICE/PROGRAM",-1)),He={key:0,class:"headerContent"},Ve={key:1,class:"error headerContent"},Ye={class:"col-12"},ze=_(()=>e("p",{class:"headerText"},"FUND SOURCE FOR CONTRACTUAL",-1)),We={key:0,class:"headerContent"},Ke={key:1,class:"error headerContent"},Xe={class:"col-12"},Ze={class:"col-6"},je=_(()=>e("p",{class:"headerText"},"MODEL OF ACCESSION",-1)),qe={key:0,class:"headerContent"},Je={key:1,class:"error headerContent"},Qe={class:"col-6"},$e=_(()=>e("p",{class:"headerText"},"MODEL OF SEPARTION",-1)),es={key:0,class:"headerContent"},ss={key:1,class:"error headerContent"},os={class:"col-7 second-row"},ts={class:"col-12"},_s={class:"col-3"},ds=_(()=>e("p",{class:"headerText"},"LAST NAME",-1)),ns={key:0,class:"headerContent"},cs={key:1,class:"error headerContent"},is={class:"col-3"},as=_(()=>e("p",{class:"headerText"},"FIRST NAME",-1)),ls={key:0,class:"headerContent"},rs={key:1,class:"error headerContent"},hs={class:"col-3"},ps=_(()=>e("p",{class:"headerText"},"MIDDLE NAME",-1)),ms={key:0,class:"headerContent"},Os={key:1,class:"error headerContent"},ys={class:"col-3"},Cs=_(()=>e("p",{class:"headerText"},"EXT.",-1)),Ts={key:0,class:"headerContent"},us={key:1,class:"error headerContent"},ks={class:"col-12"},Ns={class:"col-3"},vs=_(()=>e("p",{class:"headerText"},"AGE",-1)),Ds={key:0,class:"headerContent"},Es={key:1,class:"error headerContent"},fs={class:"col-3"},Is=_(()=>e("p",{class:"headerText"},"GENDER",-1)),bs={key:0,class:"headerContent"},gs={key:1,class:"error headerContent"},As={class:"col-3"},xs=_(()=>e("p",{class:"headerText"},"CIVIL STATUS",-1)),Ss={key:0,class:"headerContent"},Rs={key:1,class:"error headerContent"},Ls={class:"col-3"},Ps=_(()=>e("p",{class:"headerText"},"DATE OF BIRTH",-1)),ws={key:0,class:"headerContent"},Fs={key:1,class:"error headerContent"},Ms={class:"col-12"},Us=_(()=>e("p",{class:"headerText"},"EMAIL ADDRESS",-1)),Gs={key:0,class:"headerContent"},Bs={key:1,class:"error headerContent"},Hs={class:"col-12"},Vs={class:"col-6"},Ys=_(()=>e("p",{class:"headerText"},"INDICATE WHETHER SENIOR CITIZEN",-1)),zs={key:0,class:"headerContent"},Ws={key:1,class:"error headerContent"},Ks={class:"col-6"},Xs=_(()=>e("p",{class:"headerText"},"TYPE OF DISABILITY",-1)),Zs={key:0,class:"headerContent"},js={key:1,class:"error headerContent"},qs={class:"col-12"},Js=_(()=>e("p",{class:"headerText"},"INDICATE IF BELONG INDIGENEOUS GROUP",-1)),Qs={key:0,class:"headerContent"},$s={key:1,class:"error headerContent"},eo=_(()=>e("hr",{class:"hr"},null,-1)),so={class:"col-12"},oo={class:"col-6"},to=_(()=>e("p",{class:"headerText"},"EMPLOYEE ID NO.",-1)),_o={key:0,class:"headerContent"},no={key:1,class:"error headerContent"},co={class:"col-6"},io=_(()=>e("p",{class:"headerText"},"ENTRY DATE IN DSWD",-1)),ao={key:0,class:"headerContent"},lo={key:1,class:"error headerContent"},ro={class:"col-12"},ho={class:"col-6"},po=_(()=>e("p",{class:"headerText"},"DATE OF ORIGINAL APPOINTMENT",-1)),mo={key:0,class:"headerContent"},Oo={key:1,class:"error headerContent"},yo={class:"col-6"},Co=_(()=>e("p",{class:"headerText"},"DATE OF LAST PROMOTION",-1)),To={key:0,class:"headerContent"},uo={key:1,class:"error headerContent"},ko={class:"col-12"},No={class:"col-6"},vo=_(()=>e("p",{class:"headerText"},"GSIS NO.",-1)),Do={key:0,class:"headerContent"},Eo={key:1,class:"error headerContent"},fo={class:"col-6"},Io=_(()=>e("p",{class:"headerText"},"BIR TIN NO.",-1)),bo={key:0,class:"headerContent"},go={key:1,class:"error headerContent"},Ao={class:"col-12"},xo={class:"col-6"},So=_(()=>e("p",{class:"headerText"},"SSS NO.",-1)),Ro={key:0,class:"headerContent"},Lo={key:1,class:"error headerContent"},Po={class:"col-6"},wo=_(()=>e("p",{class:"headerText"},"PHILHEALTH NO.",-1)),Fo={key:0,class:"headerContent"},Mo={key:1,class:"error headerContent"},Uo={class:"col-12"},Go={class:"col-6"},Bo=_(()=>e("p",{class:"headerText"},"ELIGIBILITY CSC AND OTHERS",-1)),Ho={key:0,class:"headerContent"},Vo={key:1,class:"error headerContent"},Yo={class:"col-6"},zo=_(()=>e("p",{class:"headerText"},"ELIGIBILITY LICENSE RA 1080",-1)),Wo={key:0,class:"headerContent"},Ko={key:1,class:"error headerContent"},Xo={class:"col-12"},Zo=_(()=>e("p",{class:"headerText"},"LICENSE",-1)),jo={key:0,class:"headerContent"},qo={key:1,class:"error headerContent"},Jo={class:"col-12"},Qo={class:"col-6"},$o=_(()=>e("p",{class:"headerText"},"HIGHEST EDUCATION COMPLETED",-1)),et={key:0,class:"headerContent"},st={key:1,class:"error headerContent"},ot={class:"col-6"},tt=_(()=>e("p",{class:"headerText"}," DEGREE AND COURSE (1st Course Vocational) ",-1)),_t={key:0,class:"headerContent"},dt={key:1,class:"error headerContent"},nt={class:"col-12"},ct={class:"col-6"},it=_(()=>e("p",{class:"headerText"},"DEGREE AND COURSE (2nd Course)",-1)),at={key:0,class:"headerContent"},lt={key:1,class:"error headerContent"},rt={class:"col-6"},ht=_(()=>e("p",{class:"headerText"},"OTHER COURSE",-1)),pt={key:0,class:"headerContent"},mt={key:1,class:"error headerContent"},Ot={class:"col-12"},yt={class:"col-6"},Ct=_(()=>e("p",{class:"headerText"},"REMARKS STATUS OF VACANT POSITION",-1)),Tt={key:0,class:"headerContent"},ut={key:1,class:"error headerContent"},kt={class:"col-6"},Nt=_(()=>e("p",{class:"headerText"},"FORMER INCUMBENT",-1)),vt={key:0,class:"headerContent"},Dt={key:1,class:"error headerContent"},Et={class:"col-12"},ft=_(()=>e("p",{class:"headerText"},"DATE VACATED",-1)),It={key:0,class:"headerContent"},bt={key:1,class:"error headerContent"};function gt(n,c,i,At,s,xt){const a=m("AdminSidebar");return o(),t("div",null,[O(a,{iconText:s.PageTitle,iconDetails:s.PageDetail},null,8,["iconText","iconDetails"]),u,k,N,v,D,e("div",E,[e("div",f,[I,e("p",b,d(s.model.Osd.division),1),g,e("p",A,d(s.model.Osd.fullname),1),x,e("div",S,[e("div",R,[e("div",L,[P,s.model.Osd.id?(o(),t("p",w,d(s.model.Osd.id),1)):(o(),t("p",F,"No Data"))]),e("div",M,[U,s.model.Osd.section_unit?(o(),t("p",G,d(s.model.Osd.section_unit),1)):(o(),t("p",B,"No Data"))])]),e("div",H,[e("div",V,[Y,s.model.Osd.item_number?(o(),t("p",z,d(s.model.Osd.item_number),1)):(o(),t("p",W,"No Data"))]),e("div",K,[X,s.model.Osd.office_location_official_station?(o(),t("p",Z,d(s.model.Osd.office_location_official_station),1)):(o(),t("p",j,"No Data"))])]),e("div",q,[e("div",J,[Q,s.model.Osd.date_position_created?(o(),t("p",$,d(s.model.Osd.date_position_created),1)):(o(),t("p",ee,"No Data"))]),e("div",se,[oe,s.model.Osd.position_level?(o(),t("p",te,d(s.model.Osd.position_level),1)):(o(),t("p",_e,"No Data"))])]),e("div",de,[ne,s.model.Osd.position_title?(o(),t("p",ce,d(s.model.Osd.position_title),1)):(o(),t("p",ie,"No Data"))]),e("div",ae,[le,s.model.Osd.parenthetical_title?(o(),t("p",re,d(s.model.Osd.parenthetical_title),1)):(o(),t("p",he,"No Data"))]),e("div",pe,[e("div",me,[Oe,s.model.Osd.salary_step_increment?(o(),t("p",ye,d(s.model.Osd.salary_step_increment),1)):(o(),t("p",Ce,"No Data"))]),e("div",Te,[ue,s.model.Osd.monthly_rate?(o(),t("p",ke,d(s.model.Osd.monthly_rate),1)):(o(),t("p",Ne,"No Data"))])]),e("div",ve,[De,s.model.Osd.designation_as_appropriate_based_on_so?(o(),t("p",Ee,d(s.model.Osd.designation_as_appropriate_based_on_so),1)):(o(),t("p",fe,"No Data"))]),e("div",Ie,[e("div",be,[ge,s.model.Osd.date_of_designation?(o(),t("p",Ae,d(s.model.Osd.date_of_designation),1)):(o(),t("p",xe,"No Data"))]),e("div",Se,[Re,s.model.Osd.special_order_no?(o(),t("p",Le,d(s.model.Osd.special_order_no),1)):(o(),t("p",Pe,"No Data"))])]),e("div",we,[Fe,s.model.Osd.date_filled_up_assumption?(o(),t("p",Me,d(s.model.Osd.date_filled_up_assumption),1)):(o(),t("p",Ue,"No Data"))]),e("div",Ge,[Be,s.model.Osd.office_bureau_service_program?(o(),t("p",He,d(s.model.Osd.office_bureau_service_program),1)):(o(),t("p",Ve,"No Data"))]),e("div",Ye,[ze,s.model.Osd.fund_source_for_contractual?(o(),t("p",We,d(s.model.Osd.fund_source_for_contractual),1)):(o(),t("p",Ke,"No Data"))]),e("div",Xe,[e("div",Ze,[je,s.model.Osd.mode_of_accession_for_appointment_based_positions?(o(),t("p",qe,d(s.model.Osd.mode_of_accession_for_appointment_based_positions),1)):(o(),t("p",Je,"No Data"))]),e("div",Qe,[$e,s.model.Osd.mode_of_separation?(o(),t("p",es,d(s.model.Osd.mode_of_separation),1)):(o(),t("p",ss,"No Data"))])])]),e("div",os,[e("div",ts,[e("div",_s,[ds,s.model.Osd.lastname?(o(),t("p",ns,d(s.model.Osd.lastname),1)):(o(),t("p",cs,"No Data"))]),e("div",is,[as,s.model.Osd.firstname?(o(),t("p",ls,d(s.model.Osd.firstname),1)):(o(),t("p",rs,"No Data"))]),e("div",hs,[ps,s.model.Osd.middlename?(o(),t("p",ms,d(s.model.Osd.middlename),1)):(o(),t("p",Os,"No Data"))]),e("div",ys,[Cs,s.model.Osd.ext?(o(),t("p",Ts,d(s.model.Osd.ext),1)):(o(),t("p",us,"No Data"))])]),e("div",ks,[e("div",Ns,[vs,s.model.Osd.age?(o(),t("p",Ds,d(s.model.Osd.age),1)):(o(),t("p",Es,"No Data"))]),e("div",fs,[Is,s.model.Osd.gender?(o(),t("p",bs,d(s.model.Osd.gender),1)):(o(),t("p",gs,"No Data"))]),e("div",As,[xs,s.model.Osd.civil_status?(o(),t("p",Ss,d(s.model.Osd.civil_status),1)):(o(),t("p",Rs,"No Data"))]),e("div",Ls,[Ps,s.model.Osd.date_of_birth?(o(),t("p",ws,d(s.model.Osd.date_of_birth),1)):(o(),t("p",Fs,"No Data"))])]),e("div",Ms,[Us,s.model.Osd.active_and_working_email_address?(o(),t("p",Gs,d(s.model.Osd.active_and_working_email_address),1)):(o(),t("p",Bs,"No Data"))]),e("div",Hs,[e("div",Vs,[Ys,s.model.Osd.indicate_whether_senior_citizen?(o(),t("p",zs,d(s.model.Osd.indicate_whether_senior_citizen),1)):(o(),t("p",Ws,"No Data"))]),e("div",Ks,[Xs,s.model.Osd.type_of_disability?(o(),t("p",Zs,d(s.model.Osd.type_of_disability),1)):(o(),t("p",js,"No Data"))])]),e("div",qs,[Js,s.model.Osd.indicate_whether_member_of_indigenous_group?(o(),t("p",Qs,d(s.model.Osd.indicate_whether_member_of_indigenous_group),1)):(o(),t("p",$s,"No Data"))]),eo,e("div",so,[e("div",oo,[to,s.model.Osd.employee_id_number?(o(),t("p",_o,d(s.model.Osd.employee_id_number),1)):(o(),t("p",no,"No Data"))]),e("div",co,[io,s.model.Osd.entry_date_in_dswd?(o(),t("p",ao,d(s.model.Osd.entry_date_in_dswd),1)):(o(),t("p",lo,"No Data"))])]),e("div",ro,[e("div",ho,[po,s.model.Osd.date_of_original_appointment?(o(),t("p",mo,d(s.model.Osd.date_of_original_appointment),1)):(o(),t("p",Oo,"No Data"))]),e("div",yo,[Co,s.model.Osd.date_of_last_promotion?(o(),t("p",To,d(s.model.Osd.date_of_last_promotion),1)):(o(),t("p",uo,"No Data"))])]),e("div",ko,[e("div",No,[vo,s.model.Osd.gsis_number?(o(),t("p",Do,d(s.model.Osd.gsis_number),1)):(o(),t("p",Eo,"No Data"))]),e("div",fo,[Io,s.model.Osd.bir_tin_number?(o(),t("p",bo,d(s.model.Osd.bir_tin_number),1)):(o(),t("p",go,"No Data"))])]),e("div",Ao,[e("div",xo,[So,s.model.Osd.sss_number?(o(),t("p",Ro,d(s.model.Osd.sss_number),1)):(o(),t("p",Lo,"No Data"))]),e("div",Po,[wo,s.model.Osd.philhealth_number?(o(),t("p",Fo,d(s.model.Osd.philhealth_number),1)):(o(),t("p",Mo,"No Data"))])]),e("div",Uo,[e("div",Go,[Bo,s.model.Osd.eligibility_csc_and_other_eligibilities?(o(),t("p",Ho,d(s.model.Osd.eligibility_csc_and_other_eligibilities),1)):(o(),t("p",Vo,"No Data"))]),e("div",Yo,[zo,s.model.Osd.eligibility_license_ra_1080?(o(),t("p",Wo,d(s.model.Osd.eligibility_license_ra_1080),1)):(o(),t("p",Ko,"No Data"))])]),e("div",Xo,[Zo,s.model.Osd.license_ra_1080_let_rn_rs_etc?(o(),t("p",jo,d(s.model.Osd.license_ra_1080_let_rn_rs_etc),1)):(o(),t("p",qo,"No Data"))]),e("div",Jo,[e("div",Qo,[$o,s.model.Osd.highest_education_completed?(o(),t("p",et,d(s.model.Osd.highest_education_completed),1)):(o(),t("p",st,"No Data"))]),e("div",ot,[tt,s.model.Osd.degree_and_course_1st_vocational?(o(),t("p",_t,d(s.model.Osd.degree_and_course_1st_vocational),1)):(o(),t("p",dt,"No Data"))])]),e("div",nt,[e("div",ct,[it,s.model.Osd.degree_and_course_2nd_course?(o(),t("p",at,d(s.model.Osd.degree_and_course_2nd_course),1)):(o(),t("p",lt,"No Data"))]),e("div",rt,[ht,s.model.Osd.other_courses?(o(),t("p",pt,d(s.model.Osd.other_courses),1)):(o(),t("p",mt,"No Data"))])]),e("div",Ot,[e("div",yt,[Ct,s.model.Osd.remarks_status_of_vacant_position?(o(),t("p",Tt,d(s.model.Osd.remarks_status_of_vacant_position),1)):(o(),t("p",ut,"No Data"))]),e("div",kt,[Nt,s.model.Osd.former_incumbent?(o(),t("p",vt,d(s.model.Osd.former_incumbent),1)):(o(),t("p",Dt,"No Data"))])]),e("div",Et,[ft,s.model.Osd.date_vacated?(o(),t("p",It,d(s.model.Osd.date_vacated),1)):(o(),t("p",bt,"No Data"))])])])])])}const Rt=l(T,[["render",gt],["__scopeId","data-v-c0faa7a9"]]);export{Rt as default};