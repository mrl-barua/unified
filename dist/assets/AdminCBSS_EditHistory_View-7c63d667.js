import{_ as a,A as r,a as h,b as C,r as E,o,c as t,d as p,e as s,t as _,p as S,i as A}from"./index-6fcab6bb.js";const b={name:"AdminCBSSView",components:{AdminSidebar:r},data(){return{PageTitle:"Community Based Services Section",PageDetail:"View Edit Details",CbssID:"",errorList:"",model:{Cbss:{ID:"",DATE:"",NAME:"",AGE:"",SEX:"",CASE_CATEGORY:"",SUB_CATEGORY:"",MODE_OF_ADMISSION:"",ADDRESS:"",NON_MONETARY_SERVICES:"",Purpose:"",AMOUNT:"",REMARKS:"",REPONSIBLE_PERSON:"",NUMBER_OF_SERVICES_AVAILED:""}}}},mounted(){this.CbssID=this.$route.params.ID,this.CbssEditHistoryData(this.$route.params.ID)},methods:{async CbssEditHistoryData(d){try{const n=await h.get(`${C}/api/cbssVersion/${d}/view`),l=n.data.Cbss;console.log(n.data.Cbss),!l||Object.keys(l).length===0?this.model.Cbss=this.model.Cbss.map(()=>"No Data"):Object.assign(this.model.Cbss,l)}catch(n){n.response?alert(n.response.data.message):console.error(n)}}}},c=d=>(S("data-v-bca9361d"),d=d(),A(),d),D=c(()=>s("br",null,null,-1)),m=c(()=>s("br",null,null,-1)),N=c(()=>s("br",null,null,-1)),O=c(()=>s("br",null,null,-1)),R=c(()=>s("br",null,null,-1)),v={class:"container-fluid wrapper"},y={class:"col-12"},T=c(()=>s("p",{class:"headerText text-center"},"NAME",-1)),I={class:"headerContent text-center"},u=c(()=>s("hr",{class:"hr pb-4"},null,-1)),M={class:"col-6 first-row"},k={class:"col-12"},x={class:"col-12"},V=c(()=>s("p",{class:"headerText"},"ADDRESS",-1)),B={key:0,class:"headerContent"},g={key:1,class:"error headerContent"},P={class:"col-12"},U={class:"col-12"},f=c(()=>s("p",{class:"headerText"},"AGE",-1)),w={key:0,class:"headerContent"},G={key:1,class:"error headerContent"},Y={class:"col-12"},F={class:"col-12"},L=c(()=>s("p",{class:"headerText"},"AMOUNT",-1)),H={key:0,class:"headerContent"},K={key:1,class:"error headerContent"},X={class:"col-12"},j={class:"col-12"},q=c(()=>s("p",{class:"headerText"},"CASE CATEGORY",-1)),z={key:0,class:"headerContent"},J={key:1,class:"error headerContent"},Q={class:"col-12"},W={class:"col-12"},Z=c(()=>s("p",{class:"headerText"},"DATE",-1)),$={key:0,class:"headerContent"},ss={key:1,class:"error headerContent"},es={class:"col-6 second-row"},os={class:"col-12"},ts={class:"col-12"},cs=c(()=>s("p",{class:"headerText"},"MODE OF ADMISSION",-1)),_s={key:0,class:"headerContent"},ns={key:1,class:"error headerContent"},ds={class:"col-12"},ls={class:"col-12"},is=c(()=>s("p",{class:"headerText"},"NON MONETARY SERVICES",-1)),as={key:0,class:"headerContent"},rs={key:1,class:"error headerContent"},hs={class:"col-12"},Cs={class:"col-12"},Es=c(()=>s("p",{class:"headerText"},"NUMBER OF SERVICES AVAILED",-1)),ps={key:0,class:"headerContent"},Ss={key:1,class:"error headerContent"},As={class:"col-12"},bs={class:"col-12"},Ds=c(()=>s("p",{class:"headerText"},"PURPOSE",-1)),ms={key:0,class:"headerContent"},Ns={key:1,class:"error headerContent"},Os={class:"col-12"},Rs={class:"col-12"},vs=c(()=>s("p",{class:"headerText"},"REMARKS",-1)),ys={key:0,class:"headerContent"},Ts={key:1,class:"error headerContent"},Is={class:"col-12"},us={class:"col-12"},Ms=c(()=>s("p",{class:"headerText"},"SEX",-1)),ks={key:0,class:"headerContent"},xs={key:1,class:"error headerContent"};function Vs(d,n,l,Bs,e,gs){const i=E("AdminSidebar");return o(),t("div",null,[p(i,{iconText:e.PageTitle,iconDetails:e.PageDetail},null,8,["iconText","iconDetails"]),D,m,N,O,R,s("div",v,[s("div",y,[T,s("p",I,_(e.model.Cbss.NAME),1),u,s("div",M,[s("div",k,[s("div",x,[V,e.model.Cbss.ADDRESS?(o(),t("p",B,_(e.model.Cbss.ADDRESS),1)):(o(),t("p",g,"No Data"))])]),s("div",P,[s("div",U,[f,e.model.Cbss.AGE?(o(),t("p",w,_(e.model.Cbss.AGE),1)):(o(),t("p",G,"No Data"))])]),s("div",Y,[s("div",F,[L,e.model.Cbss.AMOUNT?(o(),t("p",H,_(e.model.Cbss.AMOUNT),1)):(o(),t("p",K,"No Data"))])]),s("div",X,[s("div",j,[q,e.model.Cbss.CASE_CATEGORY?(o(),t("p",z,_(e.model.Cbss.CASE_CATEGORY),1)):(o(),t("p",J,"No Data"))])]),s("div",Q,[s("div",W,[Z,e.model.Cbss.DATE?(o(),t("p",$,_(e.model.Cbss.DATE),1)):(o(),t("p",ss,"No Data"))])])]),s("div",es,[s("div",os,[s("div",ts,[cs,e.model.Cbss.MODE_OF_ADMISSION?(o(),t("p",_s,_(e.model.Cbss.MODE_OF_ADMISSION),1)):(o(),t("p",ns,"No Data"))])]),s("div",ds,[s("div",ls,[is,e.model.Cbss.NON_MONETARY_SERVICES?(o(),t("p",as,_(e.model.Cbss.NON_MONETARY_SERVICES),1)):(o(),t("p",rs,"No Data"))])]),s("div",hs,[s("div",Cs,[Es,e.model.Cbss.NUMBER_OF_SERVICES_AVAILED?(o(),t("p",ps,_(e.model.Cbss.NUMBER_OF_SERVICES_AVAILED),1)):(o(),t("p",Ss,"No Data"))])]),s("div",As,[s("div",bs,[Ds,e.model.Cbss.Purpose?(o(),t("p",ms,_(e.model.Cbss.Purpose),1)):(o(),t("p",Ns,"No Data"))])]),s("div",Os,[s("div",Rs,[vs,e.model.Cbss.REMARKS?(o(),t("p",ys,_(e.model.Cbss.REMARKS),1)):(o(),t("p",Ts,"No Data"))])]),s("div",Is,[s("div",us,[Ms,e.model.Cbss.SEX?(o(),t("p",ks,_(e.model.Cbss.SEX),1)):(o(),t("p",xs,"No Data"))])])])])])])}const Us=a(b,[["render",Vs],["__scopeId","data-v-bca9361d"]]);export{Us as default};