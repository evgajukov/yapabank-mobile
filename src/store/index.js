import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: "Acropol",
    asset: {
      id: "AERXACWDKTKBcvHLZch3UozqogjbcPktrfdoSuDxh3Lu",
      name: "ACRA",
    },
    wallet: {
      address: null,
    },
    txlist: [],
    contacts: [],
  },
  getters,
  mutations
});