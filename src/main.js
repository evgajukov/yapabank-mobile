import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

import Clipboard from "v-clipboard";
import VueQrcodeReader from "vue-qrcode-reader";
import VueMask from "v-mask";

import moment from "moment";
import "./registerServiceWorker";

import config from "../config.json";

store.state.appName = config.appName;
store.state.type = config.type;
if (config.type == "single") {
  store.state.asset = config.asset;
  store.state.admins = config.admin;
}

moment.locale("ru");

Vue.config.productionTip = false;
Vue.use(Clipboard);
Vue.use(VueQrcodeReader);
Vue.use(VueMask);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
