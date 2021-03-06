import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//Another's libraries
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
;
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  data: {

  },
  router,
  render: h => h(App)
}).$mount("#app");
