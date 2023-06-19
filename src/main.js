import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import DefaultLayout from './layouts/Default.vue'
import DashboardLayout from './layouts/Dashboard.vue'
import DashboardRTLLayout from './layouts/DashboardRTL.vue'
import router from './router'
import axiosHttp from "./axios";
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSweetalert2 from 'vue-sweetalert2';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import './scss/app.scss';


Vue.use(Antd);
Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);
Vue.prototype.$http = axiosHttp
Vue.prototype.$eventBus = new Vue();
import vuetify from '@/plugins/vuetify'

Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
