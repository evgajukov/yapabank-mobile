import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import router from "./router";

import Clipboard from "v-clipboard";
import VueQrcodeReader from "vue-qrcode-reader";
import VueMask from "v-mask";

import moment from "moment";
import './registerServiceWorker'

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
