import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import FastClick from "fastclick";
import './common/flexible'

Vue.config.productionTip = false;
FastClick.attach(document.body);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
