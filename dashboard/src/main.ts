import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueAxios from "vue-axios";
import axios from "axios";

import { Component } from "vue-property-decorator";
import Default from "@/layouts/Default.vue";
import Blank from "@/layouts/Blank.vue";

Vue.component("default", Default);
Vue.component("blank", Blank);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
