import { createApp } from 'vue'
import App from './App.vue'
window.$ = window.jQuery = require("jquery");

import router from './routes';
import setAuthHeader from './utils/setAuthHeader';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './module/store';

if(localStorage.jwtToken){
    setAuthHeader(localStorage.jwtToken);
 } else{
    setAuthHeader(false);
 }

import "../node_modules/admin-lte/dist/js/adminlte.min.js"
import "../node_modules/admin-lte/plugins/select2/js/select2.full.min.js"
import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
import "../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"
import "../node_modules/admin-lte/plugins/daterangepicker/daterangepicker.js"
import "../node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js"
import "../node_modules/admin-lte/plugins/sparklines/sparkline.js"
import "../node_modules/admin-lte/plugins/jquery/jquery.min.js"
import "../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js"
import "../node_modules/admin-lte/plugins/inputmask/jquery.inputmask.min.js"
import "../node_modules/admin-lte/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
import "../node_modules/admin-lte/plugins/bs-stepper/js/bs-stepper.min.js"
import "../node_modules/admin-lte/plugins/dropzone/min/dropzone.min.js"
import "datatables.net-buttons-bs4";

import "datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "datatables.net-buttons/js/buttons.colVis";
import "datatables.net-buttons/js/buttons.flash";
import "datatables.net-buttons/js/buttons.html5";
import "datatables.net-buttons/js/buttons.print";


import '../node_modules/admin-lte/dist/css/adminlte.min.css'
import "../node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "../node_modules/admin-lte/plugins/summernote/summernote-bs4.min.css"
import "../node_modules/admin-lte/plugins/daterangepicker/daterangepicker.css"
import "../node_modules/admin-lte/plugins/jqvmap/jqvmap.min.css"
import "../node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
import "../node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
import "../node_modules/admin-lte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css"
import "../node_modules/admin-lte/plugins/bs-stepper/css/bs-stepper.min.css"
import "../node_modules/admin-lte/plugins/dropzone/min/dropzone.min.css"




const options = {
   confirmButtonColor: '#41b882',
   icon:'success'
 };



createApp(App).use(router).use(VueSweetalert2, options).use(store).mount('#app')
