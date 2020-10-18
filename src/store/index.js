import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: null,
    type: null,
    asset: null,
    wallet: { address: null },
    txlist: [],
    contacts: [],
    admins: [],
  },
  getters,
  mutations,
  actions,
});