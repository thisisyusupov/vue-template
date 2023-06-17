

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

// import Vuetify from "./plugins/vuetify";
// import 'vuetify/dist/vuetify.min.css'

import './scss/app.scss';
Vue.use(Antd);

Vue.use(VueSweetalert2);

Vue.config.productionTip = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);
Vue.component("layout-dashboard", DashboardLayout);
Vue.component("layout-dashboard-rtl", DashboardRTLLayout);
Vue.prototype.$http = axiosHttp
Vue.prototype.$eventBus = new Vue();

// import Vue from 'vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
// import './plugins/vuetify/index.js' // path to vuetify export

Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
