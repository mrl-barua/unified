<template>
 
 <router-view></router-view>
 

 </template>
 
 <script>
 import LoginForm from './views/LoginForm'
 import Dashboard from './views/Dashboard'

 export default {
   name: 'App',
   components: {
     LoginForm,
     Dashboard
   }
 }
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }


 /* CSS RESPONSIVE GLOBAL STYLES START */
 * { box-sizing: border-box; }


[class*="col-"]{
    float: left;
	border:1px solid red;  
}

.row::after{
    content: "";
    clear:both; }


 /* CSS RESPONSIVE GLOBAL STYLES END */
 </style>
 