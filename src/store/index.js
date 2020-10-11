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
    signer: null,
    wallet: {
      address: null,
    },
    txlist: [],
    contacts: [
      { id: 1, name: "Хасан Карданов", address: "3P2o7ddaTLiw5QSqBevG7Y3RhFSu9xkA9Nf" },
    ],
  },
  getters,
  mutations
});