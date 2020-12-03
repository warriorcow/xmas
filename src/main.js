import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueSocialSharing from "vue-social-sharing";
import VueMeta from "vue-meta";

Vue.use(VueSocialSharing);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
