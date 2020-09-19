import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import Clipboard from "v-clipboard";
import VueQrcodeReader from "vue-qrcode-reader";

Vue.config.productionTip = false;
Vue.use(Clipboard);
Vue.use(VueQrcodeReader);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
