import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueImg from "v-img";

Vue.use(VueImg);

import "./assets/global.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
